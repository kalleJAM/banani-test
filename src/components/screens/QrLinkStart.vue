<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents QR- oder Link-Start">
        <div class="bg-pattern">
          <div class="bg-pattern-overlay"></div>
          <div class="bg-sport-photo">
            <img
              data-aspect-ratio="3:4"
              alt="Hintergrund"
              src="https://storage.googleapis.com/banani-generated-images/generated-images/39fbc1f2-ccd1-4c37-9bff-9b476aa8c418.jpg"
            />
          </div>
        </div>

        <ScreenTopBar :show-back="false" />

        <section class="content">
          <div class="intro-block">
            <h1 class="headline">Willkommen bei 4talents</h1>
            <p class="subheadline">
              Du kommst über eine Sportorganisation. Gemeinsam starten wir
              jetzt deinen 4talents Account.
            </p>
          </div>

          <div class="card qr-card">
            <div class="qr-icon-wrapper">
              <div class="qr-graphic">
                <div class="qr-square qr-square-top-left"></div>
                <div class="qr-square qr-square-top-right"></div>
                <div class="qr-square qr-square-bottom-left"></div>
                <div class="qr-dots"></div>
              </div>
            </div>
            <div class="qr-text">
              <h2 class="card-title">Code erkannt</h2>
              <p class="card-subtitle">
                Dein QR-Code oder Link wurde von deiner Sportorganisation
                erstellt.
              </p>
              <p class="card-detail">
                Wir verbinden deinen Account sicher mit deinem Verein, Verband
                oder deiner Schule.
              </p>
            </div>
          </div>

          <div class="card info-card">
            <h3 class="card-title-small">Was passiert als Nächstes?</h3>
            <ul class="steps-list">
              <li class="step-item">
                <span class="step-badge">1</span>
                <div class="step-texts">
                  <p class="step-title">Familienprofil anlegen</p>
                  <p class="step-desc">
                    Wir fragen dich nur wenige Dinge zu dir und deinem Kind
                    ab.
                  </p>
                </div>
              </li>
              <li class="step-item">
                <span class="step-badge">2</span>
                <div class="step-texts">
                  <p class="step-title">Kind verknüpfen</p>
                  <p class="step-desc">
                    Dein Kind wird mit der Sportorganisation verknüpft, die
                    dich eingeladen hat.
                  </p>
                </div>
              </li>
              <li class="step-item">
                <span class="step-badge">3</span>
                <div class="step-texts">
                  <p class="step-title">Tests & Ergebnisse</p>
                  <p class="step-desc">
                    Danach könnt ihr gemeinsam die 4talents
                    Begabungsdiagnostik nutzen.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section class="bottom-actions">
          <div class="org-hint">Eingeladen von deiner Sportorganisation</div>
          <div class="primary-cta" @click="handleStartAccount">
            <span class="primary-cta-label">4talents Account starten</span>
          </div>
          <div class="secondary-link" @click="handleOtherCode">
            Anderen Code scannen
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ScreenTopBar } from '../shared'

const router = useRouter()

const handleStartAccount = () => {
  router.push('/screen/2')
}

const handleOtherCode = () => {
  router.push('/screen/1')
}
</script>

<style scoped>
.screen {
  padding: 24px 24px 24px 24px;
  overflow: hidden;
}

.top-bar {
  padding-bottom: 20px;
  position: relative;
  z-index: 20;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  z-index: 5;
}

.bottom-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 16px;
  position: relative;
  z-index: 5;
}

.logo-mark {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: var(--radius-xl);
  background: rgba(255, 215, 0, 0.06);
  cursor: pointer;
  transition: all 0.2s;
}

.logo-mark:hover {
  background: rgba(255, 215, 0, 0.12);
}

.logo-4 {
  font-size: 22px;
  font-weight: 800;
  color: var(--primary);
}

.logo-talents {
  font-size: 20px;
  font-weight: 700;
  color: var(--foreground);
}

