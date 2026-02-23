<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Wohnzimmer-Test Kauf">
        <header class="top-bar">
          <button class="icon-button" type="button" @click="goBack" aria-label="Zurück">
            <span class="icon-chevron">◀</span>
          </button>
          <div class="logo-mark">
            <span class="logo-4">4</span><span class="logo-talents">talents</span>
          </div>
        </header>

        <section class="content" id="paywall-content">
          <h1 class="screen-title">🏅 Der Wohnzimmer-Test</h1>

          <section class="video-preview">
            <div class="video-thumb">
              <img
                data-aspect-ratio="16:9"
                class="video-image"
                src="https://storage.googleapis.com/banani-generated-images/generated-images/44aeb994-6a61-4c65-8834-21f500a181a5.jpg"
                alt="Wohnzimmer-Test Einführung"
              />
              <div class="video-overlay"></div>
              <div class="video-play-button">
                <div class="play-icon-triangle"></div>
              </div>
            </div>
            <p class="video-caption">
              Kurze Einführung: So funktioniert der Wohnzimmer-Test.
            </p>
          </section>

          <section class="benefits" aria-label="Vorteile des Wohnzimmer-Tests">
            <h2 class="section-title">Das bekommst Du:</h2>
            <ul class="benefit-list">
              <li class="benefit-item">
                <span class="benefit-check">✓</span>
                <span class="benefit-text">5 wissenschaftliche Tests</span>
              </li>
              <li class="benefit-item">
                <span class="benefit-check">✓</span>
                <span class="benefit-text">Erklär-Videos zu jedem Test</span>
              </li>
              <li class="benefit-item">
                <span class="benefit-check">✓</span>
                <span class="benefit-text">Körpergrößenprognose</span>
              </li>
              <li class="benefit-item">
                <span class="benefit-check">✓</span>
                <span class="benefit-text">Geschwindigkeitsprognose</span>
              </li>
              <li class="benefit-item">
                <span class="benefit-check">✓</span>
                <span class="benefit-text">Sportarten-Matching</span>
              </li>
              <li class="benefit-item">
                <span class="benefit-check">✓</span>
                <span class="benefit-text">Persönliches Ergebnisprofil</span>
              </li>
            </ul>
          </section>

          <section class="pricing-section">
            <div class="pricing-card">
              <div class="pricing-badge">Beliebteste Wahl</div>
              <div class="pricing-header-row">
                <span class="pricing-icon">🏆</span>
                <span class="pricing-title">Wohnzimmer-Test</span>
              </div>
              <p class="pricing-subtitle">Einmalig nur</p>
              <div class="pricing-price-row">
                <span class="pricing-price">4,95&nbsp;€</span>
                <span class="pricing-per">pro Kind</span>
              </div>
              <button class="primary-button inside" type="button">
                🛒 Jetzt kaufen
              </button>
            </div>

            <div class="alt-paths">
              <h2 class="section-title">Weitere Diagnose-Wege:</h2>

              <div class="pricing-card alt">
                <div class="pricing-header-row">
                  <span class="pricing-icon">✨</span>
                  <span class="pricing-title">Direkt in den Golden Point</span>
                </div>
                <p class="pricing-subtitle">
                  Intensivdiagnostik vor Ort mit persönlichem Coaching.
                </p>
                <p class="pricing-subtitle">
                  Die Einzeldiagnostik im Golden Point kostet 139&nbsp;€.
                </p>
                <ul class="benefit-list alt">
                  <li class="benefit-item">
                    <span class="benefit-check">✓</span>
                    <span class="benefit-text">Professionelle Begabungsdiagnostik im Golden Point</span>
                  </li>
                  <li class="benefit-item">
                    <span class="benefit-check">✓</span>
                    <span class="benefit-text">Individuelle Auswertung und Sportarten-Empfehlung</span>
                  </li>
                </ul>
                <button class="primary-button inside ghost" type="button">
                  Mehr über den Golden Point erfahren
                </button>
              </div>

              <div class="pricing-card alt">
                <div class="pricing-header-row">
                  <span class="pricing-icon">🏟️</span>
                  <span class="pricing-title">Über eine Sportorganisation</span>
                </div>
                <p class="pricing-subtitle">
                  Wohnzimmer-Test im Verein, Verband oder an der Schule nutzen.
                </p>
                <ul class="benefit-list alt">
                  <li class="benefit-item">
                    <span class="benefit-check">✓</span>
                    <span class="benefit-text">Gemeinsam mit anderen Kindern testen</span>
                  </li>
                  <li class="benefit-item">
                    <span class="benefit-check">✓</span>
                    <span class="benefit-text">Kooperation mit Vereinen, Verbänden oder Schulen</span>
                  </li>
                </ul>
                <button class="primary-button inside ghost" type="button">
                  Optionen mit Organisationen ansehen
                </button>
              </div>
            </div>
          </section>
        </section>

        <section class="footer-section">
          <div class="trust-row">
            <div class="trust-lock">🔒 Sichere Zahlung</div>
            <div class="trust-methods">
              <span class="trust-pill">Apple Pay</span>
              <span class="trust-pill">Google Pay</span>
              <span class="trust-pill">Kreditkarte</span>
            </div>
          </div>

          <div class="progress-dots" aria-label="Schritt 6 von 9">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}
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
}

