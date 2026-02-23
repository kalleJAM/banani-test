<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" :aria-label="`4talents Begabungsdiagnostik Schritt ${step} von 4`">
        <section class="top-bar">
          <div class="top-left" @click="goToPrev">
            <div class="icon-wrapper">
              <iconify-icon
                icon="lucide:arrow-left"
                style="font-size: 22px; color: var(--foreground)"
              ></iconify-icon>
            </div>
          </div>
          <div class="top-right-logo" @click="goToSports">
            <div class="logo-mark-small">
              <span class="logo-4">4</span><span class="logo-talents">talents</span>
            </div>
          </div>
        </section>

        <section class="content">
          <header class="section-header">
            <p class="section-label">Begabungsdiagnostik</p>
            <div class="progress-row">
              <div class="progress-bar" :aria-label="`Schritt ${step} von 4`">
                <div class="progress-bar-fill" :class="progressBarClass" :style="{ width: progressBarWidth }"></div>
              </div>
              <span class="progress-text">Schritt {{ step }}/4</span>
            </div>
          </header>

          <section class="question-section" :class="{ 'question-section-center': step === 1 }">
            <template v-if="step === 1">
              <h1 class="question-heading">
                Wie viele Kinder sollen getestet werden?
              </h1>
              <p class="question-subtext">
                Du kannst die Anzahl später noch anpassen.
              </p>
              <p class="question-subtext">
                Für jedes Kind kannst du später einen Avatar anlegen – mit oder
                ohne Foto.
              </p>
              <div class="stepper-wrapper">
                <div class="stepper">
                  <div class="stepper-button stepper-minus" @click="decreaseCount">
                    <span class="stepper-symbol">−</span>
                  </div>
                  <div class="stepper-value">
                    <span class="stepper-number">{{ childCount }}</span>
                    <span class="stepper-label">{{ childCount === 1 ? 'Kind' : 'Kinder' }}</span>
                  </div>
                  <div class="stepper-button stepper-plus" @click="increaseCount">
                    <span class="stepper-symbol">+</span>
                  </div>
                </div>
              </div>
            </template>

            <template v-else-if="step === 2">
              <h1 class="question-heading">Wann ist Dein Kind geboren?</h1>
              <p class="question-subtext">
                Gib das Geburtsdatum ein, damit wir das Alter korrekt berechnen
                können.
              </p>
              <div class="date-input-wrapper">
                <input
                  v-model="birthDate"
                  type="text"
                  class="input-plain"
                  placeholder="TT.MM.JJJJ"
                  maxlength="10"
                  @input="syncBirthDateToChild"
                />
              </div>
              <div class="age-badge-row" v-if="calculatedAge">
                <div class="age-badge">
                  <span class="age-text">→ Alter: {{ calculatedAge }} ✓</span>
                </div>
              </div>
              <div class="gender-section">
                <div class="gender-label">Geschlecht deines Kindes</div>
                <p class="gender-subtext">
                  Wähle aus, was für dein Kind im Moment am besten passt. Ihr
                  könnt das später jederzeit ändern.
                </p>
                <div class="gender-options">
                  <div
                    class="gender-chip"
                    :class="{ 'gender-chip-active': selectedGender === 'boy' }"
                    @click="selectGender('boy')"
                  >
                    Junge
                  </div>
                  <div
                    class="gender-chip"
                    :class="{ 'gender-chip-active': selectedGender === 'girl' }"
                    @click="selectGender('girl')"
                  >
                    Mädchen
                  </div>
                  <div
                    class="gender-chip"
                    :class="{ 'gender-chip-active': selectedGender === 'unknown' }"
                    @click="selectGender('unknown')"
                  >
                    Don't know yet
                  </div>
                </div>
              </div>
              <div class="children-tabs">
                <div
                  v-for="(child, index) in children"
                  :key="index"
                  class="child-tab"
                  :class="{ 'child-tab-active': activeChildIndex === index }"
                  @click="setActiveChild(index)"
                >
                  <span class="child-tab-label">Kind {{ index + 1 }}</span>
                </div>
                <div class="child-tab add-child" @click="addChild" v-if="children.length < maxChildren">
                  <span class="child-tab-label">+</span>
                </div>
              </div>
            </template>

            <template v-else-if="step === 3">
              <h1 class="question-heading">
                Wie groß und schwer ist Dein Kind?
              </h1>
              <p class="question-subtext">
                Gib Größe und Gewicht an, damit wir die körperlichen
                Voraussetzungen besser einschätzen können.
              </p>
              <div class="measurement-group">
                <div class="measurement-block">
                  <div class="measurement-label-row">
                    <span class="measurement-emoji">📏</span>
                    <span class="measurement-label">Körpergröße</span>
                  </div>
                  <div class="measurement-input-row">
                    <input
                      v-model="height"
                      type="number"
                      class="input-plain"
                      placeholder="Größe in cm"
                      min="100"
                      max="220"
                      @input="syncHeightToChild"
                    />
                    <span class="measurement-unit">cm</span>
                  </div>
                  <div class="slider-track" @click="handleSliderClick($event, 'height')">
                    <div class="slider-range" :style="{ width: heightPercent + '%' }"></div>
                    <div class="slider-thumb" :style="{ left: heightPercent + '%' }"></div>
                  </div>
                  <div class="slider-scale-row">
                    <span class="slider-scale-label">100</span>
                    <span class="slider-scale-label">220</span>
                  </div>
                </div>
                <div class="measurement-block">
                  <div class="measurement-label-row">
                    <span class="measurement-emoji">⚖️</span>
                    <span class="measurement-label">Körpergewicht</span>
                  </div>
                  <div class="measurement-input-row">
                    <input
                      v-model="weight"
                      type="number"
                      class="input-plain"
                      placeholder="Gewicht in kg"
                      min="15"
                      max="120"
                      @input="syncWeightToChild"
                    />
                    <span class="measurement-unit">kg</span>
                  </div>
                  <div class="slider-track" @click="handleSliderClick($event, 'weight')">
                    <div class="slider-range" :style="{ width: weightPercent + '%' }"></div>
                    <div class="slider-thumb slider-thumb-weight" :style="{ left: weightPercent + '%' }"></div>
                  </div>
                  <div class="slider-scale-row">
                    <span class="slider-scale-label">15</span>
                    <span class="slider-scale-label">120</span>
                  </div>
                </div>
              </div>
              <div class="children-tabs">
                <div
                  v-for="(child, index) in children"
                  :key="index"
                  class="child-tab"
                  :class="{ 'child-tab-active': activeChildIndex === index }"
                  @click="setActiveChild(index)"
                >
                  <span class="child-tab-label">Kind {{ index + 1 }}</span>
                </div>
                <div class="child-tab add-child" @click="addChild" v-if="children.length < maxChildren">
                  <span class="child-tab-label">+</span>
                </div>
              </div>
            </template>

            <template v-else-if="step === 4">
              <h1 class="question-heading">
                Wie groß seid ihr leiblichen Eltern?
              </h1>
              <p class="question-subtext">
                Diese Angabe hilft uns, die mögliche Endgröße Deines Kindes
                besser einzuschätzen.
              </p>
              <div class="parents-measurement-group">
                <div class="parent-card">
                  <div class="parent-header-row">
                    <span class="parent-emoji">👩</span>
                    <span class="parent-label">Mama</span>
                  </div>
                  <input
                    v-model="motherHeight"
                    type="number"
                    class="input-plain"
                    placeholder="Größe in cm"
                    min="100"
                    max="220"
                  />
                </div>
                <div class="parent-card">
                  <div class="parent-header-row">
                    <span class="parent-emoji">👨</span>
                    <span class="parent-label">Papa</span>
                  </div>
                  <input
                    v-model="fatherHeight"
                    type="number"
                    class="input-plain"
                    placeholder="Größe in cm"
                    min="100"
                    max="220"
                  />
                </div>
              </div>
              <div class="info-link-row">
                <span class="info-icon">ℹ️</span>
                <span class="info-link" @click="showInfo">Warum fragen wir das?</span>
              </div>
            </template>
          </section>
        </section>

        <section class="bottom-section">
          <div class="primary-cta-wrapper" :class="{ climax: step === 4 }">
            <div
              class="primary-cta"
              :class="{ 'primary-cta-climax': step === 4 }"
              @click="step === 4 ? handleCalculate() : handleContinue()"
            >
              <span v-if="step === 4" class="primary-cta-icon">🔮</span>
              <span class="primary-cta-label">
                {{ step === 4 ? 'Prognose berechnen' : 'Weiter' }}{{ step < 4 ? ' →' : '' }}
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const step = computed(() => {
  const match = route.path.match(/\/screen\/(\d+)/)
  const id = match ? parseInt(match[1], 10) : 7
  const s = id - 6
  return Math.max(1, Math.min(4, s))
})

