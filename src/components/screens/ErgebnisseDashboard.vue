<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Ergebnisse Dashboard">
        <header class="top-bar">
          <div class="top-left" @click="goToDashboard">
            <div class="back-chip">
              <div class="icon-wrapper">
                <iconify-icon
                  icon="lucide:arrow-left"
                  style="font-size: 18px; color: var(--foreground)"
                ></iconify-icon>
              </div>
              <span class="back-label">Dashboard</span>
            </div>
          </div>
          <div class="top-right-logo" @click="goToSports">
            <div class="logo-mark-small">
              <span class="logo-4">4</span><span class="logo-talents">talents</span>
            </div>
          </div>
        </header>

        <section class="content">
          <header class="header-block">
            <p class="header-eyebrow">
              Wir haben für Dich mit KI folgendes berechnet.
            </p>
            <h1 class="header-title">📊 Ergebnisse für Max</h1>
          </header>

          <section class="card radar-card">
            <div class="card-header-row">
              <div class="card-title-group">
                <span class="card-eyebrow">Testprofil</span>
                <h2 class="card-title">Leistungsradar</h2>
              </div>
              <div class="badge-dimensions">4 Dimensionen</div>
            </div>
            <p class="card-subtitle">
              Aktuell basiert diese Auswertung nur auf den Körpermaßen
              (Anthropometrie). Sie erklärt etwa 5–15% der Voraussetzungen für
              passende Sportarten.
            </p>

            <div class="radar-wrapper">
              <div class="radar-grid">
                <div class="radar-ring ring-1"></div>
                <div class="radar-ring ring-2"></div>
                <div class="radar-ring ring-3"></div>
                <div class="radar-axis axis-1"></div>
                <div class="radar-axis axis-2"></div>
                <div class="radar-axis axis-3"></div>
                <div class="radar-axis axis-4"></div>
                <div class="radar-polygon"></div>
              </div>
              <div class="radar-labels">
                <div class="radar-label radar-label-top">Koordination</div>
                <div class="radar-label radar-label-right">Schnelligkeit</div>
                <div class="radar-label radar-label-bottom">Kognition</div>
                <div class="radar-label radar-label-left">Anthropometrie</div>
              </div>
            </div>
          </section>

          <section class="card speed-card">
            <div class="card-header-row">
              <div class="card-title-group">
                <div class="card-title-with-icon">
                  <div class="icon-inline">
                    <iconify-icon
                      icon="lucide:zap"
                      style="font-size: 18px; color: var(--foreground)"
                    ></iconify-icon>
                  </div>
                  <h2 class="card-title">Geschwindigkeitsprognose</h2>
                </div>
              </div>
            </div>
            <p class="card-subtitle">So schnell kannst Du auf 30m rennen:</p>
            <div class="speed-value-row">
              <span class="speed-main">4,82 s</span>
              <span class="speed-tag">Schätzung</span>
            </div>
            <p class="speed-meta">
              Max. Geschwindigkeit: <span>22,4 km/h</span>
            </p>
          </section>

          <section class="card sports-card">
            <div class="card-header-row">
              <div class="card-title-group">
                <div class="card-title-with-icon">
                  <div class="icon-inline">
                    <iconify-icon
                      icon="lucide:trophy"
                      style="font-size: 18px; color: var(--foreground)"
                    ></iconify-icon>
                  </div>
                  <h2 class="card-title">Dein Sportarten-Matching</h2>
                </div>
              </div>
            </div>
            <p class="card-subtitle">
              Basierend auf Größe und Körperproportionen – weitere Tests
              können das Bild noch stark verändern.
            </p>

            <div class="sports-group">
              <p class="sports-section-label best-label">
                Am besten passend:
              </p>
              <div class="sport-row" @click="handleSportClick('Basketball')">
                <div class="sport-main">
                  <span class="sport-icon">🏀</span>
                  <span class="sport-name">Basketball</span>
                </div>
                <div class="sport-badge badge-top">97%</div>
              </div>
              <div class="sport-row" @click="handleSportClick('Volleyball')">
                <div class="sport-main">
                  <span class="sport-icon">🏐</span>
                  <span class="sport-name">Volleyball</span>
                </div>
                <div class="sport-badge badge-top">91%</div>
              </div>
              <div class="sport-row" @click="handleSportClick('Handball')">
                <div class="sport-main">
                  <span class="sport-icon">🤾</span>
                  <span class="sport-name">Handball</span>
                </div>
                <div class="sport-badge badge-top">88%</div>
              </div>
              <div class="sport-row" @click="handleSportClick('Fußball')">
                <div class="sport-main">
                  <span class="sport-icon">⚽</span>
                  <span class="sport-name">Fußball</span>
                </div>
                <div class="sport-badge badge-mid">82%</div>
              </div>
              <div class="sport-row" @click="handleSportClick('Schwimmen')">
                <div class="sport-main">
                  <span class="sport-icon">🏊</span>
                  <span class="sport-name">Schwimmen</span>
                </div>
                <div class="sport-badge badge-mid">78%</div>
              </div>
            </div>

            <div class="sports-group less-group">
              <p class="sports-section-label less-label">Weniger passend:</p>
              <div class="sport-row" @click="handleSportClick('Turnen')">
                <div class="sport-main">
                  <span class="sport-icon">🤸</span>
                  <span class="sport-name">Turnen</span>
                </div>
                <div class="sport-badge badge-low">34%</div>
              </div>
              <div class="sport-row" @click="handleSportClick('Reiten')">
                <div class="sport-main">
                  <span class="sport-icon">🏇</span>
                  <span class="sport-name">Reiten</span>
                </div>
                <div class="sport-badge badge-low">28%</div>
              </div>
            </div>

            <div class="sports-link-row" @click="showFullList">
              <span class="sports-link-label">→ Komplette Liste anzeigen</span>
            </div>
          </section>
        </section>

        <section class="bottom-bar">
          <div class="bottom-buttons">
            <div class="secondary-cta" @click="handleShare">
              <span class="secondary-cta-label">📤 Ergebnisse teilen</span>
            </div>
            <div class="secondary-cta" @click="handleDownload">
              <span class="secondary-cta-label">📄 PDF herunterladen</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToDashboard = () => {
  router.push('/screen/12')
}

