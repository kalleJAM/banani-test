<template>
  <div class="screen-wrapper">
    <div class="mobile-root">
      <header class="header">
        <button type="button" class="back-button" @click="goBack" aria-label="Zurück">
          <iconify-icon icon="lucide:chevron-left" class="back-icon" aria-hidden="true" />
        </button>
        <h1 class="header-title">Keinen Spieler gefunden</h1>
      </header>

      <div class="content">
        <div class="illustration-container">
          <iconify-icon icon="lucide:search-x" class="illustration-icon" aria-hidden="true" />
        </div>

        <h2 class="title">Kein Treffer</h2>

        <p class="description">
          Wir konnten keinen Spieler mit diesen Daten finden. Bitte prüfe
          deine Eingabe oder registriere den Spieler neu.
        </p>

        <div class="action-area">
          <button type="button" class="btn-primary" @click="goNeuRegistrieren">
            Spieler neu registrieren
          </button>
          <button type="button" class="btn-secondary" @click="onSupport">
            Support kontaktieren
          </button>
        </div>
      </div>

      <div class="home-indicator" aria-hidden="true"></div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/screen/41')
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

.content {
  flex: 1;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 24px;
}

.illustration-container {
  width: 120px;
  height: 120px;
  background-color: var(--muted);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  color: var(--muted-foreground);
}

.illustration-icon {
  font-size: 48px;
}

.title {
  font-size: 24px;
  font-weight: 700;
  color: var(--foreground);
  margin: 0;
}

.description {
  font-size: 16px;
  color: var(--muted-foreground);
  line-height: 1.5;
  max-width: 280px;
  margin: 0;
}

.action-area {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
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
  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
  font-family: inherit;
}

.btn-primary:hover {
  opacity: 0.95;
}

.btn-secondary {
  width: 100%;
  height: 52px;
  background-color: transparent;
  color: var(--foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: inherit;
}

.btn-secondary:hover {
  background-color: var(--muted);
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
