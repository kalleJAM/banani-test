<template>
  <div class="screen-wrapper">
    <div id="app-root-29" class="app-root">
      <main class="screen" aria-label="4talents Prognose">
        <ScreenTopBar />

        <section class="content">
          <h1 class="screen-title">🔮 Deine Prognose</h1>

          <section class="card result-card">
            <div class="result-header-row">
              <span class="child-name">Max</span>
            </div>
            <p class="label">Prognostizierte Erwachsenengröße:</p>
            <div class="hero-value-wrap">
              <span class="hero-value">186 cm</span>
            </div>
            <p class="confidence-text">📊 Konfidenzintervall: 183 – 189 cm</p>
          </section>

          <section class="card sports-card">
            <div class="sports-icons-row">
              <span>🏀</span>
              <span>🏊</span>
              <span>⚽</span>
              <span>🤸</span>
              <span>🏃</span>
              <span>🏐</span>
              <span>🤾</span>
            </div>
            <p class="sports-text-main">
              Dir stehen 23 Sportarten offen, in denen Du Spaß haben kannst!
            </p>
          </section>

          <p class="teaser-text">
            Willst Du wissen, welche am besten zu Deinem Kind passen?
          </p>
        </section>

        <section class="footer-section">
          <button class="primary-button full-width" @click="handleViewSports">
            Sportarten ansehen
          </button>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ScreenTopBar } from '../shared'

const router = useRouter()

const handleViewSports = () => {
  router.push('/screen/17')
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

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
}

.footer-section {
  margin-top: 8px;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.icon-button {
  background: transparent;
  border: none;
  padding: 8px 10px;
  border-radius: var(--radius-md);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--foreground);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.icon-button:hover {
  background-color: rgba(255, 255, 255, 0.04);
}

.icon-chevron {
  font-size: 18px;
}

.back-label {
  font-size: 14px;
}

.logo-mark {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 215, 0, 0.14);
  cursor: pointer;
  transition: all 0.2s;
}

.logo-mark:hover {
  background: rgba(255, 215, 0, 0.18);
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

.label {
  margin: 4px 0 0 0;
  font-size: 14px;
  color: var(--muted-foreground);
}

.child-name {
  font-size: 16px;
  font-weight: 600;
}

.confidence-text {
  margin: 10px 0 0 0;
  font-size: 14px;
  color: var(--muted-foreground);
}

.sports-text-main {
  margin: 10px 0 0 0;
  font-size: 14px;
}

.teaser-text {
  margin: 0;
  font-size: 14px;
  color: var(--muted-foreground);
}

.card {
  background: var(--card);
  border-radius: var(--radius-xl);
  padding: 16px 16px 14px 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.result-card {
  background:
    radial-gradient(
      circle at top right,
      rgba(255, 215, 0, 0.16),
      transparent 55%
    ),
    var(--card);
  box-shadow:
    0 0 0 1px rgba(255, 215, 0, 0.12),
    0 0 32px rgba(0, 0, 0, 0.7);
}

.result-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.hero-value-wrap {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.hero-value {
  font-size: 48px;
  font-weight: 800;
  color: var(--primary);
  text-shadow: 0 0 12px rgba(255, 215, 0, 0.45);
}

.sports-card {
  display: flex;
  flex-direction: column;
}

.sports-icons-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 20px;
}

.primary-button {
  width: 100%;
  border: none;
  border-radius: var(--radius-lg);
  padding: 16px;
  background: var(--primary);
  color: var(--primary-foreground);
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  white-space: normal;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.4);
}

.primary-button:active {
  transform: translateY(0);
}

.progress-dots {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 10px;
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



