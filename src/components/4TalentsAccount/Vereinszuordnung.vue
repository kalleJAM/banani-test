<template>
  <div class="screen-wrapper">
    <div class="mobile-root">
      <header class="header">
        <button type="button" class="back-button" @click="goBack" aria-label="Zurück">
          <iconify-icon icon="lucide:arrow-left" class="back-icon" aria-hidden="true" />
        </button>
        <h1 class="page-title">Vereinszuordnung</h1>
      </header>

      <div class="content">
        <p class="description">
          Darf der Spieler durch einen Verein selbständig zu Tests hinzugefügt
          werden?
        </p>

        <button
          type="button"
          class="selection-card"
          :class="{ active: option === 'nein' }"
          @click="option = 'nein'"
        >
          <div class="card-header">
            <span class="card-title">Nein, nur ich als Erziehungsberechtigte/r</span>
            <div class="selection-indicator"></div>
          </div>
          <span class="card-info">Der Spieler kann nur von dir verwaltet werden.</span>
        </button>

        <button
          type="button"
          class="selection-card"
          :class="{ active: option === 'ja' }"
          @click="option = 'ja'"
        >
          <div class="card-header">
            <span class="card-title">Ja, Verein darf Spieler zu Tests hinzufügen</span>
            <div class="selection-indicator"></div>
          </div>
          <div class="warning-text">
            <iconify-icon icon="lucide:info" class="warning-icon" aria-hidden="true" />
            <span>Achtung: Der Verein kann die Daten des Spielers einsehen.</span>
          </div>
          <div v-if="option === 'ja'" class="search-container">
            <label class="input-label">Verein auswählen</label>
            <div class="input-wrapper">
              <iconify-icon icon="lucide:search" class="search-icon" aria-hidden="true" />
              <input
                v-model="vereinSearch"
                type="text"
                class="search-input"
                placeholder="Vereinsname suchen..."
              />
            </div>
          </div>
        </button>

        <div class="save-button-container">
          <button type="button" class="btn-primary" @click="onSave">
            Speichern
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
const option = ref('ja')
const vereinSearch = ref('FC Bayern Münch')

const goBack = () => {
  router.push('/screen/38')
}

const onSave = () => {
  router.push('/screen/38')
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
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid var(--border);
}

.back-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--foreground);
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-icon {
  font-size: 24px;
}

.page-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--foreground);
  margin: 0;
}

.content {
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.description {
  font-size: 15px;
  line-height: 1.5;
  color: var(--muted-foreground);
  margin: 0 0 32px;
}

.selection-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid var(--border);
  border-radius: var(--radius-lg);
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: var(--card);
  position: relative;
  text-align: left;
  font-family: inherit;
  width: 100%;
}

.selection-card:hover {
  border-color: var(--primary);
}

.selection-card.active {
  border-color: var(--primary);
  background-color: #fef9c3;
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--foreground);
}

.selection-indicator {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid var(--border);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.selection-card.active .selection-indicator {
  border-color: var(--primary);
  background-color: var(--primary);
}

.selection-card.active .selection-indicator::after {
  content: "";
  width: 8px;
  height: 8px;
  background-color: var(--primary-foreground);
  border-radius: 50%;
}

.card-info {
  font-size: 13px;
  color: var(--muted-foreground);
  line-height: 1.4;
}

.warning-text {
  font-size: 13px;
  color: var(--warning-foreground, #92400e);
  background-color: #fffbeb;
  padding: 12px;
  border-radius: 8px;
  margin-top: 12px;
  display: flex;
  gap: 8px;
  align-items: flex-start;
}

.warning-icon {
  font-size: 16px;
  margin-top: 2px;
  flex-shrink: 0;
}

.search-container {
  margin-top: 8px;
  margin-left: 2px;
  padding-left: 16px;
  border-left: 2px solid var(--border);
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.input-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--foreground);
  margin-bottom: 8px;
  margin-top: 16px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  height: 48px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 0 16px 0 44px;
  font-size: 15px;
  color: var(--foreground);
  outline: none;
  background-color: var(--input);
  font-family: inherit;
}

.search-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(250, 204, 21, 0.2);
}

.search-icon {
  position: absolute;
  left: 14px;
  color: var(--muted-foreground);
  pointer-events: none;
  font-size: 18px;
}

.save-button-container {
  margin-top: auto;
  padding-top: 24px;
}

.btn-primary {
  width: 100%;
  height: 52px;
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: var(--radius-md);
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: inherit;
  box-shadow: 0 4px 6px -1px rgba(250, 204, 21, 0.35);
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
