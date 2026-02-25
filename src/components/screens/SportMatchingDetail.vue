<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Sport-Matching Detail Basketball">
        <header class="header">
          <ScreenTopBar />
        </header>

        <section class="content">
          <div class="title-block">
            <h2 class="subtitle-intro">
              Dein Abstand zu den verschiedenen Sportarten
            </h2>
            <h1 class="title">
              <span class="title-emoji">🏀</span>
              <span>Basketball im Vergleich</span>
            </h1>
          </div>

          <section
            class="card distance-card"
            aria-label="Abstand der Sportarten zu Deinem Profil"
          >
            <div class="card-header-row">
              <span class="card-title">Abstand zu Deinem Profil</span>
              <span class="card-subtitle">Je näher, desto besser passend</span>
            </div>

            <div class="distance-graph-wrapper">
              <div class="distance-graph">
                <div class="distance-ring ring-1"></div>
                <div class="distance-ring ring-2"></div>
                <div class="distance-ring ring-3"></div>

                <div class="distance-center">
                  <span class="center-caption">Du</span>
                  <span class="center-name">Max</span>
                </div>

                <div class="sport-node sport-basketball">
                  <div class="sport-node-label sport-strong">
                    <span class="sport-node-name">Basketball</span>
                    <span class="sport-node-score">97&nbsp;% Match</span>
                  </div>
                </div>

                <div class="sport-node sport-volleyball">
                  <div class="sport-node-label sport-strong">
                    <span class="sport-node-name">Volleyball</span>
                    <span class="sport-node-score">91&nbsp;% Match</span>
                  </div>
                </div>

                <div class="sport-node sport-handball">
                  <div class="sport-node-label sport-strong">
                    <span class="sport-node-name">Handball</span>
                    <span class="sport-node-score">88&nbsp;% Match</span>
                  </div>
                </div>

                <div class="sport-node sport-fussball">
                  <div class="sport-node-label sport-mid">
                    <span class="sport-node-name">Fußball</span>
                    <span class="sport-node-score">82&nbsp;% Match</span>
                  </div>
                </div>

                <div class="sport-node sport-schwimmen">
                  <div class="sport-node-label sport-mid">
                    <span class="sport-node-name">Schwimmen</span>
                    <span class="sport-node-score">78&nbsp;% Match</span>
                  </div>
                </div>

                <div class="sport-node sport-turnen">
                  <div class="sport-node-label sport-low">
                    <span class="sport-node-name">Turnen</span>
                    <span class="sport-node-score">34&nbsp;% Match</span>
                  </div>
                </div>

                <div class="sport-node sport-reiten">
                  <div class="sport-node-label sport-low">
                    <span class="sport-node-name">Reiten</span>
                    <span class="sport-node-score">28&nbsp;% Match</span>
                  </div>
                </div>
              </div>

              <div class="distance-legend">
                <div class="legend-item">
                  <span class="legend-dot legend-strong"></span>
                  <span class="legend-label">Nahe dran – sehr gutes Matching</span>
                </div>
                <div class="legend-item">
                  <span class="legend-dot legend-mid"></span>
                  <span class="legend-label">Mittlerer Abstand – gut möglich</span>
                </div>
                <div class="legend-item">
                  <span class="legend-dot legend-low"></span>
                  <span class="legend-label">Weiter entfernt – weniger passend</span>
                </div>
              </div>
            </div>
          </section>

          <section class="card" aria-label="Hinweis auf den Wohnzimmer-Test">
            <div class="card-header-row">
              <span class="card-title">Noch genauer werden?</span>
            </div>
            <p class="card-helper">
              Wenn Du es noch genauer wissen erfahren willst, was für ein(e)
              Athlet:in in dir steckt, dann komme zu uns in den Gold Point zur
              vollständigen Individualdiagnostik.
            </p>
            <button class="primary-button" type="button" @click="goToGoldenPicture">
              <span class="primary-button-label">Golden Point Termin</span>
            </button>
          </section>
        </section>

        <footer class="footer">
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

