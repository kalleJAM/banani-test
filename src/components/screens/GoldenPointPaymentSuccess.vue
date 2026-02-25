<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Golden Point Zahlung erfolgreich">
        <header class="header">
          <button type="button" class="back-button" @click="router.back()">
            <span class="back-arrow">Golden Point</span>
          </button>
          <div class="logo-mark header-logo">
            <span class="logo-4">4</span><span class="logo-talents">talents</span>
          </div>
        </header>

        <section class="content">
          <div class="title-block success-title-block">
            <div class="success-icon-ring">
              <span class="success-icon">✓</span>
            </div>
            <div class="success-texts">
              <h1 class="title highlight refined-title">
                <span class="title-emoji">💛</span>
                <span>Zahlung erfolgreich</span>
              </h1>
              <p class="teaser refined-teaser">
                Deine Buchung für den Golden Point ist jetzt bestätigt. Wir
                freuen uns auf Dich!
              </p>
            </div>
          </div>

          <section
            class="card booking-summary-card"
            aria-label="Buchungsdetails Golden Point"
          >
            <div class="booking-summary-row">
              <div class="booking-summary-main">
                <div class="booking-location-label">Standort</div>
                <div class="booking-location-name">Golden Point Berlin</div>
                <div class="booking-location-meta">
                  Professionelles Diagnostik-Zentrum für Kinder und
                  Jugendliche
                </div>
              </div>
            </div>
            <div class="booking-summary-tags">
              <span class="summary-pill">Dauer ca. 90 Minuten</span>
              <span class="summary-pill">1 Kind pro Termin</span>
            </div>
            <div class="booking-price-row">
              <div class="booking-price-label">Einzeldiagnostik</div>
              <div class="booking-price-value">139€</div>
            </div>
            <p class="booking-price-text">
              Die Einzeldiagnostik kostet <strong>139€</strong>. Die Zahlung
              ist bei uns eingegangen.
            </p>
          </section>

          <section
            class="card info-card"
            aria-label="Bestätigung und nächste Schritte"
          >
            <h2 class="section-heading refined-section-heading">
              Bestätigung per E-Mail
            </h2>
            <p class="info-text">
              Wir haben Dir alle Infos zu Deinem Termin per E-Mail geschickt –
              inklusive Adresse, Uhrzeit und Hinweisen zur Vorbereitung.
            </p>
            <div class="info-row">
              <div class="info-bullet"></div>
              <div class="info-row-text">
                Bitte prüfe Dein Postfach und notiere Dir den Termin.
              </div>
            </div>
            <div class="info-row">
              <div class="info-bullet"></div>
              <div class="info-row-text">
                Wenn Du Fragen hast, kannst Du direkt aus der E-Mail Kontakt
                mit uns aufnehmen.
              </div>
            </div>
          </section>

          <section class="card calendar-card" aria-label="Termin verwalten">
            <h2 class="section-heading refined-section-heading">
              Nächster Schritt
            </h2>
            <p class="info-text">
              Speichere den Termin in Deinem Kalender, damit Du und Dein Kind
              entspannt planen könnt.
            </p>
            <div class="calendar-actions">
              <button
                type="button"
                class="secondary-button"
                @click="handleAddToCalendar"
              >
                <span class="button-label">Termin in Kalender speichern</span>
              </button>
              <button type="button" class="text-button" @click="goToDashboard">
                <span class="button-label">Zurück zum Dashboard</span>
              </button>
            </div>
          </section>
        </section>

        <footer class="footer">
          <p class="booking-hint-text">
            Eine Bestätigung mit allen Details wurde an Deine E-Mail-Adresse
            gesendet. Wir sehen uns im Golden Point!
          </p>
          <div class="progress-dots" aria-label="Fortschritt 9 von 9">
            <span v-for="i in 9" :key="i" class="dot active"></span>
          </div>
        </footer>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleAddToCalendar = () => {
  alert('Termin wird zum Kalender hinzugefügt (z. B. .ics-Download oder Kalender-API).')
}