const childCount = ref(1)
const children = ref([{ birthDate: '', gender: 'boy', height: '', weight: '' }])
const maxChildren = ref(10)
const activeChildIndex = ref(0)
const birthDate = ref('')
const selectedGender = ref('boy')
const height = ref('')
const weight = ref('')
const motherHeight = ref('')
const fatherHeight = ref('')

watch(step, (newStep) => {
  if ((newStep === 2 || newStep === 3) && children.value.length !== childCount.value) {
    const len = childCount.value
    if (children.value.length < len) {
      while (children.value.length < len) {
        children.value.push({ birthDate: '', gender: 'boy', height: '', weight: '' })
      }
    } else {
      children.value = children.value.slice(0, len)
    }
    if (activeChildIndex.value >= children.value.length) activeChildIndex.value = 0
  }
  if (newStep === 2 || newStep === 3) syncFromChild(activeChildIndex.value)
}, { immediate: true })

function syncFromChild(index) {
  const c = children.value[index]
  if (!c) return
  birthDate.value = c.birthDate || ''
  selectedGender.value = c.gender || 'boy'
  height.value = c.height || ''
  weight.value = c.weight || ''
}

const progressBarWidth = computed(() => (step.value * 25) + '%')
const progressBarClass = computed(() => step.value >= 2 ? `step-${step.value}` : '')

