# Product Requirements Document (PRD): Pomodoro Focus

## 1. Executive Summary & Visione di Prodotto
**Pomodoro Focus** è un'applicazione mobile a schermata singola (single-screen utility) pensata per studenti e professionisti che desiderano massimizzare la concentrazione e ridurre l'affaticamento cognitivo applicando la collaudata Tecnica del Pomodoro. 
L'obiettivo di prodotto è eliminare qualsiasi attrito o distrazione: un'interfaccia zen, immediata, calda e visivamente gratificante che mette al centro il tempo, l'intenzione di studio e la tracciabilità delle sessioni giornaliere.

---

## 2. Target Audience & Personas
- **Lo Studente Universitario / delle Superiori**: Ha sessioni di studio intense (esami, compiti), tende a distrarsi con notifiche e smartphone, cerca un metodo semplice per scandire il ritmo di studio (25 min focus / 5 min pausa).
- **Il Professionista / Creativo Digitale**: Lavora al computer (developer, designer, copywriter), ha bisogno di proteggere blocchi di "Deep Work" e di tenere a mente su quale specifico task sta investendo tempo.

---

## 3. Core Principles & UX Philosophy
1. **Zero-friction & Single-screen Experience**: Tutto ciò che serve per avviare, monitorare e completare una sessione è accessibile nella schermata principale, senza menu a tendina o tab bar disperditive.
2. **Intenzionalità (Task Commitment)**: Prima o durante il timer, l'utente dichiara esplicitamente su cosa sta lavorando, rafforzando la motivazione e la concentrazione.
3. **Calm & Friendly Aesthetic**: Estetica calda ("Warm Pomodoro Rhythm"), palette rassicurante in crema e rosso pomodoro naturale, micro-interazioni morbide e font geometrico ad alta leggibilità.

---

## 4. Specifiche Funzionali & User Flow

### 4.1 Header & Accesso Impostazioni
- **Titolo / Brand**: Indicatore brand visivo ("Pomodoro Focus" con icona identificativa a pallino rosso).
- **Settings Trigger**: Pulsante in alto a destra con icona ingranaggio per accedere a:
  - Durate personalizzate (default: 25 min Focus, 5 min Pausa Breve, 15 min Pausa Lunga).
  - Segnali sonori / vibrazione a fine intervallo.
  - Conteggio intervalli prima della pausa lunga (default: 4 sessioni).

### 4.2 Modalità Sessione (Segmented Control)
- **Opzioni**:
  1. **Focus**: 25 minuti di lavoro concentrato (stato attivo di default con background rosso `#E5484D` e testo bianco).
  2. **Pausa breve**: 5 minuti di relax.
  3. **Pausa lunga**: 15 o 20 minuti di riposo profondo dopo un ciclo completo.
- **Comportamento**: Il passaggio manuale resetta o adatta la durata dell'anello centrale con transizione fluida.

### 4.3 Hero Timer & Progress Ring
- **Anello Grafico (Circular Progress Ring)**:
  - Spessore consistente, background neutro chiaro e barra di avanzamento attiva con estremità arrotondate (`stroke-linecap: round`).
  - Progressione circolare oraria sincronizzata al countdown.
- **Display Numerico**:
  - Timer formattato `MM:SS` (es. `18:42`) in stile display bold (~64px) con font a larghezza fissa (`tabular-nums`) per prevenire shift visivi.
  - Etichetta di stato contestuale: "CONCENTRATI", "RESPIRA", "PRENDITI UNA PAUSA".

### 4.4 Intenzione di Lavoro (Task Input)
- **Etichetta**: *"Su cosa stai lavorando?"*
- **Input Field**: Box pulito con placeholder contestuale (es. *"Es. ripassare il CSS"*).
- Permette all'utente di definire il focus corrente, salvato poi nello storico giornaliero al termine del pomodoro.

### 4.5 Controlli Principali (Action Bar)
- **Pulsante Primario ("Avvia" / "Pausa")**:
  - Forma a pillola prominente con accento rosso primario e ombra morbida.
  - Icona play/pause + etichetta testuale dinamica.
- **Pulsante Reset (Sinistro)**:
  - Bottone circolare secondario su sfondo bianco per ripristinare il timer al minuto iniziale.
- **Pulsante Salta (Destro)**:
  - Bottone circolare secondario per saltare alla fase successiva (es. da Focus a Pausa).

### 4.6 Indicatore Ciclo Sessioni
- **Etichetta**: *"Sessione X di 4"* (es. *"Sessione 2 di 4"*).
- **Stepping Indicator**: 4 pallini orizzontali. I pallini completati assumono l'accento verde foglia (`#2F9E6E`), mentre le sessioni future rimangono vuote/neutre.

### 4.7 Tracker Giornaliero (Daily Summary Card)
- **Card a piè di pagina**: Box bianco con ombra leggera e icona orologio.
- **Metrica riassuntiva**: *"Oggi: 3 pomodori · 75 min di concentrazione"*, aggiornata automaticamente al completamento di ogni sessione utile.

---

## 5. Design System & Specifiche UI
- **Device Frame Target**: iOS Mobile standard (390×844 pt).
- **Tipografia**: *Plus Jakarta Sans* (gerarchia da 12px per le didascalie a 64px bold per il timer centrale).
- **Palette Colori**:
  - Background generale: `#FFF8F3` (crema distensivo).
  - Primario / Brand: `#E5484D` (rosso pomodoro vivace ma non aggressivo).
  - Accento positivo / Completamento: `#2F9E6E` (verde salvia / foglia).
  - Superfici / Card: `#FFFFFF` con raccordi generosi (16–24px) e soft shadow.
  - Testo Primario: `#1F1F1F` (nero antracite ad alto contrasto).
  - Testo Secondario / Muted: `#8A8A8A`.

---

## 6. Metriche di Successo (KPIs)
- **Tasso di completamento dei pomodori**: % di sessioni avviate che raggiungono lo 0:00 senza interruzione o skip anticipato.
- **Pomodori medi giornalieri per utente attivo**: target > 4 pomodori/giorno (almeno un ciclo completo).
- **Retention a 7 e 30 giorni**: frequenza di utilizzo settimanale da parte degli studenti in sessione d'esame.
- **Task Input Engagement**: % di sessioni avviate con il campo "Su cosa stai lavorando?" compilato.

---

## 7. Roadmap & Future Enhancements
- **Fase 2 (Audio & Haptics)**: Rumore bianco / suoni ambientali di sottofondo (pioggia, bar, biblioteca) e vibrazioni tattili iOS.
- **Fase 3 (Analytics & Statistiche)**: Schermata dedicata allo storico settimanale/mensile con grafici a barre dei pomodori completati.
- **Fase 4 (Live Activity & Widget)**: Dynamic Island e widget Lock Screen per iOS per controllare il timer a telefono bloccato.