const handleSportClick = (sportName) => {
  alert(`${sportName} Details werden angezeigt`)
}

const showFullList = () => {
  alert('Komplette Sportarten-Liste wird angezeigt')
}

const handleShare = () => {
  if (navigator.share) {
    navigator.share({
      title: 'Meine 4talents Ergebnisse',
      text: 'Schau dir meine Sportarten-Empfehlungen an!',
      url: window.location.href
    }).catch(() => {
      alert('Ergebnisse werden geteilt')
    })
  } else {
    alert('Ergebnisse werden geteilt')
  }
}

const handleDownload = () => {
  alert('PDF wird heruntergeladen')
}

const goToSports = () => {
  router.push('/screen/19')
}
</script>

<style scoped>
:root {
  --background: #0a0a0a;
  --foreground: #ffffff;
  --border: #1a1a1a;
  --input: #1a1a1a;
  --primary: #ffd700;
  --primary-foreground: #0a0a0a;
  --secondary: #1a1a1a;
  --secondary-foreground: #ffffff;
  --muted: #111111;
  --muted-foreground: #999999;
  --success: #10b981;
  --success-foreground: #052e16;
  --accent: #ffd700;
  --accent-foreground: #0a0a0a;
  --destructive: #7f1d1d;
  --destructive-foreground: #fee2e2;
  --warning: #f59e0b;
  --warning-foreground: #0a0a0a;
  --card: #1a1a1a;
  --card-foreground: #ffffff;
  --sidebar: #050505;
  --sidebar-foreground: #ffd700;
  --sidebar-primary: #111111;
  --sidebar-primary-foreground: #ffd700;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-xl: 20px;
  --font-family-body: Inter;
}

* {
  box-sizing: border-box;
}

.screen-wrapper {
  width: 100%;
  min-height: 100vh;
  max-width: 375px;
  margin: 0 auto;
  background-color: var(--background);
}

.app-root {
  background-color: var(--background);
  color: var(--foreground);
  min-height: 812px;
  display: flex;
}

.screen {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 24px 20px;
  gap: 16px;
  overflow-y: auto;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
}

.bottom-bar {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.back-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px 6px 4px;
  border-radius: var(--radius-xl);
  background-color: rgba(255, 255, 255, 0.04);
  cursor: pointer;
  transition: all 0.2s;
}

.back-chip:hover {
  background-color: rgba(255, 255, 255, 0.06);
}

.icon-wrapper {
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.04);
}

.back-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--foreground);
  white-space: nowrap;
}

.logo-mark-small {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border-radius: var(--radius-xl);
  background: rgba(255, 215, 0, 0.12);
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

.header-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.header-eyebrow {
  margin: 0;
  font-size: 13px;
  color: var(--muted-foreground);
}

.header-title {
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  color: var(--foreground);
}

.card {
  background-color: var(--card);
  border-radius: var(--radius-lg);
  padding: 14px;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.card-title-group {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.card-title-with-icon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.icon-inline {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.04);
}

.card-eyebrow {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted-foreground);
}

.card-title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--foreground);
}

