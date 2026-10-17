/* === 1. CONFIGURAZIONE E STATO DELL'APPLICAZIONE === */

// Durata in secondi per ciascuna modalità
const DURATIONS = {
  focus: 25 * 60,       // 25 minuti (1500 secondi)
  shortBreak: 5 * 60,   // 5 minuti (300 secondi)
  longBreak: 15 * 60    // 15 minuti (900 secondi)
};

// Nomi per il titolo della scheda del browser
const MODE_NAMES = {
  focus: 'Focus',
  shortBreak: 'Pausa breve',
  longBreak: 'Pausa lunga'
};

// Testi visualizzati sotto il countdown dentro l'anello
const MODE_LABELS = {
  focus: 'CONCENTRATI',
  shortBreak: 'RESPIRA',
  longBreak: 'RIPOSATI'
};

// Circonferenza dell'anello SVG: 2 * PI * raggio (2 * PI * 98 ≈ 615.75)
const RING_CIRCUMFERENCE = 2 * Math.PI * 98;

// Variabili di stato dell'applicazione
let currentMode = 'focus';
let totalDuration = DURATIONS.focus;
let timeLeft = totalDuration;
let timerId = null;
let isRunning = false;
let completedSessions = 0; // Pomodori completati nel ciclo da 4 (da 0 a 4)
let totalPomodorosToday = 0;
let totalMinutesToday = 0;


/* === 2. SELEZIONE ELEMENTI DOM === */

const timerDisplay = document.querySelector('#timer-display');
const timerLabel = document.querySelector('#timer-label');
const progressCircle = document.querySelector('#progress-circle');
const btnToggle = document.querySelector('#btn-toggle');
const btnToggleIcon = document.querySelector('#btn-toggle-icon');
const btnToggleText = document.querySelector('#btn-toggle-text');
const btnReset = document.querySelector('#btn-reset');
const btnSkip = document.querySelector('#btn-skip');
const modeButtons = document.querySelectorAll('.mode-button');
const sessionTitle = document.querySelector('#session-title');
const sessionDots = document.querySelectorAll('.session-dot');
const summaryText = document.querySelector('#summary-text');


/* === 3. AGGIORNAMENTO GRAFICO E FORMATTAZIONE === */

// Converte i secondi nel formato leggibile MM:SS (es. 1500 -> "25:00")
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

// Aggiorna il testo centrale del countdown
function updateTimerDisplay() {
  timerDisplay.textContent = formatTime(timeLeft);
}

// Aggiorna il titolo della scheda del browser (es. "18:42 · Focus")
function updateBrowserTitle() {
  document.title = `${formatTime(timeLeft)} · ${MODE_NAMES[currentMode]}`;
}

// Svuota l'anello progressivo circolare man mano che il tempo scorre
function updateProgressRing() {
  const fractionRemaining = timeLeft / totalDuration;
  const strokeOffset = RING_CIRCUMFERENCE * (1 - fractionRemaining);
  progressCircle.style.strokeDashoffset = strokeOffset;
}

// Modifica testo e icona del pulsante principale (Avvia/Pausa)
function updateControlsUI() {
  if (isRunning) {
    btnToggleIcon.textContent = 'pause';
    btnToggleText.textContent = 'Pausa';
    btnToggle.setAttribute('aria-label', 'Metti in pausa il timer');
  } else {
    btnToggleIcon.textContent = 'play_arrow';
    btnToggleText.textContent = 'Avvia';
    btnToggle.setAttribute('aria-label', 'Avvia il timer');
  }
}

// Aggiorna i 4 pallini e il testo della sessione corrente
function updateSessionUI() {
  const currentSessionNumber = Math.min(completedSessions + 1, 4);
  sessionTitle.textContent = `Sessione ${currentSessionNumber} di 4`;

  sessionDots.forEach(function(dot, index) {
    if (index < completedSessions) {
      dot.classList.add('completed');
    } else {
      dot.classList.remove('completed');
    }
  });
}