.screen {
  padding: 20px 20px 16px 20px;
}

.top-bar {
  margin-bottom: 16px;
}

.content {
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

.video-preview {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.video-thumb {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background-color: var(--card);
}

.video-image {
  width: 100%;
  display: block;
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(255, 215, 0, 0.12),
    transparent 55%
  );
}

.video-play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 999px;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-icon-triangle {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 16px solid var(--primary-foreground);
  margin-left: 3px;
}

.video-caption {
  margin: 0;
  font-size: 13px;
  color: var(--muted-foreground);
}

.section-title {
  margin: 0 0 8px 0;
  font-size: 15px;
  font-weight: 600;
}

.benefit-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.benefit-item {
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
  font-size: 14px;
  color: var(--foreground);
}

.pricing-section {
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.pricing-card {
  position: relative;
  background:
    radial-gradient(
      circle at top right,
      rgba(255, 215, 0, 0.18),
      transparent 55%
    ),
    var(--card);
  border-radius: var(--radius-xl);
  padding: 20px 16px 16px 16px;
  border: 1px solid rgba(255, 215, 0, 0.85);
  box-shadow:
    0 0 0 1px rgba(255, 215, 0, 0.15),
    0 0 24px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.pricing-card.alt {
  border-color: rgba(255, 255, 255, 0.14);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.7);
  background:
    radial-gradient(
      circle at top right,
      rgba(255, 255, 255, 0.04),
      transparent 55%
    ),
    var(--card);
}

.pricing-badge {
  position: absolute;
  top: -10px;
  right: 16px;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--primary);
  color: var(--primary-foreground);
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
}

.pricing-header-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pricing-icon {
  font-size: 18px;
}

.pricing-title {
  font-size: 15px;
  font-weight: 600;
}

.pricing-subtitle {
  margin: 8px 0 0 0;
  font-size: 13px;
  color: var(--muted-foreground);
}

.pricing-price-row {
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.pricing-price {
  font-size: 30px;
  font-weight: 900;
  color: var(--primary);
}

.pricing-per {
  font-size: 13px;
  color: var(--muted-foreground);
}

.primary-button.inside {
  margin-top: 12px;
  width: 100%;
  border: none;
  border-radius: var(--radius-lg);
  padding: 14px 16px;
  background: var(--primary);
  color: var(--primary-foreground);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.primary-button.inside.ghost {
  margin-top: 10px;
  background: transparent;
  color: var(--primary);
  border: 1px solid rgba(255, 215, 0, 0.7);
}

.benefit-list.alt {
  margin-top: 6px;
}

.alt-paths {
  display: flex;
  flex-direction: column;
  gap: 8px;
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