const calculatedAge = computed(() => {
  if (!birthDate.value) return ''
  return '10 Jahre, 3 Monate'
})

const heightPercent = computed(() => {
  if (!height.value) return 0
  const h = parseInt(height.value)
  if (isNaN(h)) return 0
  return ((h - 100) / 120) * 100
})

const weightPercent = computed(() => {
  if (!weight.value) return 0
  const w = parseInt(weight.value)
  if (isNaN(w)) return 0
  return ((w - 15) / 105) * 100
})

const goToSports = () => router.push('/screen/19')

const goToPrev = () => {
  if (step.value === 1) {
    router.push('/screen/6')
  } else {
    router.push(`/screen/${step.value + 5}`)
  }
}

const decreaseCount = () => {
  if (childCount.value > 1) childCount.value--
}

const increaseCount = () => {
  if (childCount.value < 10) childCount.value++
}

const handleContinue = () => {
  if (step.value === 1) {
    const len = childCount.value
    if (children.value.length !== len) {
      children.value = Array.from({ length: len }, () => ({ birthDate: '', gender: 'boy', height: '', weight: '' }))
      activeChildIndex.value = 0
    }
    router.push('/screen/8')
  } else if (step.value === 2) {
    router.push('/screen/9')
  } else if (step.value === 3) {
    router.push('/screen/10')
  }
}

const syncBirthDateToChild = () => {
  const idx = activeChildIndex.value
  if (children.value[idx]) children.value[idx].birthDate = birthDate.value
}

const selectGender = (gender) => {
  selectedGender.value = gender
  children.value[activeChildIndex.value].gender = gender
}

const setActiveChild = (index) => {
  activeChildIndex.value = index
  syncFromChild(index)
}

const addChild = () => {
  if (children.value.length < maxChildren.value) {
    children.value.push({ birthDate: '', gender: 'boy', height: '', weight: '' })
    activeChildIndex.value = children.value.length - 1
    syncFromChild(activeChildIndex.value)
  }
}

const syncHeightToChild = () => {
  const idx = activeChildIndex.value
  if (children.value[idx]) children.value[idx].height = height.value != null ? String(height.value) : ''
}

const syncWeightToChild = () => {
  const idx = activeChildIndex.value
  if (children.value[idx]) children.value[idx].weight = weight.value != null ? String(weight.value) : ''
}

const handleSliderClick = (event, type) => {
  const rect = event.currentTarget.getBoundingClientRect()
  const percent = ((event.clientX - rect.left) / rect.width) * 100
  if (type === 'height') {
    const h = Math.round(100 + (percent / 100) * 120)
    height.value = Math.max(100, Math.min(220, h)).toString()
    children.value[activeChildIndex.value].height = height.value
  } else {
    const w = Math.round(15 + (percent / 100) * 105)
    weight.value = Math.max(15, Math.min(120, w)).toString()
    children.value[activeChildIndex.value].weight = weight.value
  }
}

const showInfo = () => {
  alert('Die Größe der Eltern hilft uns, die mögliche Endgröße Deines Kindes besser einzuschätzen. Dies ist wichtig für die Sportarten-Empfehlung.')
}

const handleCalculate = () => {
  if (motherHeight.value && fatherHeight.value) {
    router.push('/screen/11')
  } else {
    alert('Bitte gib die Größe beider Elternteile ein.')
  }
}
</script>

