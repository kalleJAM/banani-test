<template>
  <div class="screen-wrapper">
    <div class="mobile-root">
      <header class="header">
        <button type="button" class="back-button" @click="goBack" aria-label="Zurück">
          <iconify-icon icon="lucide:chevron-left" class="back-icon" aria-hidden="true" />
        </button>
        <h1 class="header-title">Spieler gefunden</h1>
      </header>

      <div class="content">
        <div class="result-card">
          <div class="avatar-placeholder">LS</div>
          <div class="player-name">Leo Schmidt</div>
          <div class="player-details">Geboren: 14.03.2008</div>
          <div class="badge">
            <iconify-icon icon="lucide:check-circle" class="badge-icon" aria-hidden="true" />
            In Datenbank vorhanden
          </div>
        </div>

        <div class="action-area">
          <button type="button" class="btn-primary" @click="onHinzufuegen">
            Diesen Spieler hinzufügen
          </button>
          <button type="button" class="link-secondary" @click="onErneutSuchen">
            Das ist nicht mein Kind – erneut suchen
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

const onHinzufuegen = () => {
  router.push('/screen/38')
}

const onErneutSuchen = () => {
  router.push('/screen/41')
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
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.result-card {
  width: 100%;
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  background-color: var(--muted);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
}

.player-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--foreground);
  margin-bottom: 4px;
}

.player-details {
  font-size: 14px;
  color: var(--muted-foreground);
  margin-bottom: 24px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: var(--success);
  color: var(--success-foreground, #fff);
  padding: 6px 12px;
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
}

.badge-icon {
  font-size: 16px;
}

.action-area {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
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

.link-secondary {
  font-size: 14px;
  color: var(--muted-foreground);
  background: none;
  border: none;
  font-weight: 500;
  padding: 8px;
  cursor: pointer;
  font-family: inherit;
}

.link-secondary:hover {
  color: var(--foreground);
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
