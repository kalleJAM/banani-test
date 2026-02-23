<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Tapping-Test mit Kamera">
        <header class="header">
          <button class="back-button" type="button" @click="goToTests">
            <span class="back-arrow">← Tests</span>
          </button>
          <div class="logo-mark header-logo" @click="goToSports">
            <span class="logo-4">4</span><span class="logo-talents">talents</span>
          </div>
        </header>

        <section class="content">
          <div class="title-block">
            <h1 class="title">
              <span class="title-emoji">⚡</span>
              <span>Tapping-Test</span>
            </h1>
            <p class="subtitle">Test 4 von 5</p>
          </div>

          <div class="video-section small-video">
            <div class="video-card" @click="playVideo">
              <div class="video-thumbnail">
                <div class="video-play">
                  <span class="video-play-icon">▶</span>
                </div>
              </div>
              <div class="video-caption">
                Kurze Erklärung zum Tapping-Test ansehen
              </div>
            </div>
          </div>

          <div class="instructions-section" aria-label="Tapping-Test Anleitung">
            <div class="instruction-item">
              <span class="instruction-number">1.</span>
              <span class="instruction-text">Starte die Kamera unten.</span>
            </div>
            <div class="instruction-item">
              <span class="instruction-number">2.</span>
              <span class="instruction-text">Halte eine Uhr mit Sekundenanzeige ins Bild.</span>
            </div>
            <div class="instruction-item">
              <span class="instruction-number">3.</span>
              <span class="instruction-text">Führe den Test durch.</span>
            </div>
            <div class="instruction-item">
              <span class="instruction-number">4.</span>
              <span class="instruction-text">Speichere das Video.</span>
            </div>
            <div class="instruction-item">
              <span class="instruction-number">5.</span>
              <span class="instruction-text">Zähle die Tapps des Kindes und gib sie unten ein.</span>
            </div>
          </div>

          <div class="camera-section" aria-label="Slow-Motion Kamera Vorschau">
            <div class="camera-card">
              <div class="camera-label-row">
                <span class="camera-label">📹 Slow-Motion aktiv</span>
                <span class="camera-timer">⏱ {{ timerDisplay }}</span>
              </div>
              <div class="camera-preview">
                <div class="camera-frame-overlay"></div>
              </div>
              <div class="camera-controls">
                <button class="record-button" type="button" @click="toggleRecord">
                  <span class="record-dot" :class="{ recording }"></span>
                  <span class="record-label">{{ recording ? '⏹ Aufnahme stoppen' : '🔴 Aufnahme starten' }}</span>
                </button>
              </div>
            </div>
          </div>

          <div class="result-section" aria-label="Tapping-Test Ergebnis eingeben">
            <div class="result-label">Ergebnis eingeben (Anzahl Tapps):</div>
            <div class="result-input-card" @click="enterResult">
              <div class="result-value">{{ tappsCount !== null ? tappsCount + ' Tapps' : '___ Tapps' }}</div>
            </div>
          </div>
        </section>

        <footer class="footer">
          <button class="primary-button" type="button" @click="save">
            ✅ Ergebnis speichern
          </button>
        </footer>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const recording = ref(false)
const timerSeconds = ref(0)
let timerId = null
const tappsCount = ref(null)