// Aggiorna la card del riepilogo a piè di pagina
function updateSummaryUI() {
  summaryText.textContent = `Oggi: ${totalPomodorosToday} pomodori · ${totalMinutesToday} min di concentrazione`;
}


/* === 4. CAMBIO MODALITÀ (FOCUS / PAUSA BREVE / PAUSA LUNGA) === */

// Imposta la modalità scelta, aggiorna tema e ripristina la durata
function setMode(newMode) {
  pauseTimer();

  currentMode = newMode;
  totalDuration = DURATIONS[newMode];
  timeLeft = totalDuration;

  // Aggiorna il testo sotto il timer
  timerLabel.textContent = MODE_LABELS[newMode];

  // Nelle pause aggiunge la classe al body per cambiare il colore primario in verde
  if (newMode === 'shortBreak' || newMode === 'longBreak') {
    document.body.classList.add('break-mode');
  } else {
    document.body.classList.remove('break-mode');
  }

  // Aggiorna la scheda attiva nel menu in alto
  modeButtons.forEach(function(button) {
    if (button.dataset.mode === newMode) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  // Aggiorna la schermata e l'anello circolare
  updateTimerDisplay();
  updateProgressRing();
  updateBrowserTitle();
  updateControlsUI();
}


/* === 5. GESTIONE DEL CONTO ALLA ROVESCIA === */

// Avvia l'intervallo di 1 secondo per scalare il tempo
function startTimer() {
  if (isRunning) return;
  isRunning = true;
  updateControlsUI();

  timerId = setInterval(function() {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
      updateProgressRing();
      updateBrowserTitle();
    } else {
      handleTimerComplete();
    }
  }, 1000);
}

// Mette in pausa il conteggio
function pauseTimer() {
  isRunning = false;
  clearInterval(timerId);
  timerId = null;
  updateControlsUI();
}

// Alterna tra avvio e pausa con il pulsante principale
function toggleTimer() {
  if (isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

// Riporta il timer all'inizio della modalità attuale
function resetTimer() {
  pauseTimer();
  timeLeft = totalDuration;
  updateTimerDisplay();
  updateProgressRing();
  updateBrowserTitle();
}


/* === 6. COMPLETAMENTO DELLA SESSIONE E SALTO === */

// Gestisce il passaggio automatico quando il tempo giunge a 00:00
function handleTimerComplete() {
  pauseTimer();

  if (currentMode === 'focus') {
    // Incrementa le statistiche di concentrazione
    completedSessions++;
    totalPomodorosToday++;
    totalMinutesToday += 25;

    updateSessionUI();
    updateSummaryUI();

    // Dopo la 4ª sessione parte la Pausa lunga e i pallini si azzerano
    if (completedSessions >= 4) {
      completedSessions = 0;
      updateSessionUI();
      setMode('longBreak');
      startTimer();
    } else {
      // Altrimenti parte la Pausa breve
      setMode('shortBreak');
      startTimer();
    }
  } else {
    // Al termine di una pausa si torna sempre a Focus
    setMode('focus');
  }
}

// Salta subito alla modalità successiva del ciclo
function skipToNext() {
  pauseTimer();

  if (currentMode === 'focus') {
    if (completedSessions >= 3) {
      setMode('longBreak');
    } else {
      setMode('shortBreak');
    }
  } else {
    setMode('focus');
  }
}


/* === 7. ASSEGNAZIONE EVENTI E AVVIO INIZIALE === */

// Clic su pulsante Avvia / Pausa
btnToggle.addEventListener('click', toggleTimer);

// Clic su pulsante Reset
btnReset.addEventListener('click', resetTimer);

// Clic su pulsante Salta
btnSkip.addEventListener('click', skipToNext);

// Clic sulle schede delle modalità
modeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const selectedMode = button.dataset.mode;
    setMode(selectedMode);
  });
});

// Impostazione iniziale al caricamento
progressCircle.style.strokeDasharray = RING_CIRCUMFERENCE;
updateTimerDisplay();
updateProgressRing();
updateBrowserTitle();
updateSessionUI();
updateSummaryUI();
