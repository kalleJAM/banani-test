<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Wohnzimmer-Test Übersicht">
        <header class="header">
          <ScreenTopBar />
        </header>

        <section class="content">
          <div class="title-block">
            <h1 class="title">
              <span class="title-emoji">🏠</span>
              <span>Wohnzimmer-Test</span>
            </h1>
            <p class="subtitle">für Max</p>
          </div>

          <div class="progress-section">
            <div class="progress-header">
              <span class="progress-label">{{ completedCount }} von 5 abgeschlossen</span>
            </div>
            <div class="progress-bar-wrapper">
              <div class="progress-bar-track">
                <div class="progress-bar-fill" :style="{ width: progressPercent + '%' }"></div>
              </div>
            </div>
          </div>

          <div class="tests-list" aria-label="Test Checkliste">
            <div
              v-for="(t, i) in tests"
              :key="t.path"
              class="test-item"
              :class="{ completed: t.completed, current: t.current, upcoming: t.upcoming }"
              @click="goToTest(t.path)"
            >
              <template v-if="t.completed">
                <div class="test-status">✓</div>
                <div class="test-text">{{ t.name }}</div>
                <div class="test-meta">Abgeschlossen</div>
              </template>
              <template v-else-if="t.current">
                <div class="current-indicator"></div>
                <div class="test-main">
                  <div class="test-status-icon">
                    <span>{{ t.emoji }}</span>
                  </div>
                  <div class="test-info">
                    <div class="test-text">{{ t.name }}</div>
                    <div class="test-meta current-meta">Aktueller Test</div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="test-status">⏳</div>
                <div class="test-text">{{ t.name }}</div>
                <div class="test-meta">Noch offen</div>
              </template>
            </div>
          </div>
        </section>

        <footer class="footer">
          <button class="primary-button" type="button" @click="startNextTest">
            {{ nextTestLabel }}
          </button>
          <div class="dots" aria-label="Fortschritt 7 von 9">
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
        </footer>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ScreenTopBar } from '../shared'

const router = useRouter()

const tests = ref([
  { name: 'Körpermaße messen', path: 22, completed: true, current: false, upcoming: false, emoji: '📏' },
  { name: 'Seitwärtssprung', path: 23, completed: true, current: false, upcoming: false, emoji: '↔️' },
  { name: 'Schlussweitsprung', path: 24, completed: true, current: false, upcoming: false, emoji: '🏃‍♂️' },
  { name: 'Tapping', path: 25, completed: false, current: true, upcoming: false, emoji: '⚡' },
  { name: 'Stroop-Test', path: 26, completed: false, current: false, upcoming: true, emoji: '🧠' }
])

const completedCount = computed(() => tests.value.filter(t => t.completed).length)
const progressPercent = computed(() => (completedCount.value / 5) * 100)
const currentTest = computed(() => tests.value.find(t => t.current))
const nextTestLabel = computed(() => {
  const cur = currentTest.value
  if (cur) return 'Nächsten Test starten'
  const next = tests.value.find(t => !t.completed)
  return next ? next.name + ' starten' : 'Alle erledigt'
})


function goToTest(path) {
  router.push('/screen/' + path)
}

function startNextTest() {
  const next = currentTest.value || tests.value.find(t => !t.completed)
  if (next) router.push('/screen/27')
}
</script>

<style scoped>
.app-root {
  background:
    radial-gradient(
      circle at top,
      rgba(255, 215, 0, 0.14),
      transparent 60%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(255, 215, 0, 0.06),
      transparent 55%
    ),
    var(--background);
}

.screen {
  padding: 24px 20px 20px 20px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
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

.back-arrow {
  white-space: nowrap;
}

.header-logo {
  padding: 4px 14px;
  cursor: pointer;
}

.logo-mark {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  background: rgba(255, 215, 0, 0.16);
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

.title-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
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

.subtitle {
  margin: 0;
  font-size: 14px;
  color: var(--muted-foreground);
}

.progress-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress-label {
  font-size: 13px;
  color: var(--muted-foreground);
}

.progress-bar-wrapper {
  width: 100%;
}

.progress-bar-track {
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background-color: #181818;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    rgba(255, 215, 0, 0.25),
    var(--primary)
  );
}

.tests-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.test-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-radius: var(--radius-lg);
  background-color: var(--card);
  cursor: pointer;
}

.test-status {
  width: 24px;
  height: 24px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.test-text {
  flex: 1;
  font-size: 15px;
  font-weight: 500;
}

.test-meta {
  font-size: 12px;
  color: var(--muted-foreground);
  white-space: nowrap;
}

.test-item.completed {
  background: linear-gradient(
    90deg,
    rgba(16, 185, 129, 0.08),
    transparent
  );
}

.test-item.completed .test-status {
  background-color: rgba(16, 185, 129, 0.12);
  color: var(--primary);
}

.test-item.completed .test-text {
  opacity: 0.9;
}

.test-item.current {
  border-radius: var(--radius-lg);
  background:
    radial-gradient(
      circle at top left,
      rgba(255, 215, 0, 0.22),
      transparent 65%
    ),
    var(--card);
  box-shadow: 0 0 18px rgba(255, 215, 0, 0.25);
}

.current-indicator {
  position: absolute;
  left: 0;
  top: 10px;
  bottom: 10px;
  width: 3px;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 215, 0, 0.2),
    var(--primary)
  );
}

.test-main {
  display: flex;
  align-items: center;
  gap: 10px;
}

.test-status-icon {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background-color: rgba(255, 215, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.test-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.current-meta {
  color: var(--primary);
}

.test-item.upcoming {
  opacity: 0.75;
}

.test-item.upcoming .test-status {
  background-color: #111111;
  color: var(--muted-foreground);
}

.primary-button {
  width: 100%;
  border: none;
  border-radius: var(--radius-lg);
  padding: 14px 16px;
  background:
    radial-gradient(
      circle at top,
      rgba(255, 255, 255, 0.16),
      transparent 55%
    ),
    var(--primary);
  color: var(--primary-foreground);
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  box-shadow: 0 0 18px rgba(255, 215, 0, 0.45);
  cursor: pointer;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 6px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background-color: #262626;
}

.dot.active {
  width: 8px;
  height: 8px;
  background-color: var(--primary);
}
</style>