.headline {
  font-size: 24px;
  line-height: 1.2;
  font-weight: 800;
  color: var(--foreground);
  margin: 0 0 4px 0;
}

.subheadline {
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 400;
  color: var(--muted-foreground);
}

.card-title {
  margin: 0 0 4px 0;
  font-size: 18px;
  font-weight: 700;
  color: var(--card-foreground);
}

.card-subtitle {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--muted-foreground);
}

.card-detail {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: var(--muted-foreground);
}

.card-title-small {
  margin: 0 0 8px 0;
  font-size: 15px;
  font-weight: 600;
  color: var(--card-foreground);
}

.org-hint {
  font-size: 12px;
  color: var(--muted-foreground);
  text-align: center;
}

.secondary-link {
  font-size: 13px;
  color: var(--muted-foreground);
  text-align: center;
  cursor: pointer;
  transition: color 0.2s;
}

.secondary-link:hover {
  color: var(--foreground);
}

.card {
  position: relative;
  border-radius: var(--radius-xl);
  background-color: var(--card);
  padding: 14px 14px 14px 14px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.qr-card {
  display: flex;
  gap: 14px;
  align-items: center;
}

.qr-icon-wrapper {
  flex-shrink: 0;
}

.qr-graphic {
  width: 84px;
  height: 84px;
  border-radius: var(--radius-md);
  background-color: #111111;
  border: 1px solid rgba(255, 215, 0, 0.4);
  padding: 6px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2px;
}

.qr-square {
  border-radius: 4px;
  border: 2px solid var(--primary);
}

.qr-square-top-left {
  grid-column: 1;
  grid-row: 1;
}

.qr-square-top-right {
  grid-column: 3;
  grid-row: 1;
}

.qr-square-bottom-left {
  grid-column: 1;
  grid-row: 3;
}

.qr-dots {
  grid-column: 2 / 4;
  grid-row: 2 / 4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2px;
}

.qr-dots::before,
.qr-dots::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    45deg,
    var(--primary) 0,
    var(--primary) 1px,
    transparent 1px,
    transparent 3px
  );
  opacity: 0.6;
}

.info-card {
  margin-top: 4px;
}

.steps-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.step-item {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.step-badge {
  min-width: 24px;
  height: 24px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  color: var(--primary);
}

.step-texts {
  flex: 1;
}

.step-title {
  margin: 0 0 2px 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--card-foreground);
}

.step-desc {
  margin: 0;
  font-size: 13px;
  color: var(--muted-foreground);
}

.primary-cta {
  width: 100%;
  padding: 14px 18px;
  border-radius: var(--radius-lg);
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 22px rgba(255, 215, 0, 0.4);
  cursor: pointer;
  transition: all 0.2s ease;
}

.primary-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 28px rgba(255, 215, 0, 0.5);
}

.primary-cta:active {
  transform: translateY(0);
}

.primary-cta-label {
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-foreground);
  text-align: center;
  white-space: normal;
}

.bg-pattern {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.bg-pattern-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.24;
  background-image:
    radial-gradient(circle at 20% 10%, #1a1a1a 0, transparent 45%),
    radial-gradient(circle at 80% 20%, #1a1a1a 0, transparent 50%),
    radial-gradient(circle at 10% 70%, #1a1a1a 0, transparent 55%),
    radial-gradient(circle at 90% 80%, #1a1a1a 0, transparent 50%),
    linear-gradient(
      135deg,
      transparent 0 20%,
      #111111 20% 21%,
      transparent 21% 40%,
      #111111 40% 41%,
      transparent 41% 60%,
      #111111 60% 61%,
      transparent 61% 80%,
      #111111 80% 81%,
      transparent 81% 100%
    );
  mix-blend-mode: normal;
}

.bg-sport-photo {
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0.22;
}

.bg-sport-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(10%);
}
</style>
