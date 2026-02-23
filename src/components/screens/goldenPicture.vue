<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Golden Picture">
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
              <span class="title-emoji"></span>
              <span>Wie selten ist Dein Kind?</span>
            </h1>
            <p class="teaser refined-teaser">
              Entdecke, wie einzigartig die Begabungen Deines Kindes sind und
              was im Golden Point noch alles möglich ist.
            </p>
          </div>

          <section class="card video-card refined-video-card" aria-label="Golden Point Vorstellungsvideo">
            <div class="video-placeholder refined-video" @click="playVideo">
              <div class="video-overlay refined-video-overlay"></div>
              <button class="play-button refined-play" type="button">
                <span class="play-icon">▶</span>
              </button>
            </div>
            <blockquote class="athlete-quote refined-quote">
              <span class="quote-mark">"</span>
              <span>
                Auch ich war als Kind beim Golden Point und es hat mir
                geholfen, meine Stärken klar zu erkennen.
              </span>
              <span class="quote-mark">"</span>
            </blockquote>

            <div class="athlete-card refined-athlete-card">
              <div class="athlete-main">
                <div class="avatar">
                  <img
                    src="https://storage.googleapis.com/banani-avatars/avatar%2Fmale%2F18-25%2FEuropean%2F3"
                    alt="Athlet Avatar"
                    class="avatar-img"
                  />
                </div>
                <div class="athlete-text">
                  <div class="athlete-name">Lukas Weber</div>
                  <div class="athlete-sport">Profi-Fußballer</div>
                </div>
              </div>
              <div class="athlete-badge">Golden Point Talent</div>
            </div>
          </section>

          <div class="social-proof-row">
            <div class="social-proof-badge refined-proof">
              mehr als 17.000 Talente bereits getestet
            </div>
            <div class="social-proof-sub">
              Wissenschaftlich fundierte Diagnostik im Golden Point
            </div>
          </div>

          <section class="card benefits-card refined-benefits" aria-label="Golden Point Vorteile">
            <h2 class="section-heading refined-section-heading">
              Das bringt Dir der Golden Point
            </h2>
            <ul class="benefit-list refined-benefit-list">
              <li class="benefit-item">
                <span class="benefit-icon">✓</span>
                <span>Professionelle Diagnostik</span>
              </li>
              <li class="benefit-item">
                <span class="benefit-icon">✓</span>
                <span>Umfassende Datenerfassung</span>
              </li>
              <li class="benefit-item">
                <span class="benefit-icon">✓</span>
                <span>Vergleich mit mehr als 17.000 Kids</span>
              </li>
              <li class="benefit-item">
                <span class="benefit-icon">✓</span>
                <span>Persönliches Beratungsgespräch</span>
              </li>
              <li class="benefit-item">
                <span class="benefit-icon">✓</span>
                <span>Detaillierter Report</span>
              </li>
            </ul>
          </section>

          <section class="card booking-card refined-booking-card" aria-label="Golden Point Termin buchen">
            <div class="booking-card-inner refined-booking-inner">
              <div class="booking-header-row">
                <span class="booking-icon">📅</span>
                <span class="booking-title">Vereinbare noch heute einen Termin</span>
              </div>
              <p class="booking-subline">
                Sichere Dir einen Platz im Golden Point und erhalte eine
                individuelle Auswertung.
              </p>
              <button class="primary-button refined-primary" type="button" @click="bookTermin">
                <span class="button-icon">✓</span>
                <span class="button-label">Termin buchen</span>
              </button>
              <div class="booking-meta refined-booking-meta">
                <div class="booking-line">
                  <span class="meta-icon">📍</span>
                  <span class="meta-text">Golden Point Berlin</span>
                </div>
                <div class="booking-line">
                  <span class="meta-icon">📞</span>
                  <span class="meta-text">+49 30 ...</span>
                </div>
              </div>
            </div>
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
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.push('/screen/11')
}

function goToSports() {
  router.push('/screen/19')
}

function playVideo() {}