<style scoped>
.progress-bar-fill.step-2 {
  width: 50%;
}

.progress-bar-fill.step-3 {
  width: 75%;
}

.progress-bar-fill.step-4 {
  width: 100%;
}

.question-section-center {
  align-items: center;
  text-align: center;
  gap: 32px;
}

.stepper-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stepper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background-color: var(--card);
  border-radius: var(--radius-xl);
  padding: 12px 16px;
  border: 1px solid var(--border);
  min-width: 220px;
  min-height: 72px;
}

.stepper-button {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-lg);
  background-color: var(--input);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.stepper-button:hover {
  background-color: var(--border);
}

.stepper-button:active {
  transform: scale(0.95);
}

.stepper-symbol {
  font-size: 32px;
  font-weight: 700;
  color: var(--foreground);
}

.stepper-value {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 72px;
}

.stepper-number {
  font-size: 32px;
  font-weight: 800;
  color: var(--foreground);
}

.stepper-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--muted-foreground);
}

.date-input-wrapper {
  margin-top: 8px;
}

.age-badge-row {
  margin-top: 8px;
}

.age-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  background-color: rgba(255, 215, 0, 0.12);
}

.age-text {
  font-size: 13px;
  font-weight: 500;
  color: var(--primary);
}

.gender-section {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.gender-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--foreground);
}

.gender-subtext {
  margin: 0;
  font-size: 12px;
  color: var(--muted-foreground);
}

.gender-options {
  display: flex;
  gap: 8px;
}

.gender-chip {
  flex: 1;
  padding: 8px 10px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background-color: var(--card);
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
}

.gender-chip:hover {
  border-color: rgba(255, 215, 0, 0.3);
}

.gender-chip-active {
  border-color: var(--primary);
  background-color: rgba(255, 215, 0, 0.14);
  color: var(--primary);
}

.children-tabs {
  margin-top: 16px;
  display: flex;
  gap: 8px;
}

.child-tab {
  flex: 1;
  padding: 10px 12px;
  border-radius: var(--radius-lg);
  background-color: var(--card);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.child-tab:hover {
  border-color: rgba(255, 215, 0, 0.3);
}

.child-tab-active {
  border-color: var(--primary);
  box-shadow: 0 0 0 1px rgba(255, 215, 0, 0.6);
}

.child-tab-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--foreground);
  white-space: nowrap;
}

.add-child .child-tab-label {
  color: var(--primary);
}

.measurement-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.measurement-block {
  background-color: var(--card);
  border-radius: var(--radius-lg);
  padding: 14px 14px 16px 14px;
  border: 1px solid var(--border);
}

.measurement-label-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.measurement-emoji {
  font-size: 18px;
}

.measurement-label {
  font-size: 15px;
  font-weight: 600;
  color: var(--foreground);
}

.measurement-input-row {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.measurement-input-row .input-plain {
  flex: 1;
  min-width: 0;
}

.measurement-unit {
  font-size: 14px;
  color: var(--muted-foreground);
}

.slider-track {
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background-color: var(--input);
  overflow: visible;
  cursor: pointer;
}

.slider-range {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: var(--primary);
  border-radius: 999px;
}

.slider-thumb {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background-color: var(--primary);
  cursor: grab;
}

.slider-thumb:active {
  cursor: grabbing;
}

.slider-scale-row {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
}

.slider-scale-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--muted-foreground);
}

.parents-measurement-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.parent-card {
  background-color: var(--card);
  border-radius: var(--radius-lg);
  padding: 14px 14px 16px 14px;
  border: 1px solid var(--border);
}

.parent-header-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.parent-emoji {
  font-size: 18px;
}

.parent-label {
  font-size: 15px;
  font-weight: 600;
  color: var(--foreground);
}

.info-link-row {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.info-icon {
  font-size: 14px;
}

.info-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--primary);
  white-space: nowrap;
  cursor: pointer;
  transition: opacity 0.2s;
}

.info-link:hover {
  opacity: 0.8;
}

.primary-cta-climax {
  box-shadow:
    0 0 20px rgba(255, 215, 0, 0.8),
    0 18px 40px rgba(0, 0, 0, 0.8);
}

.primary-cta-climax:hover {
  box-shadow:
    0 0 24px rgba(255, 215, 0, 0.9),
    0 22px 48px rgba(0, 0, 0, 0.9);
}

.primary-cta-icon {
  font-size: 18px;
}
</style>
