<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Golden Point Termin buchen">
        <header class="header">
          <button class="back-button" type="button" @click="goBack">
            <span class="back-arrow">← Ergebnisse</span>
          </button>
          <div class="logo-mark header-logo" @click="goToSports">
            <span class="logo-4">4</span><span class="logo-talents">talents</span>
          </div>
        </header>

        <section class="content">
          <div class="title-block">
            <h1 class="title highlight refined-title">
              <span class="title-emoji">⭐</span>
              <span>Golden Point Termin buchen</span>
            </h1>
            <p class="teaser refined-teaser">
              Wähle einen passenden Termin im Golden Point und sichere deinem
              Kind eine individuelle sportliche Auswertung.
            </p>
          </div>

          <section class="card booking-summary-card" aria-label="Golden Point Zusammenfassung">
            <div class="booking-summary-row">
              <div class="booking-summary-main">
                <div class="booking-location-label">📍 Standort</div>
                <div class="booking-location-name">Golden Point Berlin</div>
                <div class="booking-location-meta">
                  Professionelles Diagnostik-Zentrum für Kinder und Jugendliche
                </div>
              </div>
            </div>
            <div class="booking-summary-tags">
              <span class="summary-pill">Dauer ca. 90 Minuten</span>
              <span class="summary-pill">1 Kind pro Termin</span>
            </div>
          </section>

          <section class="card date-card" aria-label="Datum auswählen">
            <h2 class="section-heading refined-section-heading">Datum auswählen</h2>
            <p class="date-hint">
              Wähle einen Tag, an dem ihr entspannt zum Golden Point kommen könnt.
            </p>

            <div class="date-picker-header">
              <div class="date-picker-month">Oktober 2024</div>
              <div class="date-picker-legend">Tippe auf einen Tag, um ihn auszuwählen.</div>
            </div>

            <div class="date-picker-grid">
              <div class="date-weekday">Mo</div>
              <div class="date-weekday">Di</div>
              <div class="date-weekday">Mi</div>
              <div class="date-weekday">Do</div>
              <div class="date-weekday">Fr</div>
              <div class="date-weekday weekend">Sa</div>
              <div class="date-weekday weekend">So</div>

              <button
                v-for="d in 7"
                :key="d"
                type="button"
                class="date-cell"
                :class="{ weekend: d >= 6, active: selectedDate === d + 6 }"
                @click="selectedDate = d + 6"
              >
                <span class="date-number">{{ d + 6 }}</span>
              </button>
            </div>

            <div class="date-selected-row">
              <div class="date-icon">📅</div>
              <div class="date-texts">
                <div class="date-label">Gewähltes Datum</div>
                <div class="date-value">{{ selectedDateLabel }}</div>
              </div>
            </div>

            <div class="date-shortcuts">
              <button type="button" class="chip" @click="setNextSaturday">Nächster Samstag</button>
              <button type="button" class="chip">Nächste Ferien</button>
            </div>
          </section>

          <section class="card time-card" aria-label="Uhrzeit auswählen">
            <h2 class="section-heading refined-section-heading">Uhrzeit auswählen</h2>
            <p class="time-hint">Suche dir eine Startzeit aus, die für dein Kind gut passt.</p>

            <div class="time-of-day-row">
              <span class="time-of-day-label">Tageszeit</span>
              <div class="time-of-day-chips">
                <button
                  type="button"
                  class="time-of-day-chip"
                  :class="{ active: timeOfDay === 'vormittag' }"
                  @click="timeOfDay = 'vormittag'"
                >
                  Vormittag
                </button>
                <button
                  type="button"
                  class="time-of-day-chip"
                  :class="{ active: timeOfDay === 'nachmittag' }"
                  @click="timeOfDay = 'nachmittag'"
                >
                  Nachmittag
                </button>
              </div>
            </div>

            <div class="time-slots enhanced">
              <button
                v-for="slot in timeSlots"
                :key="slot.time"
                type="button"
                class="time-slot"
                :class="{ active: selectedTime === slot.time }"
                @click="selectedTime = slot.time"
              >
                <span class="time-slot-time">{{ slot.time }}</span>
                <span class="time-slot-meta">{{ slot.meta }}</span>
              </button>
            </div>

            <div class="time-legend">
              <span class="time-dot"></span>
              <span class="time-legend-text">Gelb markiert = besonders beliebte Startzeit</span>
            </div>
          </section>

          <section class="card contact-card" aria-label="Kontaktdaten prüfen">
            <h2 class="section-heading refined-section-heading">Deine Kontaktdaten</h2>
            <p class="contact-hint">
              Wir bestätigen deinen Termin per E-Mail und können dich bei Fragen erreichen.
            </p>
            <div class="input-field app-input-wrap">
              <span class="app-input-label">Name der Kontaktperson</span>
              <input v-model="contactName" type="text" class="app-input" placeholder="Max Mustermann" />
            </div>
            <div class="input-field app-input-wrap">
              <span class="app-input-label">E-Mail-Adresse</span>
              <input v-model="contactEmail" type="email" class="app-input" placeholder="deine@email.de" />
            </div>
            <div class="input-field app-input-wrap">
              <span class="app-input-label">Mobilnummer (optional)</span>
              <input v-model="contactPhone" type="tel" class="app-input" placeholder="+49 ..." />
            </div>
          </section>

          <section class="card booking-confirm-card" aria-label="Termin zusammenfassen">
            <div class="booking-confirm-top">
              <div class="booking-confirm-title-row">
                <span class="booking-confirm-icon">✅</span>
                <div class="booking-confirm-texts">
                  <div class="booking-confirm-title">Dein Termin im Golden Point</div>
                  <div class="booking-confirm-sub">
                    Datum &amp; Uhrzeit werden final in der Bestätigung angezeigt.
                  </div>
                </div>
              </div>
              <div class="booking-confirm-meta-row">
                <span class="confirm-pill">Wohnzimmer-Ergebnisse eingebunden</span>
                <span class="confirm-pill">Individuelle Empfehlung</span>
              </div>
            </div>
            <p class="booking-price-text">
              Die Einzeldiagnostik kostet <strong>139€</strong>.
            </p>
            <button class="primary-button refined-primary" type="button" @click="confirmTermin">
              <span class="button-label">Termin bestätigen</span>
            </button>
            <p class="booking-hint-text">
              Mit Klick auf „Termin bestätigen“ wirst du zum Payment
              weitergeleitet und deine Anfrage an den Golden Point
              übermittelt. Du erhältst alle Details per E-Mail.
            </p>
          </section>
        </section>

        <footer class="footer">
          <div class="progress-dots" aria-label="Fortschritt 9 von 9">
            <span v-for="i in 9" :key="i" class="dot active"></span>
          </div>
        </footer>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const selectedDate = ref(12)
