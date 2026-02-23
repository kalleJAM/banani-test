<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Seitwärtssprung nach Bös Test">
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
              <span class="title-emoji">↔️</span>
              <span>Seitwärtssprung nach Bös</span>
            </h1>
            <p class="subtitle">Test 2 von 5</p>
          </div>

          <div class="video-section">
            <div class="video-card" @click="playVideo">
              <div class="video-thumbnail">
                <div class="video-play">
                  <span class="video-play-icon">▶</span>
                </div>
              </div>
              <div class="video-caption">
                Kurze Erklärung zum Test ansehen
              </div>
            </div>
          </div>

          <div class="inputs-section" aria-label="Seitwärtssprung Eingaben">
            <div class="attempt-row">
              <div class="attempt-label">Versuch 1</div>
              <div class="attempt-input-card" @click="focusAttempt(1)">
                <div class="attempt-value">{{ attempt1 || '__' }}</div>
                <div class="attempt-unit">Sprünge in 15 Sekunden</div>
              </div>
            </div>

            <div class="attempt-row">
              <div class="attempt-label">Versuch 2</div>
              <div class="attempt-input-card" @click="focusAttempt(2)">
                <div class="attempt-value">{{ attempt2 || '__' }}</div>
                <div class="attempt-unit">Sprünge in 15 Sekunden</div>
              </div>
            </div>

            <div class="result-row">
              <div class="result-badge">Bestes Ergebnis: {{ bestResult }} Sprünge</div>
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
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const attempt1 = ref('')
const attempt2 = ref('')

const bestResult = computed(() => {
  const a = parseInt(attempt1.value, 10)
  const b = parseInt(attempt2.value, 10)
  if (!isNaN(a) && !isNaN(b)) return Math.max(a, b)
  if (!isNaN(a)) return a
  if (!isNaN(b)) return b
  return '__'
})

function goToTests() {
  router.push('/screen/21')
}

function goToSports() {
  router.push('/screen/19')
}

function playVideo() {}

function focusAttempt(n) {
  const val = prompt('Anzahl Sprünge (Versuch ' + n + '):', n === 1 ? attempt1.value : attempt2.value)
  if (val != null) {
    if (n === 1) attempt1.value = val
    else attempt2.value = val
  }
}

function save() {
  router.push('/screen/21')
}
</script>

<style scoped>
.app-root {
  background: radial-gradient(circle at top, rgba(255, 215, 0, 0.18), transparent 60%), radial-gradient(circle at bottom right, rgba(255, 215, 0, 0.08), transparent 55%), var(--background);
}
.screen { padding: 24px 20px 20px 20px; }
.header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
.content { flex: 1; display: flex; flex-direction: column; gap: 20px; }
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

.video-section { display: flex; }
.video-card { width: 100%; border-radius: var(--radius-lg); background: radial-gradient(circle at top left, rgba(255, 215, 0, 0.2), transparent 65%), var(--card); padding: 12px 12px 10px 12px; display: flex; flex-direction: column; gap: 8px; cursor: pointer; }
.video-thumbnail { position: relative; width: 100%; padding-top: 56.25%; border-radius: var(--radius-md); background: #111111; overflow: hidden; }
.video-play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
.video-play-icon { width: 48px; height: 48px; border-radius: 999px; background: var(--primary); color: var(--primary-foreground); display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 700; }
.video-caption { font-size: 13px; color: var(--muted-foreground); }

.inputs-section { display: flex; flex-direction: column; gap: 14px; }
.attempt-row { display: flex; flex-direction: column; gap: 6px; }
.attempt-label { font-size: 15px; font-weight: 600; }
.attempt-input-card { display: flex; align-items: center; justify-content: space-between; gap: 10px; padding: 12px 14px; border-radius: var(--radius-lg); background-color: var(--card); cursor: pointer; }
.attempt-value { font-size: 18px; font-weight: 700; }
.attempt-unit { font-size: 14px; color: var(--muted-foreground); text-align: right; }
.result-row { margin-top: 4px; }
.result-badge { display: inline-flex; align-items: center; padding: 6px 10px; border-radius: 999px; background-color: rgba(255, 215, 0, 0.12); color: var(--primary); font-size: 13px; font-weight: 600; }

.primary-button { width: 100%; border: none; border-radius: var(--radius-lg); padding: 14px 16px; background: radial-gradient(circle at top, rgba(255, 255, 255, 0.16), transparent 55%), var(--primary); color: var(--primary-foreground); font-size: 16px; font-weight: 700; text-align: center; box-shadow: 0 0 18px rgba(255, 215, 0, 0.45); cursor: pointer; }
</style>
