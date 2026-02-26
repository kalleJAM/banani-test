<template>
  <div class="screen-wrapper">
    <div class="mobile-root">
      <div class="content">
        <div class="icon-container">
          <iconify-icon icon="lucide:shield-alert" class="icon-shield" aria-hidden="true" />
        </div>

        <h1 class="headline">Bist du der/die Erziehungsberechtigte?</h1>

        <p class="description">
          <strong>Max Mustermann</strong> versucht, den Spieler
          <strong>Leo Schmidt</strong> zum 4talents-Konto hinzuzufügen. Bist
          du der/die Erziehungsberechtigte und möchtest den Spieler
          hinzufügen?
        </p>

        <button type="button" class="btn-primary" @click="onJa">
          Ja, Spieler hinzufügen
        </button>

        <button type="button" class="btn-destructive-outline" @click="onNein">
          Nein, das bin ich nicht
        </button>
      </div>

      <div class="home-indicator" aria-hidden="true"></div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const onJa = () => {
  router.push('/screen/47')
}

const onNein = () => {
  router.push('/screen/46')
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
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

.icon-shield {
  font-size: 40px;
}

.headline {
  font-size: 24px;
  font-weight: 700;
  color: var(--foreground);
  margin: 0 0 16px;
  line-height: 1.3;
}

.description {
  font-size: 16px;
  color: var(--muted-foreground);
  line-height: 1.6;
  margin: 0 0 40px;
  max-width: 300px;
}

.description strong {
  color: var(--foreground);
}

.btn-primary {
  width: 100%;
  height: 52px;
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: var(--radius-lg);
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 16px;
  font-family: inherit;
  box-shadow: 0 4px 6px -1px rgba(250, 204, 21, 0.35);
}

.btn-primary:hover {
  opacity: 0.95;
}

.btn-destructive-outline {
  width: 100%;
  height: 52px;
  background-color: transparent;
  color: var(--destructive);
  border: 1px solid var(--destructive);
  border-radius: var(--radius-lg);
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: inherit;
}

.btn-destructive-outline:hover {
  background-color: rgba(239, 68, 68, 0.08);
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