const goToGoldenPicture = () => {
  router.push('/screen/28')
}
</script>

<style scoped>
.app-root {
  background:
    radial-gradient(circle at top, rgba(255, 215, 0, 0.16), transparent 60%),
    radial-gradient(circle at bottom right, rgba(255, 215, 0, 0.06), transparent 55%),
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

.title-block {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.subtitle-intro {
  margin: 0;
  font-size: 13px;
  color: var(--muted-foreground);
}

.title {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 800;
}

.title-emoji {
  font-size: 20px;
}

.card {
  border-radius: var(--radius-lg);
  background: var(--card);
  padding: 14px 14px 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-header-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.card-title {
  font-size: 15px;
  font-weight: 700;
}

.card-subtitle {
  font-size: 12px;
  color: var(--muted-foreground);
}

.distance-card {
  background:
    radial-gradient(circle at top left, rgba(255, 215, 0, 0.18), transparent 60%),
    var(--card);
}

.distance-graph-wrapper {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.distance-graph {
  position: relative;
  align-self: center;
  width: 260px;
  height: 260px;
  border-radius: 999px;
  background:
    radial-gradient(circle, rgba(255, 255, 255, 0.03), transparent 70%),
    radial-gradient(circle at top, rgba(255, 215, 0, 0.14), transparent 65%);
}

.distance-ring {
  position: absolute;
  inset: 10%;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.ring-2 {
  inset: 28%;
}
.ring-3 {
  inset: 46%;
}

.distance-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 88px;
  height: 88px;
  border-radius: 999px;
  background: radial-gradient(
    circle,
    rgba(255, 215, 0, 0.5),
    rgba(0, 0, 0, 0.9)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  box-shadow: 0 0 24px rgba(255, 215, 0, 0.7);
}

.center-caption {
  font-size: 11px;
  color: var(--muted-foreground);
}

.center-name {
  font-size: 16px;
  font-weight: 700;
}

.sport-node {
  position: absolute;
  transform: translate(-50%, -50%);
}

.sport-node-label {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px 8px;
  border-radius: var(--radius-md);
  max-width: 130px;
}

.sport-node-name {
  font-size: 12px;
  font-weight: 600;
}

.sport-node-score {
  font-size: 11px;
}

.sport-strong {
  background: rgba(255, 215, 0, 0.18);
  color: var(--foreground);
  box-shadow: 0 0 14px rgba(255, 215, 0, 0.7);
}

.sport-mid {
  background: rgba(255, 255, 255, 0.06);
  color: var(--foreground);
}

.sport-low {
  background: #050505;
  color: var(--muted-foreground);
}

.sport-basketball {
  left: 62%;
  top: 47%;
}

.sport-volleyball {
  left: 75%;
  top: 25%;
}

.sport-handball {
  left: 30%;
  top: 16%;
}

.sport-fussball {
  left: 82%;
  top: 67%;
}

.sport-schwimmen {
  left: 25%;
  top: 71%;
}

.sport-turnen {
  left: 13%;
  top: 42%;
}

.sport-reiten {
  left: 50%;
  top: 6%;
}

.distance-legend {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
}

.legend-strong {
  background-color: var(--primary);
}

.legend-mid {
  background-color: #777777;
}

.legend-low {
  background-color: #333333;
}

.legend-label {
  font-size: 12px;
  color: var(--muted-foreground);
}

.card-helper {
  margin: 0;
  font-size: 13px;
  color: var(--muted-foreground);
}

.primary-button {
  margin-top: 4px;
  width: 100%;
  border: none;
  border-radius: var(--radius-lg);
  padding: 12px 16px;
  background-color: var(--primary);
  color: var(--primary-foreground);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}

.primary-button:hover {
  filter: brightness(1.05);
}

.progress-dots {
  margin-top: 2px;
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

.dot.active,
.dot.current {
  width: 18px;
  border-radius: 999px;
  background-color: var(--primary);
}
</style>