.card-subtitle {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: var(--muted-foreground);
}

.badge-dimensions {
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  color: var(--primary-foreground);
  background: linear-gradient(
    135deg,
    rgba(255, 215, 0, 0.18),
    rgba(255, 215, 0, 0.45)
  );
}

.radar-card {
  padding-bottom: 16px;
}

.radar-wrapper {
  margin-top: 6px;
  position: relative;
  height: 220px;
}

.radar-grid {
  position: absolute;
  inset: 10px 36px 10px 36px;
  border-radius: var(--radius-lg);
  background:
    radial-gradient(
      circle at top,
      rgba(255, 255, 255, 0.08),
      transparent 65%
    ),
    #050505;
  overflow: hidden;
}

.radar-ring {
  position: absolute;
  inset: 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.ring-2 {
  inset: 32px;
}

.ring-3 {
  inset: 50px;
}

.radar-axis {
  position: absolute;
  left: 50%;
  top: 10%;
  bottom: 10%;
  border-left: 1px dashed rgba(255, 255, 255, 0.06);
  transform-origin: center;
}

.axis-1 {
  transform: translateX(-0.5px) rotate(0deg);
}

.axis-2 {
  transform: translateX(-0.5px) rotate(90deg);
}

.axis-3 {
  transform: translateX(-0.5px) rotate(45deg);
}

.axis-4 {
  transform: translateX(-0.5px) rotate(-45deg);
}

.radar-polygon {
  position: absolute;
  inset: 32px 46px 40px 46px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(255, 215, 0, 0.32),
    rgba(255, 215, 0, 0.02)
  );
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.45);
  opacity: 0.95;
}

.radar-labels {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.radar-label {
  position: absolute;
  font-size: 11px;
  font-weight: 500;
  color: var(--muted-foreground);
  padding: 4px 8px;
  border-radius: 999px;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.04);
  white-space: nowrap;
}

.radar-label-top {
  top: 10px;
}

.radar-label-right {
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
}

.radar-label-bottom {
  bottom: 8px;
}

.radar-label-left {
  left: 4px;
  top: 50%;
  transform: translateY(-50%);
}

.speed-card {
  padding-top: 14px;
  padding-bottom: 16px;
}

.speed-value-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: 4px;
}

.speed-main {
  font-size: 28px;
  font-weight: 800;
  color: var(--primary);
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.7);
}

.speed-tag {
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: var(--muted-foreground);
}

.speed-meta {
  margin: 4px 0 0 0;
  font-size: 13px;
  color: var(--muted-foreground);
}

.speed-meta span {
  color: var(--foreground);
  font-weight: 500;
}

.sports-card {
  padding-bottom: 10px;
}

.sports-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 6px;
}

.sports-section-label {
  margin: 0 0 2px 0;
  font-size: 13px;
  font-weight: 600;
}

.best-label {
  color: var(--primary);
}

.less-label {
  color: var(--muted-foreground);
}

.sport-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 10px;
  border-radius: var(--radius-md);
  background-color: rgba(255, 255, 255, 0.02);
  cursor: pointer;
  transition: all 0.2s;
}

.sport-row:hover {
  background-color: rgba(255, 255, 255, 0.04);
}

.less-group .sport-row {
  background-color: rgba(255, 255, 255, 0.01);
}

.sport-main {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sport-icon {
  font-size: 18px;
}

.sport-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--foreground);
}

.sport-badge {
  min-width: 52px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  border-radius: 999px;
  padding: 4px 10px;
  white-space: nowrap;
}

.badge-top {
  color: var(--primary-foreground);
  background: linear-gradient(
    135deg,
    rgba(255, 215, 0, 0.3),
    rgba(255, 215, 0, 0.9)
  );
}

.badge-mid {
  color: var(--foreground);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.22)
  );
}

.badge-low {
  color: var(--muted-foreground);
  background: linear-gradient(
    135deg,
    rgba(15, 15, 15, 0.9),
    rgba(40, 40, 40, 0.9)
  );
}

.sports-link-row {
  margin-top: 8px;
  padding-top: 4px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  transition: opacity 0.2s;
}

.sports-link-row:hover {
  opacity: 0.8;
}

.sports-link-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--primary);
  white-space: nowrap;
}

.bottom-buttons {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.secondary-cta {
  flex: 1;
  border-radius: 999px;
  padding: 12px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;
}

.secondary-cta:hover {
  background-color: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 215, 0, 0.3);
}

.secondary-cta-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--foreground);
  text-align: center;
  white-space: nowrap;
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
  width: 8px;
  height: 8px;
  background-color: var(--primary);
}
</style>

