<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Wohnzimmer-Test – Körpermaße messen">
        <header class="header">
          <button class="back-button" type="button" @click="goToTests">
            <span class="back-arrow">← Wohnzimmer-Test</span>
          </button>
          <div class="logo-mark header-logo" @click="goToSports">
            <span class="logo-4">4</span><span class="logo-talents">talents</span>
          </div>
        </header>

        <section class="content">
          <div class="title-block">
            <h1 class="title">
              <span class="title-emoji">📏</span>
              <span>Körpermaße messen</span>
            </h1>
            <p class="subtitle">Wohnzimmer-Test für Max · Test 1 von 5</p>
          </div>

          <div class="progress-section">
            <div class="progress-header">
              <span class="progress-label">Fortschritt im Wohnzimmer-Test</span>
              <span class="progress-percentage">1 von 5 abgeschlossen</span>
            </div>
            <div class="progress-bar-wrapper">
              <div class="progress-bar-track">
                <div class="progress-bar-fill" :style="{ width: progressPercent + '%' }"></div>
              </div>
            </div>
          </div>

          <div class="video-card" @click="playVideo">
            <div class="video-placeholder">
              <div class="video-play-circle">▶</div>
            </div>
            <div class="video-texts">
              <p class="video-title">Kurzes Erklär-Video</p>
              <p class="video-subtitle">
                So misst Du Größe und Gewicht zu Hause richtig.
              </p>
            </div>
          </div>

          <div class="instructions-card">
            <p class="instructions-title">So geht ihr vor:</p>
            <ol class="instructions-list">
              <li>Stellt euch barfuß an eine Wand.</li>
              <li>Miss die Körpergröße mit einem Maßband in Zentimetern.</li>
              <li>Stell Dein Kind auf eine Waage und lies das Gewicht ab.</li>
              <li>
                Trage Größe und Gewicht unten ein und überprüfe alles in Ruhe.
              </li>
            </ol>
          </div>

          <div class="inputs-section" aria-label="Eingabe Körpermaße">
            <div class="input-card app-input-wrap">
              <div class="app-input-label-row">
                <span class="app-input-label">Körpergröße</span>
                <span class="app-input-unit">cm</span>
              </div>
              <input
                v-model.number="height"
                type="number"
                class="app-input"
                placeholder="z.B. 164"
                min="80"
                max="220"
              />
            </div>

            <div class="input-card app-input-wrap">
              <div class="app-input-label-row">
                <span class="app-input-label">Körpergewicht</span>
                <span class="app-input-unit">kg</span>
              </div>
              <input
                v-model.number="weight"
                type="number"
                class="app-input"
                placeholder="z.B. 42"
                min="15"
                max="120"
              />
            </div>

            <div class="hint-text">
              Du kannst die Werte später im Profil noch einmal anpassen.
            </div>
          </div>
        </section>

        <footer class="footer">
          <button class="primary-button" type="button" @click="save">
            ✓ Körpermaße speichern
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

const height = ref('')
const weight = ref('')

const progressPercent = computed(() => 20)

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
  background:
    radial-gradient(circle at top, rgba(255, 215, 0, 0.18), transparent 60%),
    radial-gradient(circle at bottom right, rgba(255, 215, 0, 0.05), transparent 55%),
    var(--background);
}
.screen { padding: 24px 20px 20px 20px; }
.header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
.content { flex: 1; display: flex; flex-direction: column; gap: 18px; }
.footer { display: flex; flex-direction: column; gap: 12px; margin-top: 16px; }

.back-button { background: transparent; border: none; padding: 4px 0; color: var(--foreground); font-size: 14px; font-weight: 500; cursor: pointer; }
.back-arrow { white-space: nowrap; }
.header-logo { padding: 4px 14px; cursor: pointer; }
.logo-mark { display: inline-flex; align-items: center; gap: 6px; border-radius: 999px; background: rgba(255, 215, 0, 0.16); }
.logo-4 { font-size: 16px; font-weight: 800; color: var(--primary); }
.logo-talents { font-size: 15px; font-weight: 700; color: var(--foreground); }

.title-block { display: flex; flex-direction: column; gap: 4px; }
.title { margin: 0; display: flex; align-items: center; gap: 8px; font-size: 20px; font-weight: 800; }
.title-emoji { font-size: 20px; }
.subtitle { margin: 0; font-size: 14px; color: var(--muted-foreground); }

.progress-section { display: flex; flex-direction: column; gap: 8px; }
.progress-header { display: flex; justify-content: space-between; align-items: center; }
.progress-label { font-size: 13px; color: var(--muted-foreground); }
.progress-percentage { font-size: 13px; color: var(--primary); }
.progress-bar-wrapper { width: 100%; }
.progress-bar-track { width: 100%; height: 8px; border-radius: 999px; background-color: #181818; overflow: hidden; }
.progress-bar-fill { height: 100%; border-radius: 999px; background: linear-gradient(90deg, rgba(255, 215, 0, 0.3), var(--primary)); }

.video-card { display: flex; flex-direction: column; gap: 10px; background-color: var(--card); border-radius: var(--radius-lg); padding: 12px; cursor: pointer; }
.video-placeholder { width: 100%; border-radius: var(--radius-md); background-color: #111111; aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center; }
.video-play-circle { width: 52px; height: 52px; border-radius: 999px; background-color: rgba(255, 215, 0, 0.16); border: 1px solid var(--primary); display: flex; align-items: center; justify-content: center; font-size: 22px; color: var(--primary); }
.video-title { margin: 0; font-size: 15px; font-weight: 600; }
.video-subtitle { margin: 0; font-size: 13px; color: var(--muted-foreground); }

.instructions-card { background-color: var(--card); border-radius: var(--radius-lg); padding: 12px 12px 10px 12px; }
.instructions-title { margin: 0 0 6px 0; font-size: 14px; font-weight: 600; }
.instructions-list { margin: 0; padding-left: 18px; font-size: 13px; color: var(--card-foreground); display: flex; flex-direction: column; gap: 2px; }

.inputs-section { display: flex; flex-direction: column; gap: 12px; }
.input-card { background-color: var(--card); border-radius: var(--radius-lg); padding: 12px 14px; }
.hint-text { font-size: 12px; color: var(--muted-foreground); margin-top: 4px; }

.primary-button { width: 100%; border: none; border-radius: var(--radius-lg); padding: 14px 16px; background: radial-gradient(circle at top, rgba(255, 255, 255, 0.18), transparent 55%), var(--primary); color: var(--primary-foreground); font-size: 16px; font-weight: 700; text-align: center; box-shadow: 0 0 18px rgba(255, 215, 0, 0.55); cursor: pointer; }
.dots { display: flex; justify-content: center; gap: 6px; }
.dot { width: 6px; height: 6px; border-radius: 999px; background-color: #262626; }
.dot.active { width: 8px; height: 8px; background-color: var(--primary); }
</style>