const goToDashboard = () => {
  router.push('/screen/11')
}
</script>

<style scoped>
.app-root {
  background:
    radial-gradient(circle at top, rgba(255, 215, 0, 0.2), transparent 60%),
    radial-gradient(circle at bottom right, rgba(255, 215, 0, 0.12), transparent 55%),
    var(--background);
  color: var(--foreground);
  min-height: 812px;
  display: flex;
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

.back-button {
  background: transparent;
  border: none;
  padding: 4px 0;
  color: var(--foreground);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.back-arrow {
  white-space: nowrap;
}

.header-logo {
  padding: 4px 14px;
}

.logo-mark {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  background: rgba(255, 215, 0, 0.16);
}

.logo-4 {
  font-size: 16px;
  font-weight: 800;
  color: var(--primary);
}

.logo-talents {
  font-size: 15px;
  font-weight: 700;
  color: var(--foreground);
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  padding-bottom: 8px;
}

.footer {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.title-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.success-title-block {
  flex-direction: row;
  align-items: center;
  gap: 14px;
}

.success-icon-ring {
  width: 52px;
  height: 52px;
  border-radius: 999px;
  background:
    radial-gradient(circle at top, rgba(255, 215, 0, 0.35), transparent 70%),
    var(--card);
  border: 1px solid rgba(255, 215, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.success-icon {
  font-size: 26px;
  color: var(--primary);
}

.success-texts {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.title {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: 800;
}

.title.highlight {
  color: var(--primary);
}

.title-emoji {
  font-size: 22px;
}

.teaser {
  margin: 0;
  font-size: 14px;
  color: var(--muted-foreground);
}

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

.booking-summary-row {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.booking-summary-main {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.booking-location-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--muted-foreground);
}

.booking-location-name {
  font-size: 15px;
  font-weight: 700;
}

.booking-location-meta {
  font-size: 12px;
  color: var(--muted-foreground);
}

.booking-summary-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 2px;
}

.summary-pill {
  padding: 4px 10px;
  border-radius: 999px;
  background-color: var(--muted);
  font-size: 11px;
  color: var(--muted-foreground);
}

.booking-price-row {
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
}

.booking-price-label {
  color: var(--muted-foreground);
}

.booking-price-value {
  font-weight: 700;
}

.booking-price-text {
  margin: 4px 0 0 0;
  font-size: 12px;
  color: var(--muted-foreground);
}

.section-heading {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 700;
}

.refined-section-heading {
  font-size: 15px;
}

.info-text {
  margin: 0 0 6px 0;
  font-size: 13px;
  color: var(--muted-foreground);
}

.info-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.info-bullet {
  margin-top: 6px;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background-color: var(--primary);
  flex-shrink: 0;
}

.info-row-text {
  font-size: 13px;
}

.calendar-card {
  background:
    radial-gradient(circle at top right, rgba(255, 215, 0, 0.18), transparent 55%),
    var(--card);
  border: 1px solid rgba(255, 215, 0, 0.4);
}

.calendar-actions {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.secondary-button {
  width: 100%;
  border-radius: var(--radius-lg);
  border: 1px solid var(--primary);
  background-color: transparent;
  padding: 11px 14px;
  font-size: 15px;
  font-weight: 600;
  color: var(--primary);
  cursor: pointer;
}

.secondary-button:hover {
  background: rgba(255, 215, 0, 0.1);
}

.text-button {
  width: 100%;
  border: none;
  background: transparent;
  padding: 8px 4px 0 4px;
  font-size: 14px;
  font-weight: 500;
  color: var(--foreground);
  cursor: pointer;
}

.text-button:hover {
  color: var(--primary);
}

.booking-hint-text {
  margin: 4px 0 0 0;
  font-size: 11px;
  color: var(--muted-foreground);
  text-align: center;
}

.progress-dots {
  margin-top: 2px;
  display: flex;
  justify-content: center;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 6px;
  border-radius: 999px;
  background-color: var(--primary);
}

.dot.active {
  background-color: var(--primary);
}

.button-label {
  white-space: nowrap;
}
</style>
