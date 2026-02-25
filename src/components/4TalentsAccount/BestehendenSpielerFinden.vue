<template>
  <div class="screen-wrapper">
    <div class="mobile-root">
      <header class="header">
        <button type="button" class="back-button" @click="goBack" aria-label="Zurück">
          <iconify-icon icon="lucide:chevron-left" class="back-icon" aria-hidden="true" />
        </button>
        <h1 class="header-title">Bestehenden Spieler finden</h1>
      </header>

      <div class="content">
        <div class="form-group">
          <label class="label">Nachname</label>
          <input
            v-model="nachname"
            type="text"
            class="input-field"
            placeholder="z.B. Schmidt"
          />
        </div>

        <div class="form-group">
          <label class="label">Vorname</label>
          <input
            v-model="vorname"
            type="text"
            class="input-field"
            placeholder="z.B. Leo"
          />
        </div>

        <div class="form-group">
          <label class="label">Geburtsdatum</label>
          <div class="input-with-icon">
            <input
              v-model="geburtsdatum"
              type="date"
              class="input-field input-date"
            />
            <iconify-icon icon="lucide:calendar" class="input-icon" aria-hidden="true" />
          </div>
        </div>

        <button type="button" class="search-btn" @click="onSuchen">
          Suchen
        </button>

        <div class="results-area">
          {{ resultsText }}
        </div>
      </div>

      <div class="info-banner">
        <p class="info-text">
          Spieler nicht gefunden? Du kannst den Spieler neu registrieren oder
          dich beim Support melden.
        </p>
        <div class="link-group">
          <button type="button" class="action-link" @click="goNeuRegistrieren">
            Neu registrieren
            <iconify-icon icon="lucide:arrow-right" class="link-icon" aria-hidden="true" />
          </button>
          <button type="button" class="action-link action-link-muted" @click="onSupport">
            Support kontaktieren
          </button>
        </div>
      </div>

      <div class="home-indicator" aria-hidden="true"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nachname = ref('')
const vorname = ref('')
const geburtsdatum = ref('')
const resultsText = ref('Ergebnisse werden hier angezeigt')

const goBack = () => {
  router.push('/screen/40')
}

const onSuchen = () => {
  if (vorname.value.trim().toLowerCase() === 'leo') {
    router.push('/screen/43')
  } else {
    router.push('/screen/44')
  }
}

const goNeuRegistrieren = () => {
  router.push('/screen/42')
}

const onSupport = () => {
  // Platzhalter – später Support-Link/Modal
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

.content {
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: auto;
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

.input-field {
  height: 48px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 0 16px;
  font-size: 15px;
  color: var(--foreground);
  background-color: var(--input);
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

.input-date {
  appearance: none;
  -webkit-appearance: none;
  padding-right: 40px;
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

.search-btn {
  height: 50px;
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: var(--radius-md);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
}

.search-btn:hover {
  opacity: 0.95;
}

.results-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--muted-foreground);
  font-size: 14px;
  border-top: 1px dashed var(--border);
  margin-top: 16px;
  padding-top: 32px;
}

.info-banner {
  background-color: var(--muted);
  padding: 24px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-text {
  font-size: 14px;
  line-height: 1.5;
  color: var(--muted-foreground);
  margin: 0;
}

.link-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.action-link {
  font-size: 14px;
  font-weight: 600;
  color: var(--primary);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: inherit;
  text-align: left;
}

.action-link-muted {
  color: var(--muted-foreground);
}

.link-icon {
  font-size: 16px;
}

.home-indicator {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 134px;
  height: 5px;
  background-color: var(--foreground);
  border-radius: 100px;
  opacity: 0.2;
  z-index: 10;
}

@media (min-width: 481px) {
  .mobile-root {
    border-radius: 24px;
    overflow: hidden;
  }
}
</style>
