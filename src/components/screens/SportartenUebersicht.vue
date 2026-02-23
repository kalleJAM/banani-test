<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Sportarten-Übersicht">
        <section class="top-bar">
          <div class="top-left" @click="goToPrev">
            <div class="icon-wrapper">
              <iconify-icon
                icon="lucide:arrow-left"
                style="font-size: 22px; color: var(--foreground)"
              ></iconify-icon>
            </div>
          </div>
          <div class="top-right-logo" @click="goToSports">
            <div class="logo-mark-small">
              <span class="logo-4">4</span><span class="logo-talents">talents</span>
            </div>
          </div>
        </section>

        <section class="content">
          <header class="sports-overview-header">
            <h1 class="sports-overview-title">15 Sportarten für Max</h1>
            <p class="sports-overview-subtitle">
              Basierend auf Größe und Familienprofil haben wir diese
              Sportarten für Dein Kind gefunden. Aktuell erklären wir mit den
              Körpermaßen etwa 5–15 % der Sport-Eignung.
            </p>
          </header>

          <section class="legend-card refined-card">
            <p class="legend-title">Kategorien</p>
            <div class="legend-row">
              <span class="legend-dot legend-team"></span>
              <span class="legend-label">Mannschaftssportarten (6)</span>
            </div>
            <div class="legend-row">
              <span class="legend-dot legend-racket"></span>
              <span class="legend-label">Rückschlagspiele (3)</span>
            </div>
            <div class="legend-row">
              <span class="legend-dot legend-individual"></span>
              <span class="legend-label">Olympische Individualsportarten (6)</span>
            </div>
          </section>

          <section class="sports-list-section">
            <div class="sports-group">
              <div class="group-header-row">
                <h2 class="group-title">Mannschaftssportarten</h2>
                <span class="group-count">6 Sportarten</span>
              </div>
              <div class="sport-item" @click="handleSportClick('Basketball')">
                <div class="sport-main">
                  <span class="sport-emoji">🏀</span>
                  <div class="sport-texts">
                    <span class="sport-name">Basketball</span>
                  </div>
                </div>
                <span class="match-badge match-high">15 % Match</span>
              </div>
              <div class="sport-item" @click="handleSportClick('Volleyball')">
                <div class="sport-main">
                  <span class="sport-emoji">🏐</span>
                  <div class="sport-texts">
                    <span class="sport-name">Volleyball</span>
                  </div>
                </div>
                <span class="match-badge match-high">14 % Match</span>
              </div>
              <div class="sport-item" @click="handleSportClick('Handball')">
                <div class="sport-main">
                  <span class="sport-emoji">🤾</span>
                  <div class="sport-texts">
                    <span class="sport-name">Handball</span>
                  </div>
                </div>
                <span class="match-badge match-high">13 % Match</span>
              </div>
              <div class="sport-item" @click="handleSportClick('Fußball')">
                <div class="sport-main">
                  <span class="sport-emoji">⚽</span>
                  <div class="sport-texts">
                    <span class="sport-name">Fußball</span>
                  </div>
                </div>
                <span class="match-badge match-mid">12 % Match</span>
              </div>
              <div class="sport-item" @click="handleSportClick('Eishockey')">
                <div class="sport-main">
                  <span class="sport-emoji">🏒</span>
                  <div class="sport-texts">
                    <span class="sport-name">Eishockey</span>
                  </div>
                </div>
                <span class="match-badge match-mid">11 % Match</span>
              </div>
              <div class="sport-item" @click="handleSportClick('Ringen')">
                <div class="sport-main">
                  <span class="sport-emoji">🤼</span>
                  <div class="sport-texts">
                    <span class="sport-name">Ringen</span>
                  </div>
                </div>
                <span class="match-badge match-mid">10 % Match</span>
              </div>
            </div>

            <div class="sports-group">
              <div class="group-header-row">
                <h2 class="group-title">Rückschlagspiele</h2>
                <span class="group-count">3 Sportarten</span>
              </div>
              <div class="sport-item" @click="handleSportClick('Tennis')">
                <div class="sport-main">
                  <span class="sport-emoji">🎾</span>
                  <div class="sport-texts">
                    <span class="sport-name">Tennis</span>
                  </div>
                </div>
                <span class="match-badge match-mid">14 % Match</span>
              </div>
              <div class="sport-item" @click="handleSportClick('Badminton')">
                <div class="sport-main">
                  <span class="sport-emoji">🏸</span>
                  <div class="sport-texts">
                    <span class="sport-name">Badminton</span>
                  </div>
                </div>
                <span class="match-badge match-mid">12 % Match</span>
              </div>
              <div class="sport-item" @click="handleSportClick('Tischtennis')">
                <div class="sport-main">
                  <span class="sport-emoji">🏓</span>
                  <div class="sport-texts">
                    <span class="sport-name">Tischtennis</span>
                  </div>
                </div>
                <span class="match-badge match-mid">11 % Match</span>
              </div>
            </div>

            <div class="sports-group">
              <div class="group-header-row">
                <h2 class="group-title">Olympische Individualsportarten</h2>
                <span class="group-count">6 Sportarten</span>
              </div>
              <div class="sport-item" @click="handleSportClick('Leichtathletik Sprint')">
                <div class="sport-main">
                  <span class="sport-emoji">🏃</span>
                  <div class="sport-texts">
                    <span class="sport-name">Leichtathletik Sprint</span>
                  </div>
                </div>
                <span class="match-badge match-high">15 % Match</span>
              </div>
              <div class="sport-item" @click="handleSportClick('Fechten')">
                <div class="sport-main">
                  <span class="sport-emoji">🤺</span>
                  <div class="sport-texts">
                    <span class="sport-name">Fechten</span>
                  </div>
                </div>
                <span class="match-badge match-mid">13 % Match</span>
              </div>
              <div class="sport-item" @click="handleSportClick('Schwimmen')">
                <div class="sport-main">
                  <span class="sport-emoji">🏊</span>
                  <div class="sport-texts">
                    <span class="sport-name">Schwimmen</span>
                  </div>
                </div>
                <span class="match-badge match-mid">12 % Match</span>
              </div>
              <div class="sport-item" @click="handleSportClick('Radsport')">
                <div class="sport-main">
                  <span class="sport-emoji">🚴</span>
                  <div class="sport-texts">
                    <span class="sport-name">Radsport</span>
                  </div>
                </div>
                <span class="match-badge match-low">9 % Match</span>
              </div>
              <div class="sport-item" @click="handleSportClick('Gerätturnen')">
                <div class="sport-main">
                  <span class="sport-emoji">🤸</span>
                  <div class="sport-texts">
                    <span class="sport-name">Gerätturnen</span>
                  </div>
                </div>
                <span class="match-badge match-low">7 % Match</span>
              </div>
              <div class="sport-item" @click="handleSportClick('Ski Alpin')">
                <div class="sport-main">
                  <span class="sport-emoji">⛷️</span>
                  <div class="sport-texts">
                    <span class="sport-name">Ski Alpin</span>
                  </div>
                </div>
                <span class="match-badge match-low">6 % Match</span>
              </div>
            </div>
          </section>
        </section>

        <section class="bottom-section">
          <div class="bottom-hint">
            Diese Übersicht erscheint, wenn Du auf
            <span class="inline-highlight">15 Sportarten</span> tippst.
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToPrev = () => {
  router.back()
}

