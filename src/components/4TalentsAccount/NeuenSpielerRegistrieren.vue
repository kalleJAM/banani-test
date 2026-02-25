<template>
  <div class="screen-wrapper">
    <div class="mobile-root">
      <header class="header">
        <button type="button" class="back-button" @click="goBack" aria-label="Zurück">
          <iconify-icon icon="lucide:chevron-left" class="back-icon" aria-hidden="true" />
        </button>
        <h1 class="header-title">Neuen Spieler registrieren</h1>
      </header>

      <div class="scroll-content">
        <div class="form-group">
          <label class="label">Vorname</label>
          <input
            v-model="vorname"
            type="text"
            class="input-field"
            placeholder="z.B. Max"
          />
        </div>

        <div class="form-group">
          <label class="label">Nachname</label>
          <input
            v-model="nachname"
            type="text"
            class="input-field"
            placeholder="z.B. Mustermann"
          />
        </div>

        <div class="form-group">
          <label class="label">Geburtsdatum</label>
          <div class="input-with-icon">
            <input
              v-model="geburtsdatum"
              type="date"
              class="input-field"
            />
            <iconify-icon icon="lucide:calendar" class="input-icon" aria-hidden="true" />
          </div>
        </div>

        <div class="form-group">
          <label class="label">Geschlecht</label>
          <div class="gender-selector">
            <button
              type="button"
              class="gender-option"
              :class="{ active: geschlecht === 'm' }"
              @click="geschlecht = 'm'"
            >
              Männlich
            </button>
            <button
              type="button"
              class="gender-option"
              :class="{ active: geschlecht === 'w' }"
              @click="geschlecht = 'w'"
            >
              Weiblich
            </button>
            <button
              type="button"
              class="gender-option"
              :class="{ active: geschlecht === 'd' }"
              @click="geschlecht = 'd'"
            >
              Don't know yet
            </button>
          </div>
        </div>

        <div class="form-group">
          <label class="label">Sportart</label>
          <select v-model="sportart" class="input-field input-select">
            <option value="Fußball">Fußball</option>
            <option value="Basketball">Basketball</option>
            <option value="Handball">Handball</option>
            <option value="Leichtathletik">Leichtathletik</option>
            <option value="Tennis">Tennis</option>
          </select>
        </div>

        <div class="form-group">
          <label class="label">
            Verein
            <span class="label-optional">(Optional)</span>
          </label>
          <input
            v-model="verein"
            type="text"
            class="input-field"
            placeholder="Verein eintragen"
          />
        </div>

        <div class="form-group">
          <label class="label">Identifizierungs-E-Mail</label>
          <input
            v-model="email"
            type="email"
            class="input-field"
            placeholder="eltern@email.com"
          />
        </div>

        <p class="helper-text">
          Diese E-Mail wird zur Verifizierung des Spielers verwendet.
        </p>

        <button type="button" class="btn-primary" @click="onSubmit">
          Registrierung absenden
        </button>
      </div>

      <div class="home-indicator" aria-hidden="true"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const vorname = ref('')
const nachname = ref('')
const geburtsdatum = ref('')
const geschlecht = ref('m')
const sportart = ref('Fußball')
const verein = ref('')
const email = ref('')

const goBack = () => {
  router.push('/screen/40')
}

const onSubmit = () => {
  router.push({
    path: '/screen/45',
    query: email.value ? { email: email.value } : {}
  })
}
</script>

<style scoped>
.screen-wrapper {
  min-height: 100vh;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  padding: 0;
}

.mobile-root {
  width: 100%;
  max-width: 390px;
  min-height: 100vh;
  background-color: var(--background);
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 1px var(--border);
}

.header {
  padding: 0 16px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border);
  position: relative;
  flex-shrink: 0;
}

.back-button {
  position: absolute;
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--foreground);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.back-icon {
  font-size: 24px;
}

.header-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--foreground);
  margin: 0;
}

.scroll-content {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label {
  font-size: 14px;
  font-weight: 500;
  color: var(--foreground);
}

.label-optional {
  color: var(--muted-foreground);
  font-weight: 400;
}

.input-field {
  height: 48px;
  background-color: var(--input);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 0 16px;
  font-size: 15px;
  color: var(--foreground);
  width: 100%;
  outline: none;
  transition: border-color 0.2s;
  font-family: inherit;
}

.input-field:focus {
  border-color: var(--primary);
}

.input-with-icon {
  position: relative;
}

.input-with-icon .input-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--muted-foreground);
  font-size: 20px;
}

.input-select {
  appearance: none;
  -webkit-appearance: none;
  padding-right: 40px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
}

.gender-selector {
  display: flex;
  background-color: var(--input);
  border-radius: var(--radius-md);
  padding: 4px;
  border: 1px solid var(--border);
}

.gender-option {
  flex: 1;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  color: var(--muted-foreground);
  cursor: pointer;
  background: none;
  border: none;
  font-family: inherit;
}

.gender-option.active {
  background-color: var(--background);
  color: var(--foreground);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-weight: 600;
}

.helper-text {
  font-size: 13px;
  color: var(--muted-foreground);
  line-height: 1.4;
  margin: -12px 0 0;
}

.btn-primary {
  width: 100%;
  height: 52px;
  background-color: var(--success, var(--primary));
  color: var(--primary-foreground);
  border: none;
  border-radius: var(--radius-lg);
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.2);
  margin-top: 12px;
  font-family: inherit;
}

.btn-primary:hover {
  opacity: 0.95;
}

.home-indicator {
  width: 134px;
  height: 5px;
  background-color: var(--foreground);
  border-radius: 100px;
  opacity: 0.2;
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

@media (min-width: 481px) {
  .mobile-root {
    border-radius: 24px;
    overflow: hidden;
  }
}
</style>