const selectedTime = ref('09:30')
const timeOfDay = ref('vormittag')
const contactName = ref('')
const contactEmail = ref('')
const contactPhone = ref('')

const timeSlots = [
  { time: '09:30', meta: 'Morgens · Empfehlung' },
  { time: '11:30', meta: 'Später Vormittag' },
  { time: '14:00', meta: 'Nachmittag' }
]

const selectedDateLabel = computed(() => {
  const d = selectedDate.value
  const weekdays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
  const idx = (d - 7 + 7) % 7
  return `${weekdays[idx]}, ${String(d).padStart(2, '0')}.10.2024`
})

function goBack() {
  router.back()
}

function goToSports() {
  router.push('/screen/19')
}

function setNextSaturday() {
  selectedDate.value = 12
}

function confirmTermin() {
  alert('Termin wird bestätigt – Weiterleitung zum Payment.')
}
</script>

<style scoped>
.app-root {
  background:
    radial-gradient(circle at top, rgba(255, 215, 0, 0.18), transparent 60%),
    radial-gradient(circle at bottom right, rgba(255, 215, 0, 0.1), transparent 55%),
    var(--background);
  color: var(--foreground);
}
.screen {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 16px 20px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  padding-bottom: 8px;
}
.footer { padding-top: 10px; display: flex; flex-direction: column; gap: 8px; }

.back-button {
  background: transparent;
  border: none;
  padding: 4px 0;
  color: var(--foreground);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
.back-arrow { white-space: nowrap; }
.header-logo { padding: 4px 14px; cursor: pointer; }
.logo-mark { display: inline-flex; align-items: center; gap: 6px; border-radius: 999px; background: rgba(255, 215, 0, 0.16); }
.logo-4 { font-size: 16px; font-weight: 800; color: var(--primary); }
.logo-talents { font-size: 15px; font-weight: 700; color: var(--foreground); }

.title-block { display: flex; flex-direction: column; gap: 8px; }
.title { margin: 0; display: flex; align-items: center; gap: 10px; font-size: 22px; font-weight: 800; }
.title.highlight { color: var(--primary); }
.title-emoji { font-size: 22px; }
.teaser { margin: 0; font-size: 14px; color: var(--card-foreground); }
.refined-teaser { color: var(--muted-foreground); }

.card {
  border-radius: var(--radius-lg);
  background: var(--card);
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.booking-summary-card {
  background:
    radial-gradient(circle at top left, rgba(255, 215, 0, 0.12), transparent 55%),
    var(--card);
  border: 1px solid rgba(255, 215, 0, 0.35);
}
.booking-summary-row { display: flex; justify-content: space-between; gap: 8px; }
.booking-summary-main { display: flex; flex-direction: column; gap: 4px; }
.booking-location-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted-foreground); }
.booking-location-name { font-size: 15px; font-weight: 700; }
.booking-location-meta { font-size: 12px; color: var(--muted-foreground); }
.booking-summary-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 2px; }
.summary-pill {
  padding: 4px 10px;
  border-radius: 999px;
  background-color: var(--muted);
  font-size: 11px;
  color: var(--muted-foreground);
}

