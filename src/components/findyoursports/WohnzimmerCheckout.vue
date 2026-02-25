<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Wohnzimmer-Test Kaufabschluss">
        <ScreenTopBar />

        <section class="content" id="checkout-content">
          <h1 class="screen-title">🛒 Wohnzimmer-Test kaufen</h1>

          <section
            class="summary-card"
            aria-label="Bestellübersicht Wohnzimmer-Test"
          >
            <div class="summary-header-row">
              <div class="summary-main">
                <span class="summary-icon">🏅</span>
                <div class="summary-text-block">
                  <p class="summary-title">Der Wohnzimmer-Test</p>
                  <p class="summary-subtitle">
                    5 wissenschaftliche Tests für Zuhause
                  </p>
                </div>
              </div>
              <div class="summary-price-block">
                <p class="summary-price">4,95&nbsp;€</p>
                <p class="summary-per">pro Kind</p>
              </div>
            </div>

            <div class="summary-divider"></div>

            <ul class="summary-benefits">
              <li class="summary-benefit-item">
                <span class="benefit-check">✓</span>
                <span class="benefit-text">Körpergrößen- und Geschwindigkeitsprognose</span>
              </li>
              <li class="summary-benefit-item">
                <span class="benefit-check">✓</span>
                <span class="benefit-text">Sportarten-Matching &amp; persönliches Ergebnisprofil</span>
              </li>
            </ul>
          </section>

          <section
            class="payment-section"
            aria-label="Zahlungsmethode wählen"
          >
            <h2 class="section-title">Zahlungsart auswählen</h2>

            <div class="payment-method-list">
              <div
                class="payment-method-card"
                :class="{ selected: selectedPayment === 'apple' }"
                @click="selectedPayment = 'apple'"
              >
                <div class="payment-main">
                  <span class="payment-icon">📱</span>
                  <div class="payment-text">
                    <p class="payment-title">Apple Pay</p>
                    <p class="payment-subtitle">
                      Schnell über Dein Apple Gerät bezahlen
                    </p>
                  </div>
                </div>
                <div class="payment-pill">Standard</div>
              </div>

              <div
                class="payment-method-card"
                :class="{ selected: selectedPayment === 'card' }"
                @click="selectedPayment = 'card'"
              >
                <div class="payment-main">
                  <span class="payment-icon">💳</span>
                  <div class="payment-text">
                    <p class="payment-title">Kredit- oder Debitkarte</p>
                    <p class="payment-subtitle">Visa, Mastercard, Amex</p>
                  </div>
                </div>
              </div>

              <div
                class="payment-method-card"
                :class="{ selected: selectedPayment === 'google' }"
                @click="selectedPayment = 'google'"
              >
                <div class="payment-main">
                  <span class="payment-icon">🅶</span>
                  <div class="payment-text">
                    <p class="payment-title">Google Pay</p>
                    <p class="payment-subtitle">
                      Bezahlen mit Deinem Google Konto
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="total-section" aria-label="Gesamtbetrag">
            <div class="total-row">
              <span class="total-label">Gesamt</span>
              <span class="total-amount">4,95&nbsp;€</span>
            </div>
            <p class="total-note">
              Einmaliger Betrag für den Wohnzimmer-Test pro Kind.
            </p>
          </section>
        </section>

        <section class="footer-section">
          <button
            class="primary-button confirm"
            type="button"
            @click="handlePay"
          >
            Jetzt sicher bezahlen
          </button>

          <div class="trust-row">
            <div class="trust-lock">
              🔒 Sichere Zahlung • Daten werden verschlüsselt übertragen
            </div>
            <div class="trust-methods">
              <span class="trust-pill">Apple Pay</span>
              <span class="trust-pill">Google Pay</span>
              <span class="trust-pill">Kreditkarte</span>
            </div>
          </div>

          <div class="progress-dots" aria-label="Schritt 7 von 9">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ScreenTopBar } from '../shared'

const router = useRouter()
const selectedPayment = ref('apple')

const handlePay = () => router.push('/screen/20')
</script>

<style scoped>
.app-root {
  background:
    radial-gradient(
      circle at top,
      rgba(255, 215, 0, 0.08),
      transparent 55%
    ),
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

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-section {
  margin-top: 12px;
}

.icon-button {
  background: transparent;
  border: none;
  padding: 8px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--foreground);
  cursor: pointer;
}

.icon-chevron {
  font-size: 18px;
}

.logo-mark {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 215, 0, 0.14);
  cursor: pointer;
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

.screen-title {
  margin: 0;
  font-size: 22px;
  font-weight: 800;
}

.summary-card {
  background:
    radial-gradient(
      circle at top right,
      rgba(255, 215, 0, 0.18),
      transparent 55%
    ),
    var(--card);
  border-radius: var(--radius-xl);
  padding: 16px 16px 14px 16px;
  border: 1px solid rgba(255, 215, 0, 0.85);
  box-shadow:
    0 0 0 1px rgba(255, 215, 0, 0.15),
    0 0 24px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.summary-header-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.summary-main {
  display: flex;
  align-items: center;
  gap: 10px;
}

.summary-icon {
  font-size: 22px;
}

.summary-text-block {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.summary-title {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
}

.summary-subtitle {
  margin: 0;
  font-size: 13px;
  color: var(--muted-foreground);
}

.summary-price-block {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
}

.summary-price {
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  color: var(--primary);
}

.summary-per {
  margin: 0;
  font-size: 12px;
  color: var(--muted-foreground);
}

.summary-divider {
  height: 1px;
  width: 100%;
  background: rgba(255, 255, 255, 0.12);
}

.summary-benefits {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.summary-benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.benefit-check {
  font-size: 16px;
  color: var(--primary);
  margin-top: 1px;
}

.benefit-text {
  font-size: 13px;
  color: var(--foreground);
}

.payment-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.section-title {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--foreground);
}

.payment-method-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.payment-method-card {
  border-radius: var(--radius-lg);
  background-color: var(--input);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 12px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
}

.payment-method-card.selected {
  border-color: var(--primary);
  box-shadow: 0 0 0 1px rgba(255, 215, 0, 0.35);
}

.payment-main {
  display: flex;
  align-items: center;
  gap: 10px;
}

.payment-icon {
  font-size: 18px;
}

.payment-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.payment-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}

.payment-subtitle {
  margin: 0;
  font-size: 12px;
  color: var(--muted-foreground);
}

.payment-pill {
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 215, 0, 0.7);
  color: var(--primary);
  white-space: nowrap;
}

.total-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.total-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.total-label {
  font-size: 14px;
  color: var(--muted-foreground);
}

.total-amount {
  font-size: 18px;
  font-weight: 700;
}

.total-note {
  margin: 0;
  font-size: 12px;
  color: var(--muted-foreground);
}

.primary-button.confirm {
  width: 100%;
  border: none;
  border-radius: var(--radius-lg);
  padding: 14px 16px;
  background: var(--primary);
  color: var(--primary-foreground);
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  cursor: pointer;
}

.primary-button.confirm:hover {
  filter: brightness(1.05);
}

.trust-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 10px;
}

.trust-lock {
  font-size: 12px;
  color: var(--muted-foreground);
}

.trust-methods {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.trust-pill {
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 999px;
  background-color: var(--input);
  color: var(--muted-foreground);
}

.progress-dots {
  display: flex;
  justify-content: center;
  gap: 6px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background-color: #222222;
}

.dot.active {
  width: 8px;
  height: 8px;
  background-color: var(--primary);
}
</style>
