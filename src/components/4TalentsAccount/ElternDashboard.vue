<template>
  <div class="screen-wrapper">
    <div class="mobile-root">
      <div class="content">
        <div class="header-section">
          <div class="greeting">
            <h1 class="greeting-title">Willkommen, Julia!</h1>
            <p class="greeting-sub">4talents Eltern-Portal</p>
          </div>
          <img
            src="https://storage.googleapis.com/banani-avatars/avatar%2Ffemale%2F35-50%2FEuropean%2F3"
            alt="Profil"
            class="user-avatar"
          />
        </div>

        <div class="info-box">
          <iconify-icon icon="lucide:info" class="info-icon" aria-hidden="true" />
          <p class="info-text">
            Dies ist dein Elternkonto – hier werden keine Spieler-IDs erzeugt.
            Du verwaltest hier die Profile deiner Kinder.
          </p>
        </div>

        <button type="button" class="add-athlete-btn" @click="goAddAthlete">
          <iconify-icon icon="lucide:plus-circle" class="btn-icon" aria-hidden="true" />
          Athlet/Spieler hinzufügen
        </button>

        <div class="empty-state">
          <img
            src="https://storage.googleapis.com/banani-generated-images/generated-images/5c0cada7-5a63-4fde-99b1-cadecb711f15.jpg"
            alt="Keine Athleten"
            class="empty-illustration"
          />
          <p class="empty-text">Du hast noch keine Athleten hinzugefügt.</p>
          <p class="empty-desc">
            Füge jetzt dein Kind hinzu, um Testergebnisse und Fortschritte zu sehen.
          </p>
        </div>
      </div>

      <nav class="bottom-nav">
        <button type="button" class="nav-item active" aria-current="page">
          <iconify-icon icon="lucide:home" class="nav-icon" />
          <span>Home</span>
        </button>
        <button type="button" class="nav-item" @click="goAthleten">
          <iconify-icon icon="lucide:users" class="nav-icon" />
          <span>Athleten</span>
        </button>
        <button type="button" class="nav-item" @click="goResults">
          <iconify-icon icon="lucide:trophy" class="nav-icon" />
          <span>Ergebnisse</span>
        </button>
        <button type="button" class="nav-item">
          <iconify-icon icon="lucide:user" class="nav-icon" />
          <span>Profil</span>
        </button>
      </nav>

      <div class="home-indicator" aria-hidden="true"></div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goAddAthlete = () => {
  router.push('/screen/39')
}

const goAthleten = () => {
  router.push('/screen/50')
}

const goResults = () => {
  router.push('/screen/28')
}
</script>

<style scoped>
.screen-wrapper {
  min-height: 100vh;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.mobile-root {
  width: 100%;
  max-width: 390px;
  min-height: 100vh;
  max-height: 844px;
  background-color: var(--background);
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 1px var(--border);
}

.content {
  flex: 1;
  overflow-y: auto;
  padding: 16px 24px 100px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.header-section {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.greeting-title {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 4px 0;
  letter-spacing: -0.5px;
  color: var(--foreground);
}

.greeting-sub {
  font-size: 14px;
  color: var(--muted-foreground);
  margin: 0;
}

.user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--border);
  flex-shrink: 0;
}

.info-box {
  background-color: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: var(--radius-md);
  padding: 16px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.info-icon {
  color: var(--primary);
  flex-shrink: 0;
  margin-top: 2px;
  font-size: 20px;
}

.info-text {
  font-size: 13px;
  line-height: 1.5;
  color: var(--foreground);
  margin: 0;
}

.add-athlete-btn {
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: var(--radius-lg);
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.2s;
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.25);
}

.add-athlete-btn:hover {
  opacity: 0.95;
}

.add-athlete-btn:active {
  transform: scale(0.98);
}

.btn-icon {
  font-size: 24px;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px 0;
  margin-top: 8px;
}

.empty-illustration {
  width: 100%;
  max-width: 200px;
  height: auto;
  object-fit: contain;
  margin-bottom: 24px;
  opacity: 0.9;
  border-radius: var(--radius-md);
}

.empty-text {
  font-size: 15px;
  font-weight: 500;
  color: var(--foreground);
  margin: 0 0 8px 0;
}

.empty-desc {
  font-size: 13px;
  color: var(--muted-foreground);
  max-width: 260px;
  line-height: 1.4;
  margin: 0;
}

.bottom-nav {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 84px;
  background-color: var(--background);
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 12px;
  padding-bottom: env(safe-area-inset-bottom, 24px);
  z-index: 20;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--muted-foreground);
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  width: 64px;
  background: none;
  border: none;
  font-family: inherit;
  padding: 0;
}

.nav-item:hover {
  color: var(--foreground);
}

.nav-item.active {
  color: var(--primary);
}

.nav-icon {
  font-size: 24px;
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
  z-index: 30;
}

@media (min-width: 481px) {
  .mobile-root {
    border-radius: 24px;
    overflow: hidden;
  }
}
</style>