.section-heading { margin: 0 0 4px 0; font-size: 14px; font-weight: 700; }
.refined-section-heading { font-size: 15px; }
.date-hint, .time-hint, .contact-hint { margin: 0 0 8px 0; font-size: 12px; color: var(--muted-foreground); }

.date-picker-header { display: flex; flex-direction: column; gap: 2px; margin-bottom: 6px; }
.date-picker-month { font-size: 13px; font-weight: 600; }
.date-picker-legend { font-size: 11px; color: var(--muted-foreground); }
.date-picker-grid {
  margin-top: 4px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  font-size: 11px;
}
.date-weekday { text-align: center; color: var(--muted-foreground); }
.date-weekday.weekend { color: var(--primary); }
.date-cell {
  border: none;
  border-radius: 999px;
  padding: 6px 0;
  background-color: var(--input);
  color: var(--foreground);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  cursor: pointer;
}
.date-cell.weekend { color: var(--primary); }
.date-cell.active {
  background: radial-gradient(circle at top, var(--primary), rgba(255, 215, 0, 0.1));
  color: var(--primary-foreground);
  box-shadow: 0 0 14px rgba(255, 215, 0, 0.7);
}
.date-selected-row {
  margin-top: 10px;
  padding: 10px 12px;
  border-radius: var(--radius-md);
  background-color: var(--input);
  display: flex;
  align-items: center;
  gap: 10px;
}
.date-icon {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background-color: var(--muted);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}
.date-texts { display: flex; flex-direction: column; }
.date-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted-foreground); }
.date-value { font-size: 14px; color: var(--foreground); }
.date-shortcuts { margin-top: 8px; display: flex; flex-wrap: wrap; gap: 8px; }
.chip {
  border-radius: 999px;
  border: 1px solid rgba(255, 215, 0, 0.5);
  background: transparent;
  padding: 6px 12px;
  font-size: 12px;
  color: var(--primary);
  cursor: pointer;
}

.time-of-day-row { margin-top: 4px; display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.time-of-day-label { font-size: 11px; color: var(--muted-foreground); }
.time-of-day-chips { display: flex; gap: 6px; }
.time-of-day-chip {
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: transparent;
  padding: 4px 10px;
  font-size: 11px;
  color: var(--foreground);
  cursor: pointer;
}
.time-of-day-chip.active {
  border-color: var(--primary);
  background: rgba(255, 215, 0, 0.14);
  color: var(--primary);
}
.time-slots.enhanced { margin-top: 10px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
.time-slot {
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  background-color: var(--input);
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  font-size: 13px;
  color: var(--foreground);
  cursor: pointer;
}
.time-slot.active {
  border-color: var(--primary);
  background:
    radial-gradient(circle at top, rgba(255, 215, 0, 0.4), transparent 65%),
    var(--input);
  box-shadow: 0 0 18px rgba(255, 215, 0, 0.7);
}
.time-slot-time { font-weight: 600; }
.time-slot-meta { font-size: 11px; color: var(--muted-foreground); }
.time-legend { margin-top: 8px; display: flex; align-items: center; gap: 6px; font-size: 11px; color: var(--muted-foreground); }
.time-dot { width: 10px; height: 10px; border-radius: 999px; background: var(--primary); box-shadow: 0 0 10px rgba(255, 215, 0, 0.9); }

.input-field { display: flex; flex-direction: column; gap: 4px; }

.booking-confirm-card {
  border-radius: var(--radius-lg);
  padding: 12px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 215, 0, 0)), var(--card);
  border: 1px solid rgba(255, 215, 0, 0.5);
  box-shadow: 0 0 24px rgba(255, 215, 0, 0.4);
}
.booking-confirm-top { display: flex; flex-direction: column; gap: 8px; }
.booking-confirm-title-row { display: flex; gap: 8px; }
.booking-confirm-icon { font-size: 20px; }
.booking-confirm-texts { display: flex; flex-direction: column; gap: 2px; }
.booking-confirm-title { font-size: 15px; font-weight: 700; }
.booking-confirm-sub { font-size: 12px; color: var(--muted-foreground); }
.booking-confirm-meta-row { display: flex; flex-wrap: wrap; gap: 6px; }
.confirm-pill {
  padding: 4px 10px;
  border-radius: 999px;
  background-color: var(--muted);
  font-size: 11px;
  color: var(--muted-foreground);
}
.booking-price-text { margin: 8px 0 0 0; font-size: 14px; }
.primary-button {
  margin-top: 10px;
  width: 100%;
  border: none;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at top left, #ffffff, var(--primary));
  color: var(--primary-foreground);
  padding: 13px 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
  cursor: pointer;
}
.booking-hint-text { margin: 8px 0 0 0; font-size: 11px; color: var(--muted-foreground); }

.progress-dots { margin-top: 2px; display: flex; justify-content: center; gap: 6px; }
.dot { width: 10px; height: 6px; border-radius: 999px; background-color: var(--muted); }
.dot.active { background-color: var(--primary); }
</style>
