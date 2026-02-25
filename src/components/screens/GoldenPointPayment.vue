<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Golden Point Payment">
        <header class="header">
          <button type="button" class="back-button" @click="router.back()">
            <span class="back-arrow">Golden Point</span>
          </button>
          <div class="logo-mark header-logo">
            <span class="logo-4">4</span><span class="logo-talents">talents</span>
          </div>
        </header>

        <section class="content">
          <div class="title-block">
            <h1 class="title highlight refined-title">
              <span class="title-emoji">💛</span>
              <span>Zahlung für deinen Golden Point Termin</span>
            </h1>
            <p class="teaser refined-teaser">
              Schließe jetzt die Bezahlung ab, damit wir deinen Termin im
              Golden Point verbindlich für dich reservieren können.
            </p>
          </div>

          <section
            class="card booking-summary-card"
            aria-label="Buchungszusammenfassung"
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
              Die Einzeldiagnostik kostet <strong>139€</strong>.
            </p>
          </section>

          <section
            class="card payment-method-card"
            aria-label="Zahlungsart auswählen"
          >
            <h2 class="section-heading refined-section-heading">
              Zahlungsart auswählen
            </h2>
            <p class="payment-hint">
              Wähle eine Zahlungsart aus und bestätige dann die Zahlung. Deine
              Daten werden verschlüsselt übertragen.
            </p>

            <div class="payment-method-list">
              <button
                type="button"
                class="payment-method-row"
                :class="{ active: selectedPayment === 'card' }"
                @click="selectedPayment = 'card'"
              >
                <div class="payment-method-main">
                  <div class="payment-method-title">Kreditkarte</div>
                  <div class="payment-method-sub">
                    Visa, Mastercard, American Express
                  </div>
                </div>
                <div class="payment-method-pill">Empfohlen</div>
              </button>

              <button
                type="button"
                class="payment-method-row"
                :class="{ active: selectedPayment === 'apple' }"
                @click="selectedPayment = 'apple'"
              >
                <div class="payment-method-main">
                  <div class="payment-method-title">Apple Pay</div>
                  <div class="payment-method-sub">
                    Schnell und sicher mit Apple Wallet zahlen
                  </div>
                </div>
              </button>

              <button
                type="button"
                class="payment-method-row"
                :class="{ active: selectedPayment === 'google' }"
                @click="selectedPayment = 'google'"
              >
                <div class="payment-method-main">
                  <div class="payment-method-title">Google Pay</div>
                  <div class="payment-method-sub">
                    Schnell und sicher mit Google Wallet zahlen
                  </div>
                </div>
              </button>

              <button
                type="button"
                class="payment-method-row"
                :class="{ active: selectedPayment === 'paypal' }"
                @click="selectedPayment = 'paypal'"
              >
                <div class="payment-method-main">
                  <div class="payment-method-title">PayPal</div>
                  <div class="payment-method-sub">
                    Schnell via PayPal bezahlen
                  </div>
                </div>
              </button>
            </div>

            <div class="payment-link-info">
              <div class="payment-link-icon"></div>
              <div class="payment-link-texts">
                <div class="payment-link-label">
                  Zahlung über sicheren Link
                </div>
                <div class="payment-link-sub">
                  Mit Klick auf „Jetzt sicher bezahlen“ wirst du zu unserem
                  Zahlungsdienstleister weitergeleitet.
                </div>
              </div>
            </div>
          </section>

          <section class="card total-card" aria-label="Gesamtbetrag">
            <div class="total-row">
              <div class="total-label">Gesamtbetrag</div>
              <div class="total-value">139€</div>
            </div>
            <p class="total-sub">Inklusive aller Steuern und Gebühren.</p>
          </section>
        </section>

        <footer class="footer">
          <button
            class="primary-button refined-primary"
            type="button"
            @click="handlePay"
          >
            <span class="button-label">Jetzt sicher bezahlen</span>
          </button>
          <p class="booking-hint-text">
            Mit Klick auf „Jetzt sicher bezahlen“ wirst du zum Payment
            weitergeleitet und erhältst im Anschluss eine Bestätigung per
            E-Mail.
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedPayment = ref('card')

const handlePay = () => {
  router.push('/screen/35')
}
</script>

<style scoped>
.app-root {
  background:
    radial-gradient(circle at top, rgba(255, 215, 0, 0.18), transparent 60%),
    radial-gradient(circle at bottom right, rgba(255, 215, 0, 0.1), transparent 55%),
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
  font-size: 15px;
  font-weight: 700;
}

.payment-hint {
  margin: 0 0 8px 0;
  font-size: 12px;
  color: var(--muted-foreground);
}

.payment-method-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.payment-method-row {
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  background-color: var(--input);
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  cursor: pointer;
  text-align: left;
  font: inherit;
}

.payment-method-row.active {
  border-color: var(--primary);
  box-shadow: 0 0 18px rgba(255, 215, 0, 0.6);
  background:
    radial-gradient(circle at top left, rgba(255, 215, 0, 0.3), transparent 60%),
    var(--input);
}

.payment-method-main {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.payment-method-title {
  font-size: 14px;
  font-weight: 600;
}

.payment-method-sub {
  font-size: 12px;
  color: var(--muted-foreground);
}

.payment-method-pill {
  padding: 4px 10px;
  border-radius: 999px;
  background-color: rgba(255, 215, 0, 0.16);
  font-size: 11px;
  color: var(--primary);
}

.payment-link-info {
  margin-top: 10px;
  padding: 10px 12px;
  border-radius: var(--radius-md);
  background-color: var(--input);
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.payment-link-icon {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background-color: var(--muted);
  flex-shrink: 0;
}

.payment-link-texts {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.payment-link-label {
  font-size: 13px;
  font-weight: 600;
}

.payment-link-sub {
  font-size: 12px;
  color: var(--muted-foreground);
}

.total-card {
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at top right, rgba(255, 215, 0, 0.18), transparent 60%),
    var(--card);
  border: 1px solid rgba(255, 215, 0, 0.4);
}

.total-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.total-label {
  font-size: 14px;
  color: var(--muted-foreground);
}

.total-value {
  font-size: 18px;
  font-weight: 800;
  color: var(--primary);
}

.total-sub {
  margin: 4px 0 0 0;
  font-size: 11px;
  color: var(--muted-foreground);
}

.primary-button {
  margin-top: 4px;
  width: 100%;
  border: none;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at top left, #ffffff, var(--primary));
  color: var(--primary-foreground);
  padding: 13px 16px;
  font-size: 15px;
  font-weight: 700;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
  cursor: pointer;
}

.primary-button:hover {
  filter: brightness(1.05);
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
</style>
