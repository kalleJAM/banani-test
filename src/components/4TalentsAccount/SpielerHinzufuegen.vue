<template>
  <div class="screen-wrapper">
    <div class="mobile-root">
      <header class="header">
        <h1 class="header-title">Spieler hinzufügen</h1>
      </header>

      <div class="content">
        <p class="question-text">
          Hat dein Kind bereits eine Testung bei 4talents absolviert?
        </p>

        <div class="cards-container">
          <button
            type="button"
            class="selection-card card-1"
            @click="onJa"
          >
            <div class="icon-circle">
              <iconify-icon icon="lucide:check" class="card-icon" aria-hidden="true" />
            </div>
            <span class="card-title">Ja, bereits getestet</span>
          </button>

          <button
            type="button"
            class="selection-card card-2"
            @click="onNein"
          >
            <div class="icon-circle">
              <iconify-icon icon="lucide:plus" class="card-icon" aria-hidden="true" />
            </div>
            <span class="card-title">Nein, noch nicht getestet</span>
          </button>
        </div>

        <button type="button" class="back-link" @click="goBack">
          Zurück
        </button>
      </div>

      <div class="home-indicator" aria-hidden="true"></div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/screen/39')
}

const onJa = () => {
 
  router.push('/screen/41')
}

const onNein = () => {
 
  router.push('/screen/42')
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
  justify-content: center;
  border-bottom: 1px solid var(--border);
  position: relative;
  min-height: 56px;
}

.header-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: var(--foreground);
}

.content {
  flex: 1;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}

.question-text {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: var(--foreground);
  margin: 0 0 8px;
  line-height: 1.5;
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.selection-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  gap: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  text-align: center;
  font-family: inherit;
}

.selection-card:hover {
  border-color: var(--primary);
}

.selection-card:active {
  transform: scale(0.98);
  border-color: var(--primary);
  background-color: var(--muted);
}

.icon-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon {
  font-size: 32px;
}

.card-1 .icon-circle {
  background-color: #dcfce7;
  color: var(--success, #22c55e);
}

.card-2 .icon-circle {
  background-color: #dbeafe;
  color: var(--primary);
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--foreground);
}

.back-link {
  margin-top: auto;
  color: var(--muted-foreground);
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 500;
  padding: 12px;
  cursor: pointer;
  font-family: inherit;
}

.back-link:hover {
  color: var(--foreground);
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
