<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Sport-Detail Handball">
        <ScreenTopBar />

        <section class="content sport-detail-content">
          <header class="sport-detail-header">
            <p class="sport-detail-label">Mannschaftssportart</p>
            <h1 class="sport-detail-title">{{ sportEmoji }} {{ sportName }} für Max</h1>
            <p class="sport-detail-subtitle">
              Aktuell matcht {{ sportName }} zu
              <span class="highlight">13&nbsp;%</span> mit den Körpermaßen und
              Eurem Familienprofil. Mit den Körpermaßen allein erklären wir
              ungefähr <span class="highlight">5–15&nbsp;%</span> der
              Sport-Eignung.
            </p>
          </header>

          <section class="refined-card match-explanation-card">
            <div class="match-header-row">
              <div class="sport-main">
                <span class="sport-emoji">{{ sportEmoji }}</span>
                <div class="sport-texts">
                  <span class="sport-name">{{ sportName }}</span>
                  <span class="match-chip">13&nbsp;% Match (Anthropometrie)</span>
                </div>
              </div>
              <span class="match-badge match-mid">Anthropometrie-Check</span>
            </div>
            <p class="match-text">
              Dein aktuelles Ergebnis basiert vor allem auf Größe,
              Körperproportionen und Eurem Familienprofil. Für ein wirklich
              gutes Bild braucht es aber zusätzlich Koordination,
              Schnelligkeit und Kognition.
            </p>
            <div class="pill-row">
              <div class="pill">Größe &amp; Proportionen</div>
              <div class="pill">Familienprofil</div>
              <div class="pill pill-muted">Koordination noch offen</div>
            </div>
          </section>

          <section class="refined-card wohnzimmer-invite-card">
            <h2 class="wohnzimmer-title">Willst Du es genauer wissen?</h2>
            <p class="wohnzimmer-text">
              Wenn Du es genauer wissen willst, welche Sportarten zu Dir
              passen, durchlaufe unseren Wohnzimmer-Test. Dort messen wir
              zusätzlich Koordination, Schnelligkeit und Kognition – direkt zu
              Hause.
            </p>
            <ul class="wohnzimmer-list">
              <li>5 wissenschaftliche Tests</li>
              <li>kindgerechte Anleitung für Eltern und Kinder</li>
              <li>deutlich präzisere Sportarten-Empfehlungen</li>
            </ul>
            <div class="cta-row">
              <button type="button" class="primary-button" @click="handleWohnzimmerTest">
                Wohnzimmer-Test starten
              </button>
              <div class="secondary-link" @click="goToPrev">
                Später entscheiden
              </div>
            </div>
          </section>
        </section>

        <section class="bottom-section">
          <div class="progress-dots" aria-label="Schritt 4 von 9">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot dot-active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
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
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ScreenTopBar } from '../shared'

const router = useRouter()
const route = useRoute()

const sportName = computed(() => route.query.sport || 'Handball')

const sportEmojiMap = {
  Handball: '🤾',
  Basketball: '🏀',
  Volleyball: '🏐',
  Fußball: '⚽',
  Eishockey: '🏒',
  Ringen: '🤼',
  Tennis: '🎾',
  Badminton: '🏸',
  Tischtennis: '🏓',
  'Leichtathletik Sprint': '🏃',
  Fechten: '🤺',
  Schwimmen: '🏊',
  Radsport: '🚴',
  Gerätturnen: '🤸',
  'Ski Alpin': '⛷️'
}
const sportEmoji = computed(() => sportEmojiMap[sportName.value] || '🤾')

const goToPrev = () => router.back()
const handleWohnzimmerTest = () => router.push('/screen/19')
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
  padding: 16px 16px 20px 16px;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.bottom-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.icon-wrapper {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-xl);
  background-color: rgba(255, 255, 255, 0.06);
  cursor: pointer;
}

.logo-mark-small {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 215, 0, 0.16);
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

.sport-detail-content {
  gap: 14px;
}

.sport-detail-header {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.sport-detail-label {
  margin: 0;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted-foreground);
}

.sport-detail-title {
  margin: 0;
  font-size: 20px;
  font-weight: 800;
}

.sport-detail-subtitle {
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  color: var(--muted-foreground);
}

.highlight {
  color: var(--primary);
  font-weight: 600;
}

.refined-card {
  background-color: var(--card);
  border-radius: 18px;
  padding: 14px 14px 12px;
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.match-explanation-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.match-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.sport-main {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sport-emoji {
  font-size: 22px;
}

.sport-texts {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sport-name {
  font-size: 14px;
}

.match-chip {
  font-size: 12px;
  color: var(--muted-foreground);
}

.match-badge {
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 11px;
  white-space: nowrap;
}

.match-mid {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.35)
  );
  color: var(--background);
}

.match-text {
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  color: var(--card-foreground);
}

.pill-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.pill {
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  background-color: var(--muted);
  color: var(--muted-foreground);
}

.pill-muted {
  opacity: 0.7;
}

.wohnzimmer-invite-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.wohnzimmer-title {
  margin: 0;
  font-size: 16px;
}

.wohnzimmer-text {
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  color: var(--muted-foreground);
}

.wohnzimmer-list {
  margin: 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.wohnzimmer-list li {
  font-size: 13px;
  color: var(--card-foreground);
}

.cta-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
}

.primary-button {
  width: 100%;
  text-align: center;
  padding: 14px 16px;
  border-radius: var(--radius-lg);
  background-color: var(--primary);
  color: var(--primary-foreground);
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  border: none;
}

.primary-button:hover {
  filter: brightness(1.05);
}

.secondary-link {
  font-size: 13px;
  text-align: center;
  color: var(--muted-foreground);
  cursor: pointer;
}

.secondary-link:hover {
  color: var(--foreground);
}

.progress-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background-color: var(--muted);
}

.dot-active {
  width: 10px;
  height: 6px;
  border-radius: 999px;
  background-color: var(--primary);
}
</style>