const goToSports = () => {
  router.push('/screen/19')
}

const handleSportClick = (sportName) => {
  alert(`${sportName} Details werden angezeigt`)
}
</script>

<style scoped>
:root {
  --background: #0a0a0a;
  --foreground: #ffffff;
  --border: #1a1a1a;
  --input: #1a1a1a;
  --primary: #ffd700;
  --primary-foreground: #0a0a0a;
  --secondary: #1a1a1a;
  --secondary-foreground: #ffffff;
  --muted: #111111;
  --muted-foreground: #999999;
  --success: #10b981;
  --success-foreground: #052e16;
  --accent: #ffd700;
  --accent-foreground: #0a0a0a;
  --destructive: #7f1d1d;
  --destructive-foreground: #fee2e2;
  --warning: #f59e0b;
  --warning-foreground: #0a0a0a;
  --card: #1a1a1a;
  --card-foreground: #ffffff;
  --sidebar: #050505;
  --sidebar-foreground: #ffd700;
  --sidebar-primary: #111111;
  --sidebar-primary-foreground: #ffd700;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-xl: 20px;
  --font-family-body: Inter;
}

* {
  box-sizing: border-box;
}

.screen-wrapper {
  width: 100%;
  min-height: 100vh;
  max-width: 375px;
  margin: 0 auto;
  background-color: var(--background);
}

