<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Ergebnis-Optionen">
        <header class="top-bar">
          <button class="icon-button" @click="goToPrev">
            <span class="icon-chevron">◀</span>
          </button>
          <div class="logo-mark">
            <span class="logo-4">4</span><span class="logo-talents">talents</span>
          </div>
        </header>

        <section class="content" id="result-entry-content">
          <h1 class="screen-title">Wir haben ein Ergebnis für Dich.</h1>
          <p class="intro-text">
            Wir haben schon ein erstes Ergebnis für Dich: eine Prognose Deiner
            finalen Körpergröße und Sportarten, die gut zu Dir passen könnten.
            Wie möchtest Du weitermachen?
          </p>

          <section class="option-list" aria-label="Nächste Schritte">
            <article class="option-card primary" @click="handleViewResults">
              <div class="option-header-row">
                <div class="option-icon">📊</div>
                <div class="option-title-wrap">
                  <h2 class="option-title">Ergebnis jetzt sehen</h2>
                  <p class="option-subtitle">
                    Deine Körpergrößenprognose und erste
                    Sportarten-Empfehlungen ansehen.
                  </p>
                </div>
              </div>
              <button class="primary-button inside" @click.stop="handleViewResults">
                Ergebnis anzeigen
              </button>
            </article>
          </section>

          <section class="primary-cta-section">
            <button class="primary-button full-width" @click="handleContinue">
              Weiter
            </button>
          </section>

          <section class="hint-section">
            <p class="hint-text">
              Tipp: Du kannst Dein Ergebnis später jederzeit im Dashboard
              wiederfinden.
            </p>
          </section>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()


const goToSports = () => {
  router.push('/screen/19')
}
const goToPrev = () => {
  router.push('/screen/14')
}

const handleViewResults = () => {
  router.push('/screen/16')
}

const handleContinue = () => {
  router.push('/screen/11')
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
  overflow-y: auto;
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
  transition: all 0.2s;
}

.icon-button:hover {
  background-color: rgba(255, 255, 255, 0.04);
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

.intro-text {
  margin: 0;
  font-size: 14px;
  color: var(--muted-foreground);
}

.option-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.option-card {
  background:
    radial-gradient(
      circle at top right,
      rgba(255, 215, 0, 0.08),
      transparent 55%
    ),
    var(--card);
  border-radius: var(--radius-xl);
  padding: 16px 14px 14px 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s;
}

.option-card:hover {
  border-color: rgba(255, 215, 0, 0.3);
}

.option-card.primary {
  border-color: rgba(255, 215, 0, 0.85);
  box-shadow:
    0 0 0 1px rgba(255, 215, 0, 0.16),
    0 0 24px rgba(0, 0, 0, 0.6);
}

.option-header-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.option-icon {
  font-size: 22px;
}

.option-title-wrap {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.option-title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
}

.option-subtitle {
  margin: 0;
  font-size: 13px;
  color: var(--muted-foreground);
}

.primary-button {
  border: none;
  border-radius: var(--radius-lg);
  padding: 14px 16px;
  background: var(--primary);
  color: var(--primary-foreground);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
}

.primary-button:active {
  transform: translateY(0);
}

.primary-button.inside {
  margin-top: 4px;
  width: 100%;
}

.primary-button.full-width {
  width: 100%;
}

.primary-cta-section {
  margin-top: 8px;
}

.hint-section {
  margin-top: 4px;
}

.hint-text {
  margin: 0;
  font-size: 12px;
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

