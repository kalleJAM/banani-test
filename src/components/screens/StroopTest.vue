<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Stroop-Test">
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
              <span class="title-emoji">🧠</span>
              <span>Stroop-Test</span>
            </h1>
            <p class="subtitle">Test 5 von 5</p>
          </div>

          <div class="video-section small-video">
            <div class="video-card" @click="playVideo">
              <div class="video-thumbnail">
                <div class="video-play">
                  <span class="video-play-icon">▶</span>
                </div>
              </div>
              <div class="video-caption">
                Kurze Erklärung zum Stroop-Test ansehen
              </div>
            </div>
          </div>

          <div class="game-card" aria-label="Stroop-Test Spielbereich">
            <p class="game-instruction">
              In welcher <span class="highlight-word">FARBE</span> ist das Wort geschrieben?
            </p>
            <div class="stroop-word-wrapper">
              <div class="stroop-word" :style="{ color: currentWordColor }">{{ currentWordText }}</div>
            </div>

            <div class="answer-grid">
              <button
                v-for="opt in answerOptions"
                :key="opt.label"
                type="button"
                class="answer-button"
                :class="'answer-' + opt.className"
                @click="chooseAnswer(opt.color)"
              >
                <span class="answer-dot"></span>
                <span class="answer-label">{{ opt.label }}</span>
              </button>
            </div>
          </div>

          <div class="game-meta">
            <div class="timer-row">
              <span class="timer-text">{{ round > 0 ? 'Timer läuft...' : 'Bereit' }}</span>
            </div>
            <div class="round-row">
              <span class="round-text">Runde {{ round }}/{{ totalRounds }}</span>
              <div class="round-progress-track">
                <div class="round-progress-fill" :style="{ width: roundPercent + '%' }"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const WORDS = ['ROT', 'BLAU', 'GRÜN', 'GELB']
const COLORS = {
  red: 'var(--destructive)',
  blue: '#3b82f6',
  green: 'var(--success)',
  yellow: 'var(--primary)'
}
const COLOR_KEYS = ['red', 'blue', 'green', 'yellow']

const totalRounds = ref(20)
const round = ref(0)
const currentWordText = ref('GRÜN')
const currentWordColor = ref(COLORS.red)
const score = ref(0)

const answerOptions = [
  { label: 'Rot', className: 'red', color: 'red' },
  { label: 'Blau', className: 'blue', color: 'blue' },
  { label: 'Grün', className: 'green', color: 'green' },
  { label: 'Gelb', className: 'yellow', color: 'yellow' }
]

const roundPercent = computed(() => (round.value / totalRounds.value) * 100)

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function nextWord() {
  currentWordText.value = randomItem(WORDS)
  currentWordColor.value = COLORS[randomItem(COLOR_KEYS)]
}

function goToTests() {
  router.push('/screen/21')
}

function goToSports() {
  router.push('/screen/19')
}

function playVideo() {}

function colorKeyToLabel(key) {
  const map = { red: 'Rot', blue: 'Blau', green: 'Grün', yellow: 'Gelb' }
  return map[key]
}

function chooseAnswer(pickedColor) {
  const wordColorKey = Object.keys(COLORS).find(k => COLORS[k] === currentWordColor.value)
  if (wordColorKey === pickedColor) score.value++
  round.value++
  if (round.value >= totalRounds.value) {
    setTimeout(() => {
      alert(`Fertig! Du hast ${score.value} von ${totalRounds.value} richtig.`)
      router.push('/screen/21')
    }, 100)
    return
  }
  nextWord()
}

nextWord()
</script>

<style scoped>
.app-root {
  background: radial-gradient(circle at top, rgba(255, 215, 0, 0.18), transparent 60%), radial-gradient(circle at bottom right, rgba(255, 215, 0, 0.08), transparent 55%), var(--background);
}
.screen { padding: 24px 20px 20px 20px; }
.header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
.content { flex: 1; display: flex; flex-direction: column; gap: 18px; }

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

.game-card { border-radius: var(--radius-lg); background: linear-gradient(140deg, rgba(255, 215, 0, 0.16), transparent 55%), var(--card); padding: 16px 14px 18px 14px; display: flex; flex-direction: column; gap: 16px; }
.game-instruction { margin: 0; font-size: 15px; color: var(--foreground); }
.highlight-word { font-weight: 700; color: var(--primary); }
.stroop-word-wrapper { display: flex; justify-content: center; }
.stroop-word { font-size: 32px; font-weight: 900; letter-spacing: 1px; }
.answer-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
.answer-button { border-radius: var(--radius-lg); border: 1px solid rgba(255, 255, 255, 0.06); padding: 10px; display: flex; align-items: center; gap: 8px; justify-content: center; background-color: #111111; font-size: 15px; font-weight: 600; color: var(--foreground); cursor: pointer; }
.answer-dot { width: 14px; height: 14px; border-radius: 999px; }
.answer-red .answer-dot { background-color: var(--destructive); }
.answer-blue .answer-dot { background-color: #3b82f6; }
.answer-green .answer-dot { background-color: var(--success); }
.answer-yellow .answer-dot { background-color: var(--primary); }
.answer-label { white-space: nowrap; }

.game-meta { display: flex; flex-direction: column; gap: 10px; margin-top: 4px; }
.timer-row { display: inline-flex; align-items: center; gap: 8px; align-self: flex-start; padding: 6px 10px; border-radius: 999px; background-color: rgba(255, 215, 0, 0.12); }
.timer-text { font-size: 13px; color: var(--primary); font-weight: 600; }
.round-row { display: flex; flex-direction: column; gap: 6px; }
.round-text { font-size: 14px; color: var(--foreground); }
.round-progress-track { width: 100%; height: 6px; border-radius: 999px; background-color: #111111; overflow: hidden; }
.round-progress-fill { width: 60%; height: 100%; border-radius: 999px; background: linear-gradient(90deg, rgba(255, 215, 0, 0.2), var(--primary)); }
</style>