function bookTermin() {
  router.push('/screen/29')
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
.refined-video-card {
  background:
    radial-gradient(circle at top left, rgba(255, 215, 0, 0.22), transparent 55%),
    var(--card);
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.7);
}
.video-placeholder {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border-radius: var(--radius-md);
  background: #050505;
  overflow: hidden;
  cursor: pointer;
}
.refined-video { border: 1px solid rgba(255, 215, 0, 0.25); }
.video-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at center, rgba(255, 215, 0, 0.18), transparent 60%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(0, 0, 0, 0.9));
}
.refined-video-overlay { opacity: 0.95; }
.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 68px;
  height: 68px;
  border-radius: 999px;
  border: none;
  background: radial-gradient(circle at top left, #ffffff, var(--primary));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(255, 215, 0, 1);
  cursor: pointer;
}
.play-icon { font-size: 28px; color: var(--primary-foreground); margin-left: 3px; }

.athlete-quote { margin: 8px 0 0 0; font-size: 13px; font-style: italic; color: var(--card-foreground); display: flex; align-items: flex-start; gap: 4px; }
.refined-quote { color: var(--muted-foreground); }
.quote-mark { color: var(--primary); }
.athlete-card {
  margin-top: 6px;
  border-radius: var(--radius-md);
  background: rgba(0, 0, 0, 0.7);
  padding: 8px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.refined-athlete-card { border: 1px solid rgba(255, 215, 0, 0.35); }
.athlete-main { display: flex; align-items: center; gap: 8px; }
.avatar { width: 40px; height: 40px; border-radius: 999px; overflow: hidden; background: #000; }
.avatar-img { width: 100%; height: 100%; object-fit: cover; }
.athlete-text { display: flex; flex-direction: column; }
.athlete-name { font-size: 14px; font-weight: 600; }
.athlete-sport { font-size: 12px; color: var(--muted-foreground); }
.athlete-badge {
  padding: 4px 10px;
  border-radius: 999px;
  background-image: linear-gradient(135deg, rgba(255, 215, 0, 1), rgba(255, 215, 0, 0.7));
  color: var(--primary-foreground);
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
}

.social-proof-row { display: flex; flex-direction: column; gap: 4px; }
.social-proof-badge {
  align-self: flex-start;
  margin-top: 2px;
  padding: 4px 10px;
  border-radius: 999px;
  background-image: linear-gradient(135deg, rgba(255, 215, 0, 0.18), rgba(255, 215, 0, 0.45));
  color: var(--primary);
  font-size: 12px;
  font-weight: 600;
}
.social-proof-sub { font-size: 12px; color: var(--muted-foreground); }

.section-heading { margin: 0 0 4px 0; font-size: 14px; font-weight: 700; }
.refined-section-heading { font-size: 15px; }
.benefit-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
.benefit-item { display: flex; align-items: center; gap: 8px; font-size: 13px; }
.benefit-icon { font-size: 14px; color: var(--primary); }

.booking-card {
  padding: 2px;
  border-radius: var(--radius-lg);
  background-image: linear-gradient(135deg, rgba(255, 215, 0, 1), rgba(255, 215, 0, 0.25));
}
.refined-booking-card { box-shadow: 0 0 26px rgba(255, 215, 0, 0.5); }
.booking-card-inner {
  border-radius: calc(var(--radius-lg) - 2px);
  background: #050505;
  padding: 14px 14px 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.refined-booking-inner { gap: 12px; }
.booking-header-row { display: flex; align-items: center; gap: 6px; }
.booking-icon { font-size: 18px; }
.booking-title { font-size: 15px; font-weight: 700; }
.booking-subline { margin: 0; font-size: 13px; color: var(--muted-foreground); }
.primary-button {
  margin-top: 2px;
  width: 100%;
  border: none;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at top left, #ffffff, var(--primary));
  color: var(--primary-foreground);
  padding: 12px 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
  cursor: pointer;
}
.refined-primary { padding: 13px 16px; }
.button-icon { font-size: 18px; }
.booking-meta { display: flex; flex-direction: column; gap: 4px; }
.refined-booking-meta { margin-top: 2px; }
.booking-line { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--muted-foreground); }
.meta-icon { font-size: 14px; }
.meta-text { white-space: nowrap; }

.progress-dots { margin-top: 2px; display: flex; justify-content: center; gap: 6px; }
.dot { width: 10px; height: 6px; border-radius: 999px; background-color: var(--muted); }
.dot.active { background-color: var(--primary); }
</style>
