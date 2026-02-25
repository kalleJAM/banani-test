<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Ergebnisse Dashboard">
        <header class="header">
          <ScreenTopBar />
        </header>

        <section class="content">
          <div class="title-block">
            <h2 class="subtitle-intro">
              Wir haben für Dich mit KI folgendes berechnet.
            </h2>
            <h1 class="title">
              <span class="title-emoji">📊</span>
              <span>Ergebnisse für Max</span>
            </h1>
          </div>

          <section class="card radar-card" aria-label="Talentprofil in 4 Dimensionen">
            <div class="card-header-row">
              <span class="card-title">Talentprofil</span>
              <span class="card-subtitle">4 Dimensionen</span>
            </div>
            <div class="radar-chart-wrapper">
              <div class="radar-chart obh-polar">
                <div class="radar-ring ring-1"></div>
                <div class="radar-ring ring-2"></div>
                <div class="radar-ring ring-3"></div>
                <div class="radar-ring ring-4"></div>
                <div class="radar-axis axis-1"></div>
                <div class="radar-axis axis-2"></div>
                <div class="radar-axis axis-3"></div>
                <div class="radar-axis axis-4"></div>
                <div class="radar-polygon"></div>
                <div class="radar-center-label">
                  <span class="center-caption">Profil-Score</span>
                  <span class="center-value">78</span>
                </div>
              </div>

              <div class="dimension-grid" aria-label="Detailwerte je Dimension">
                <div class="dimension-pill">
                  <div class="dimension-meta">
                    <span class="dimension-label">Koordination</span>
                    <span class="dimension-tag">Reaktion &amp; Rhythmus</span>
                  </div>
                  <span class="dimension-score high">92</span>
                </div>
                <div class="dimension-pill">
                  <div class="dimension-meta">
                    <span class="dimension-label">Schnelligkeit</span>
                    <span class="dimension-tag">Sprint &amp; Antritt</span>
                  </div>
                  <span class="dimension-score high">88</span>
                </div>
                <div class="dimension-pill">
                  <div class="dimension-meta">
                    <span class="dimension-label">Kognition</span>
                    <span class="dimension-tag">Entscheidung &amp; Fokus</span>
                  </div>
                  <span class="dimension-score mid">76</span>
                </div>
                <div class="dimension-pill">
                  <div class="dimension-meta">
                    <span class="dimension-label">Anthropometrie</span>
                    <span class="dimension-tag">Größe &amp; Proportion</span>
                  </div>
                  <span class="dimension-score mid">71</span>
                </div>
              </div>
            </div>
          </section>

          <section class="card speed-card" aria-label="Geschwindigkeitsprognose">
            <div class="card-header-row">
              <span class="card-title">Geschwindigkeitsprognose</span>
            </div>
            <p class="card-helper">So schnell kannst Du auf 30m rennen:</p>
            <div class="speed-main-value">4,82 s</div>
            <p class="speed-secondary">
              Max. Geschwindigkeit: <span>22,4 km/h</span>
            </p>
          </section>

          <section class="card sports-card" aria-label="Sportarten-Matching">
            <div class="card-header-row">
              <span class="card-title">Dein Sportarten-Matching</span>
            </div>
            <p class="card-highlight">Am besten passend:</p>

            <div class="sport-list top-matches">
              <div class="sport-row">
                <div class="sport-main">
                  <span class="sport-name">Basketball</span>
                </div>
                <span class="match-badge badge-strong">97%</span>
              </div>
              <div class="sport-row">
                <div class="sport-main">
                  <span class="sport-name">Volleyball</span>
                </div>
                <span class="match-badge badge-strong">91%</span>
              </div>
              <div class="sport-row">
                <div class="sport-main">
                  <span class="sport-name">Handball</span>
                </div>
                <span class="match-badge badge-strong">88%</span>
              </div>
              <div class="sport-row">
                <div class="sport-main">
                  <span class="sport-name">Fußball</span>
                </div>
                <span class="match-badge badge-medium">82%</span>
              </div>
              <div class="sport-row">
                <div class="sport-main">
                  <span class="sport-name">Schwimmen</span>
                </div>
                <span class="match-badge badge-medium">78%</span>
              </div>
            </div>

            <p class="less-match-label">Weniger passend:</p>
            <div class="sport-list low-matches">
              <div class="sport-row small">
                <div class="sport-main">
                  <span class="sport-name">Turnen</span>
                </div>
                <span class="match-badge badge-low">34%</span>
              </div>
              <div class="sport-row small">
                <div class="sport-main">
                  <span class="sport-name">Reiten</span>
                </div>
                <span class="match-badge badge-low">28%</span>
              </div>
            </div>

            <button class="link-row" type="button" @click="showFullList">
              <span class="link-text">Komplette Liste anzeigen</span>
            </button>
          </section>
        </section>

        <footer class="footer">
          <div class="footer-actions">
            <button class="secondary-button" type="button" @click="handleShare">
              <span class="button-icon">📤</span>
              <span class="button-label">Ergebnisse teilen</span>
            </button>
            <button class="secondary-button" type="button" @click="handleDownload">
              <span class="button-icon">📄</span>
              <span class="button-label">PDF herunterladen</span>
            </button>
          </div>
          <div class="progress-dots" aria-label="Fortschritt 8 von 9">
            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot current"></span>
            <span class="dot"></span>
          </div>
        </footer>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ScreenTopBar } from '../shared'

const router = useRouter()


function showFullList() {
  router.push('/screen/27')
}

