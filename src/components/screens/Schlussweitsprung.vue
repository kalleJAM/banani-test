<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Schlussweitsprung Test">
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
              <span class="title-emoji">🏃‍♂️</span>
              <span>Schlussweitsprung</span>
            </h1>
            <p class="subtitle">Test 3 von 5 · Wohnzimmer-Test</p>
          </div>

          <div class="video-section" aria-label="Erklärvideo Schlussweitsprung">
            <div class="video-placeholder" @click="playVideo">
              <div class="video-play-icon"><span>▶</span></div>
            </div>
          </div>

          <div class="instructions-card">
            <h2 class="instructions-title">So funktioniert der Test</h2>
            <ul class="instructions-list">
              <li>Markiere eine Startlinie auf dem Boden.</li>
              <li>Dein Kind springt mit beiden Füßen nach vorne.</li>
              <li>Miss die Entfernung von der Linie bis zur Ferse.</li>
              <li>Trage unten die besten Sprünge in Zentimetern ein.</li>
            </ul>
          </div>

          <div class="results-card" aria-label="Eingabe Schlussweitsprung-Ergebnisse">
            <div class="attempt-row app-input-wrap">
              <span class="app-input-label">Versuch 1</span>
              <div class="attempt-input-row">
                <input
                  v-model="attempt1"
                  type="number"
                  class="app-input"
                  placeholder="cm"
                  min="0"
                />
                <span class="app-input-unit">cm</span>
              </div>
            </div>
            <div class="attempt-row app-input-wrap">
              <span class="app-input-label">Versuch 2</span>
              <div class="attempt-input-row">
                <input
                  v-model="attempt2"
                  type="number"
                  class="app-input"
                  placeholder="cm"
                  min="0"
                />
                <span class="app-input-unit">cm</span>
              </div>
            </div>
            <div class="attempt-row app-input-wrap">
              <span class="app-input-label">Versuch 3</span>
              <div class="attempt-input-row">
                <input
                  v-model="attempt3"
                  type="number"
                  class="app-input"
                  placeholder="cm"
                  min="0"
                />
                <span class="app-input-unit">cm</span>
              </div>
            </div>
            <div class="best-result-badge">Bestes Ergebnis: {{ bestResult }} cm</div>
          </div>
        </section>

        <footer class="footer">
          <button class="primary-button" type="button" @click="save">
            ✓ Ergebnis speichern
          </button>
          <div class="dots" aria-label="Fortschritt 7 von 9">
            <span v-for="i in 9" :key="i" class="dot" :class="{ active: i === 7 }"></span>
          </div>
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
const attempt3 = ref('')

const bestResult = computed(() => {
  const vals = [attempt1.value, attempt2.value, attempt3.value]
    .map(v => Number(String(v).replace(/\D/g, '')))
    .filter(n => !isNaN(n) && n > 0)
  return vals.length ? Math.max(...vals) : '–'
})

function goToTests() {
  router.push('/screen/21')
}

function goToSports() {
  router.push('/screen/19')
}

function playVideo() {}

function save() {
  router.push('/screen/21')
}
</script>

<style scoped>
.app-root {
  background: radial-gradient(circle at top, rgba(255, 215, 0, 0.14), transparent 60%), radial-gradient(circle at bottom right, rgba(255, 215, 0, 0.06), transparent 55%), var(--background);
}
.screen { padding: 24px 20px 20px 20px; }
.header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
.content { flex: 1; display: flex; flex-direction: column; gap: 20px; }
.footer { display: flex; flex-direction: column; gap: 12px; margin-top: 16px; }

.back-button { background: transparent; border: none; padding: 4px 0; color: var(--foreground); font-size: 14px; font-weight: 500; cursor: pointer; }
.header-logo { padding: 4px 14px; cursor: pointer; }
.logo-mark { display: inline-flex; align-items: center; gap: 6px; border-radius: 999px; background: rgba(255, 215, 0, 0.16); }
.logo-4 { font-size: 16px; font-weight: 800; color: var(--primary); }
.logo-talents { font-size: 15px; font-weight: 700; color: var(--foreground); }

.title-block { display: flex; flex-direction: column; gap: 4px; }
.title { margin: 0; display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: 800; }
.title-emoji { font-size: 20px; }
.subtitle { margin: 0; font-size: 14px; color: var(--muted-foreground); }

.video-section { width: 100%; }
.video-placeholder { width: 100%; aspect-ratio: 16/9; border-radius: var(--radius-lg); background: #111111; border: 1px solid rgba(255, 215, 0, 0.25); display: flex; align-items: center; justify-content: center; cursor: pointer; }
.video-play-icon { width: 56px; height: 56px; border-radius: 999px; background: radial-gradient(circle at top, rgba(255, 255, 255, 0.18), transparent 60%), var(--primary); display: flex; align-items: center; justify-content: center; color: var(--primary-foreground); font-size: 26px; box-shadow: 0 0 18px rgba(255, 215, 0, 0.45); }

.instructions-card { border-radius: var(--radius-lg); background-color: var(--card); padding: 14px 14px 12px 14px; }
.instructions-title { margin: 0; font-size: 15px; font-weight: 600; }
.instructions-list { margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 4px; font-size: 14px; color: var(--muted-foreground); }

.results-card { border-radius: var(--radius-lg); background-color: var(--card); padding: 14px; display: flex; flex-direction: column; gap: 12px; }
.attempt-row { display: flex; flex-direction: column; gap: 6px; }
.attempt-input-row { display: flex; align-items: center; gap: 8px; }
.attempt-input-row .app-input { flex: 1; min-width: 0; }
.best-result-badge { align-self: flex-start; margin-top: 4px; padding: 6px 10px; border-radius: 999px; background: radial-gradient(circle at top, rgba(255, 215, 0, 0.18), transparent 60%), rgba(255, 215, 0, 0.16); color: var(--primary); font-size: 13px; font-weight: 600; }

.primary-button { width: 100%; border: none; border-radius: var(--radius-lg); padding: 14px 16px; background: radial-gradient(circle at top, rgba(255, 255, 255, 0.16), transparent 55%), var(--primary); color: var(--primary-foreground); font-size: 16px; font-weight: 700; text-align: center; box-shadow: 0 0 18px rgba(255, 215, 0, 0.45); cursor: pointer; }
.dots { display: flex; justify-content: center; gap: 6px; }
.dot { width: 6px; height: 6px; border-radius: 999px; background-color: #262626; }
.dot.active { width: 8px; height: 8px; background-color: var(--primary); }
</style>