.app-root {
  background:
    radial-gradient(
      circle at top,
      rgba(255, 215, 0, 0.08),
      transparent 55%
    ),
    var(--background);
  color: var(--foreground);
  min-height: 812px;
  display: flex;
}

.screen {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 20px 16px;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
}

.bottom-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.icon-wrapper {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-xl);
  background-color: rgba(255, 255, 255, 0.06);
  cursor: pointer;
  transition: opacity 0.2s;
}

.icon-wrapper:hover {
  opacity: 0.7;
}

.logo-mark-small {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 215, 0, 0.16);
  cursor: pointer;
  transition: all 0.2s;
}

.logo-mark-small:hover {
  background: rgba(255, 215, 0, 0.2);
}

.logo-4 {
  font-size: 16px;
  font-weight: 800;
  color: var(--primary);
}

.logo-talents {
  font-size: 15px;
  font-weight: 700;
  color: var(--foreground);
}

.sports-overview-header {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.sports-overview-title {
  margin: 0;
  font-size: 20px;
  font-weight: 800;
}

.sports-overview-subtitle {
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  color: var(--muted-foreground);
}

.refined-card.legend-card {
  padding: 12px 14px 14px;
  background-color: var(--card);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.legend-title {
  margin: 0 0 6px 0;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted-foreground);
}

.legend-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
}

.legend-team {
  background: linear-gradient(
    135deg,
    var(--primary),
    rgba(255, 215, 0, 0.2)
  );
}

.legend-racket {
  background: linear-gradient(
    135deg,
    #ffffff,
    rgba(255, 255, 255, 0.2)
  );
}

.legend-individual {
  background: linear-gradient(135deg, #444444, #111111);
}

.legend-label {
  font-size: 13px;
  color: var(--card-foreground);
}

.sports-list-section {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.sports-group {
  background-color: var(--card);
  border-radius: 18px;
  padding: 12px 12px 10px;
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.group-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.group-title {
  margin: 0;
  font-size: 14px;
}

.group-count {
  font-size: 12px;
  color: var(--muted-foreground);
}

.sport-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 6px;
  border-radius: var(--radius-md);
  margin-top: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.sport-item:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

.sport-item + .sport-item {
  margin-top: 2px;
}

.sport-main {
  display: flex;
  align-items: center;
  gap: 10px;
}

.sport-emoji {
  font-size: 22px;
}

.sport-texts {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sport-name {
  font-size: 14px;
}

.match-badge {
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 11px;
  white-space: nowrap;
}

.match-high {
  background: linear-gradient(
    135deg,
    rgba(255, 215, 0, 0.18),
    rgba(255, 215, 0, 0.6)
  );
  color: var(--background);
}

.match-mid {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.35)
  );
  color: var(--background);
}

.match-low {
  background: linear-gradient(135deg, #222222, #111111);
  color: var(--muted-foreground);
}

.bottom-hint {
  font-size: 12px;
  text-align: center;
  color: var(--muted-foreground);
}

.inline-highlight {
  color: var(--primary);
  font-weight: 600;
}

.progress-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background-color: var(--muted);
}

.dot-active {
  width: 10px;
  height: 6px;
  border-radius: 999px;
  background-color: var(--primary);
}
</style>



