<template>
  <div class="screen-wrapper">
    <div class="mobile-root">
      <header class="header">
        <h1 class="greeting">Willkommen, Thomas!</h1>
        <p class="sub-greeting">Deine Athleten im Überblick</p>
      </header>

      <div class="content">
        <div class="athlete-card">
          <div class="card-header">
            <div class="athlete-info">
              <div class="sport-icon">
                <iconify-icon icon="lucide:trophy" class="sport-icon-inner" aria-hidden="true" />
              </div>
              <div class="athlete-text">
                <h3>Leo Schmidt</h3>
                <p>14 Jahre • Fußball</p>
              </div>
            </div>
            <span class="status-badge status-active">Aktiv</span>
          </div>
          <div class="card-details">
            <div class="detail-item">
              <span class="detail-label">Spieler-ID</span>
              <span class="detail-value">#4T-23-992</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Letzter Test</span>
              <span class="detail-value">12.02.2024</span>
            </div>
          </div>
          <button type="button" class="card-action" @click="onErgebnisseAnsehen">
            Ergebnisse ansehen
            <iconify-icon icon="lucide:chevron-right" class="action-icon" aria-hidden="true" />
          </button>
        </div>

        <div class="athlete-card">
          <div class="card-header">
            <div class="athlete-info">
              <div class="sport-icon">
                <iconify-icon icon="lucide:medal" class="sport-icon-inner" aria-hidden="true" />
              </div>
              <div class="athlete-text">
                <h3>Mia Schmidt</h3>
                <p>11 Jahre • Leichtathletik</p>
              </div>
            </div>
            <span class="status-badge status-club">SC Potsdam</span>
          </div>
          <div class="card-details">
            <div class="detail-item">
              <span class="detail-label">Spieler-ID</span>
              <span class="detail-value">#4T-24-001</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Letzter Test</span>
              <span class="detail-value">—</span>
            </div>
          </div>
          <button type="button" class="card-action" @click="onErgebnisseAnsehen">
            Ergebnisse ansehen
            <iconify-icon icon="lucide:chevron-right" class="action-icon" aria-hidden="true" />
          </button>
        </div>

        <button type="button" class="add-button" @click="goAddAthlete">
          <iconify-icon icon="lucide:plus-circle" class="add-icon" aria-hidden="true" />
          Weiteren Spieler hinzufügen
        </button>
      </div>

      <nav class="tab-bar">
        <button type="button" class="tab-item" @click="router.push('/screen/38')">
          <iconify-icon icon="lucide:home" class="tab-icon" aria-hidden="true" />
          <span>Home</span>
        </button>
        <button type="button" class="tab-item" @click="router.push('/screen/50')">
          <iconify-icon icon="lucide:users" class="tab-icon" aria-hidden="true" />
          <span>Athleten</span>
        </button>
        <button type="button" class="tab-item active" aria-current="page">
          <iconify-icon icon="lucide:bar-chart-2" class="tab-icon" aria-hidden="true" />
          <span>Ergebnisse</span>
        </button>
        <button type="button" class="tab-item" @click="router.push('/screen/38')">
          <iconify-icon icon="lucide:user" class="tab-icon" aria-hidden="true" />
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

const onErgebnisseAnsehen = () => {
  router.push('/screen/38')
}

const goAddAthlete = () => {
  router.push('/screen/39')
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

.header {
  padding: 16px 24px;
  background-color: var(--background);
  flex-shrink: 0;
}

.greeting {
  font-size: 24px;
  font-weight: 700;
  color: var(--foreground);
  margin: 0 0 4px;
}

.sub-greeting {
  font-size: 14px;
  color: var(--muted-foreground);
  margin: 0;
}

.content {
  flex: 1;
  padding: 16px 24px;
  overflow-y: auto;
  padding-bottom: 100px;
}

.athlete-card {
  background-color: var(--card);
  border-radius: var(--radius-lg);
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.athlete-info {
  display: flex;
  gap: 12px;
}

.sport-icon {
  width: 48px;
  height: 48px;
  background-color: var(--muted);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  flex-shrink: 0;
}

.sport-icon-inner {
  font-size: 24px;
}

.athlete-text h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--foreground);
}

.athlete-text p {
  margin: 4px 0 0;
  font-size: 13px;
  color: var(--muted-foreground);
}

.status-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 99px;
  white-space: nowrap;
}

.status-active {
  background-color: #dcfce7;
  color: #166534;
}

.status-club {
  background-color: #dbeafe;
  color: #1e40af;
}

.card-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--border);
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-label {
  font-size: 11px;
  color: var(--muted-foreground);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-value {
  font-size: 13px;
  font-weight: 500;
  color: var(--foreground);
}

.card-action {
  width: 100%;
  padding: 12px;
  background-color: var(--muted);
  color: var(--foreground);
  border: none;
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: inherit;
}

.card-action:hover {
  background-color: var(--border);
}

.action-icon {
  font-size: 16px;
}

.add-button {
  width: 100%;
  padding: 16px;
  background-color: transparent;
  border: 2px dashed var(--border);
  border-radius: var(--radius-lg);
  color: var(--muted-foreground);
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  margin-top: 8px;
  font-family: inherit;
}

.add-button:hover {
  border-color: var(--primary);
  color: var(--primary);
  background-color: rgba(250, 204, 21, 0.08);
}

.add-icon {
  font-size: 20px;
}

.tab-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 84px;
  background-color: var(--background);
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 12px;
  flex-shrink: 0;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--muted-foreground);
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  width: 60px;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
}

.tab-item:hover {
  color: var(--foreground);
}

.tab-item.active {
  color: var(--primary);
}

.tab-icon {
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
  opacity: 0.2;
  border-radius: 100px;
  z-index: 10;
}

@media (min-width: 481px) {
  .mobile-root {
    border-radius: 24px;
    overflow: hidden;
  }
}
</style>
