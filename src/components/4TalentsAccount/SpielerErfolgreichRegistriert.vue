<template>
  <div class="screen-wrapper">
    <div class="mobile-root">
      <div class="content">
        <!-- Schritt 1: Spieler erfolgreich registriert -->
        <template v-if="step === 1">
          <div class="icon-container icon-container--success">
            <iconify-icon icon="lucide:check-circle-2" class="icon-check" aria-hidden="true" />
          </div>
          <h1 class="title">Spieler erfolgreich registriert!</h1>
          <p class="description">
            Eine neue Spieler-ID wurde in der 4talents-Datenbank erzeugt.
          </p>
          <div class="player-card">
            <div class="detail-row">
              <span class="detail-label">Name</span>
              <span class="detail-value">Leo Schmidt</span>
            </div>
            <div class="divider"></div>
            <div class="detail-row">
              <span class="detail-label">Geburtsdatum</span>
              <span class="detail-value">11.02.2010</span>
            </div>
            <div class="divider"></div>
            <div class="detail-row">
              <span class="detail-label">Spieler-ID</span>
              <div class="id-badge">#4T-20260211-0042</div>
            </div>
          </div>
          <button type="button" class="action-button" @click="step = 2">
            Spieler zum Konto hinzufügen
          </button>
        </template>

        <!-- Schritt 2: Spieler wurde deinem Konto hinzugefügt -->
        <template v-else>
          <div class="icon-container">
            <iconify-icon icon="lucide:check" class="icon-check icon-check--thick" aria-hidden="true" />
          </div>
          <h1 class="title">Spieler wurde deinem Konto hinzugefügt!</h1>
          <div class="player-card">
            <div class="detail-row">
              <span class="detail-label">Name</span>
              <span class="detail-value">Leo Schmidt</span>
            </div>
            <div class="divider"></div>
            <div class="detail-row">
              <span class="detail-label">Geburtsdatum</span>
              <span class="detail-value">11.02.2010</span>
            </div>
            <div class="divider"></div>
            <div class="detail-row">
              <span class="detail-label">Spieler-ID</span>
              <div class="id-badge">#4T-20260211-0042</div>
            </div>
          </div>
          <p class="question-text">
            Möchtest du einen weiteren Spieler hinzufügen?
          </p>
          <div class="button-group">
            <button type="button" class="btn-primary" @click="onWeiterenHinzufuegen">
              Weiteren Spieler hinzufügen
            </button>
            <button type="button" class="btn-secondary" @click="goDashboard">
              Fertig – zum Dashboard
            </button>
          </div>
        </template>
      </div>

      <div class="home-indicator" aria-hidden="true"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const step = ref(1)

const onWeiterenHinzufuegen = () => {
  router.push('/screen/40')
}

const goDashboard = () => {
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

.content {
  flex: 1;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.icon-container {
  width: 80px;
  height: 80px;
  background-color: #fef9c3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: var(--primary);
}

.icon-container--success {
  background-color: #fef9c3;
}

.icon-check {
  font-size: 48px;
}

.icon-check--thick {
  font-size: 40px;
}

.title {
  font-size: 24px;
  font-weight: 700;
  color: var(--foreground);
  margin: 0 0 24px;
  line-height: 1.3;
}

.description {
  font-size: 16px;
  color: var(--muted-foreground);
  margin: 0 0 32px;
  line-height: 1.5;
}

.player-card {
  width: 100%;
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.detail-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.detail-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--muted-foreground);
  font-weight: 600;
}

.detail-value {
  font-size: 18px;
  font-weight: 600;
  color: var(--foreground);
}

.id-badge {
  background-color: var(--muted);
  color: var(--foreground);
  padding: 6px 14px;
  border-radius: 99px;
  font-family: monospace;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-top: 8px;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: var(--border);
}

.question-text {
  font-size: 16px;
  color: var(--foreground);
  margin-bottom: 16px;
  font-weight: 500;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.action-button,
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

.action-button:hover,
.btn-primary:hover {
  opacity: 0.95;
}

.action-button {
  height: 56px;
}

.btn-secondary {
  width: 100%;
  height: 52px;
  background-color: transparent;
  color: var(--muted-foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  font-size: 16px;
  font-weight: 500;
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