function handleShare() {
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

function handleDownload() {
  alert('PDF wird heruntergeladen')
}
</script>

<style scoped>
.app-root {
  background:
    radial-gradient(circle at top, rgba(255, 215, 0, 0.16), transparent 60%),
    radial-gradient(circle at bottom right, rgba(255, 215, 0, 0.06), transparent 55%),
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
  gap: 14px;
  overflow-y: auto;
  padding-bottom: 8px;
}
.footer {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
.back-arrow { white-space: nowrap; }
.header-logo { padding: 4px 14px; cursor: pointer; }
.logo-mark { display: inline-flex; align-items: center; gap: 6px; border-radius: 999px; background: rgba(255, 215, 0, 0.16); }
.logo-4 { font-size: 16px; font-weight: 800; color: var(--primary); }
.logo-talents { font-size: 15px; font-weight: 700; color: var(--foreground); }

.title-block { display: flex; flex-direction: column; gap: 6px; }
.subtitle-intro { margin: 0; font-size: 13px; color: var(--muted-foreground); }
.title { margin: 0; display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: 800; }
.title-emoji { font-size: 20px; }

.card {
  border-radius: var(--radius-lg);
  background: var(--card);
  padding: 14px 14px 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.card-header-row { display: flex; justify-content: space-between; align-items: baseline; }
.card-title { font-size: 15px; font-weight: 700; }
.card-subtitle { font-size: 12px; color: var(--muted-foreground); }

.radar-card {
  background:
    radial-gradient(circle at top left, rgba(255, 215, 0, 0.24), transparent 60%),
    var(--card);
}
.radar-chart-wrapper { margin-top: 6px; display: flex; flex-direction: column; gap: 10px; }
.radar-chart.obh-polar {
  position: relative;
  align-self: center;
  width: 230px;
  height: 230px;
  border-radius: 999px;
  background:
    radial-gradient(circle, rgba(255, 255, 255, 0.03), transparent 70%),
    radial-gradient(circle at top, rgba(255, 215, 0, 0.16), transparent 65%);
}
.radar-ring {
  position: absolute;
  inset: 10%;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.04);
}
.ring-2 { inset: 25%; }
.ring-3 { inset: 40%; }
.ring-4 { inset: 55%; }

.radar-axis {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1px;
  height: 52%;
  background: rgba(255, 255, 255, 0.08);
  transform-origin: bottom center;
}
.axis-1 { transform: translateX(-50%) rotate(0deg); }
.axis-2 { transform: translateX(-50%) rotate(90deg); }
.axis-3 { transform: translateX(-50%) rotate(180deg); }
.axis-4 { transform: translateX(-50%) rotate(270deg); }

.radar-polygon {
  position: absolute;
  inset: 26%;
  border-radius: 40%;
  background: rgba(255, 215, 0, 0.3);
  box-shadow: 0 0 22px rgba(255, 215, 0, 0.6);
}
.radar-center-label {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.center-caption { font-size: 11px; color: var(--muted-foreground); }
.center-value { font-size: 20px; font-weight: 800; color: var(--primary); }

.dimension-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
}
.dimension-pill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 8px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(0, 0, 0, 0.4));
}
.dimension-meta { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
.dimension-label { font-size: 12px; font-weight: 600; }
.dimension-tag { font-size: 10px; color: var(--muted-foreground); white-space: nowrap; }
.dimension-score { padding: 2px 6px; border-radius: 999px; font-size: 11px; font-weight: 700; }
.dimension-score.high { background: rgba(255, 215, 0, 0.16); color: var(--primary); }
.dimension-score.mid { background: rgba(255, 255, 255, 0.06); color: var(--foreground); }

.card-helper { margin: 0; font-size: 13px; color: var(--muted-foreground); }
.speed-main-value {
  font-size: 34px;
  font-weight: 800;
  color: var(--primary);
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.6);
}
.speed-secondary { margin: 0; font-size: 13px; color: var(--foreground); }
.speed-secondary span { font-weight: 600; }

.sports-card { gap: 8px; }
.card-highlight { margin: 0; font-size: 13px; color: var(--primary); font-weight: 600; }
.sport-list { display: flex; flex-direction: column; gap: 6px; }
.sport-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  border-radius: var(--radius-md);
  background-color: var(--muted);
}
.sport-row.small { padding: 6px 8px; }
.sport-main { display: flex; align-items: center; gap: 6px; min-width: 0; }
.sport-name { font-size: 14px; font-weight: 500; white-space: nowrap; }
.match-badge { padding: 2px 8px; border-radius: 999px; font-size: 12px; font-weight: 600; white-space: nowrap; }
.badge-strong {
  background-image: linear-gradient(135deg, rgba(255, 215, 0, 0.95), var(--primary));
  color: var(--primary-foreground);
}
.badge-medium {
  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.95), var(--foreground));
  color: var(--background);
}
.badge-low {
  background-image: linear-gradient(135deg, #111111, #050505);
  color: var(--muted-foreground);
}
.less-match-label { margin: 4px 0 0 0; font-size: 12px; color: var(--muted-foreground); }
.link-row {
  margin-top: 4px;
  border: none;
  background: transparent;
  padding: 4px 0 0 0;
  align-self: flex-start;
  cursor: pointer;
}
.link-text { font-size: 13px; color: var(--primary); font-weight: 500; white-space: nowrap; }

.footer-actions { display: flex; gap: 10px; }
.secondary-button {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 12px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.34);
  background: transparent;
  color: var(--foreground);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
.button-icon { font-size: 16px; }
.progress-dots { margin-top: 2px; display: flex; justify-content: center; gap: 6px; }
.dot { width: 6px; height: 6px; border-radius: 999px; background-color: #222222; }
.dot.active,
.dot.current { width: 18px; border-radius: 999px; background-color: var(--primary); }
</style>