const timerDisplay = computed(() => {
  const s = timerSeconds.value
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}:00.00`
})

function goToTests() {
  router.push('/screen/21')
}

function goToSports() {
  router.push('/screen/19')
}

function playVideo() {}

function toggleRecord() {
  recording.value = !recording.value
  if (recording.value) {
    timerId = setInterval(() => { timerSeconds.value++ }, 1000)
  } else {
    if (timerId) clearInterval(timerId)
  }
}

function enterResult() {
  const val = prompt('Anzahl Tapps:', tappsCount.value != null ? String(tappsCount.value) : '')
  if (val != null && val !== '') {
    const n = parseInt(val.replace(/\D/g, ''), 10)
    if (!isNaN(n)) tappsCount.value = n
  }
}

function save() {
  router.push('/screen/21')
}

onUnmounted(() => {
  if (timerId) clearInterval(timerId)
})
</script>

<style scoped>
.app-root {
  background: radial-gradient(circle at top, rgba(255, 215, 0, 0.18), transparent 60%), radial-gradient(circle at bottom right, rgba(255, 215, 0, 0.08), transparent 55%), var(--background);
}
.screen { padding: 24px 20px 20px 20px; }
.header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
.content { flex: 1; display: flex; flex-direction: column; gap: 18px; }
.footer { margin-top: 16px; }

.back-button { background: transparent; border: none; padding: 4px 0; color: var(--foreground); font-size: 14px; font-weight: 500; cursor: pointer; }
.header-logo { padding: 4px 14px; cursor: pointer; }
.logo-mark { display: inline-flex; align-items: center; gap: 6px; border-radius: 999px; background: rgba(255, 215, 0, 0.16); }
.logo-4 { font-size: 16px; font-weight: 800; color: var(--primary); }
.logo-talents { font-size: 15px; font-weight: 700; color: var(--foreground); }

.title-block { display: flex; flex-direction: column; gap: 4px; }
.title { margin: 0; display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: 800; }
.title-emoji { font-size: 20px; }
.subtitle { margin: 0; font-size: 14px; color: var(--muted-foreground); }

.video-section.small-video { display: flex; }
.video-card { width: 100%; border-radius: var(--radius-lg); background: radial-gradient(circle at top left, rgba(255, 215, 0, 0.2), transparent 65%), var(--card); padding: 10px 10px 8px 10px; display: flex; flex-direction: column; gap: 6px; cursor: pointer; }
.video-thumbnail { position: relative; width: 100%; padding-top: 56.25%; border-radius: var(--radius-md); background: #111111; overflow: hidden; }
.video-play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
.video-play-icon { width: 40px; height: 40px; border-radius: 999px; background: var(--primary); color: var(--primary-foreground); display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 700; }
.video-caption { font-size: 12px; color: var(--muted-foreground); }

.instructions-section { display: flex; flex-direction: column; gap: 6px; padding: 10px 12px; border-radius: var(--radius-lg); background-color: rgba(17, 17, 17, 0.9); }
.instruction-item { display: flex; gap: 8px; font-size: 14px; }
.instruction-number { color: var(--primary); font-weight: 600; }
.instruction-text { color: var(--foreground); }

.camera-section { display: flex; }
.camera-card { width: 100%; border-radius: var(--radius-lg); background: linear-gradient(135deg, rgba(255, 215, 0, 0.12), transparent 55%), var(--card); padding: 10px 10px 12px 10px; display: flex; flex-direction: column; gap: 8px; }
.camera-label-row { display: flex; justify-content: space-between; align-items: center; font-size: 12px; }
.camera-label { color: var(--primary); font-weight: 600; }
.camera-timer { color: var(--foreground); font-weight: 500; }
.camera-preview { position: relative; width: 100%; padding-top: 75%; border-radius: var(--radius-md); background: #050505; overflow: hidden; }
.camera-frame-overlay { position: absolute; inset: 6px; border-radius: var(--radius-md); border: 1px solid rgba(255, 215, 0, 0.45); }
.camera-controls { display: flex; justify-content: center; margin-top: 2px; }
.record-button { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 999px; border: none; background: var(--destructive); color: var(--foreground); font-size: 14px; font-weight: 600; cursor: pointer; }
.record-dot { width: 12px; height: 12px; border-radius: 999px; background-color: #ff4b4b; }
.record-dot.recording { animation: pulse 1s infinite; }
@keyframes pulse { 50% { opacity: 0.5; } }
.record-label { white-space: nowrap; }

.result-section { display: flex; flex-direction: column; gap: 6px; }
.result-label { font-size: 14px; color: var(--foreground); }
.result-input-card { padding: 12px 14px; border-radius: var(--radius-lg); background-color: var(--card); cursor: pointer; }
.result-value { font-size: 18px; font-weight: 700; }

.primary-button { width: 100%; border: none; border-radius: var(--radius-lg); padding: 14px 16px; background: radial-gradient(circle at top, rgba(255, 255, 255, 0.16), transparent 55%), var(--primary); color: var(--primary-foreground); font-size: 16px; font-weight: 700; text-align: center; box-shadow: 0 0 18px rgba(255, 215, 0, 0.45); cursor: pointer; }
</style>
