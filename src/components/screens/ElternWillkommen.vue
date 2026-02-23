<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Eltern Willkommen">
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
          <header class="hero-header">
            <div class="heading-block">
              <h1 class="headline-with-emoji">👋 Herzlich Willkommen!</h1>
              <p class="info-text">
                Möchtest Du wissen, welche Sportarten für Dein Kind oder Deine
                Kinder passend wären?
              </p>
            </div>
          </header>

          <section class="illustration-section">
            <div class="sports-illustration-card">
              <div class="sports-ring">
                <div class="sport-icon" id="sport-basketball">🏀</div>
                <div class="sport-icon" id="sport-swim">🏊‍♂️</div>
                <div class="sport-icon" id="sport-soccer">⚽</div>
                <div class="sport-icon" id="sport-gym">🤸‍♀️</div>
                <div class="sport-icon" id="sport-run">🏃‍♀️</div>
                <div class="sport-icon" id="sport-tennis">🎾</div>
              </div>
              <p class="illustration-caption">
                Sportarten in Gelb-Gold zeigen Dir, welche Möglichkeiten es
                für Dein Kind gibt – von Teamsport bis Einzeldisziplinen.
              </p>
            </div>
          </section>
        </section>

        <section class="bottom-section">
          <div class="cta-shadow-wrapper">
            <div class="cta-button" @click="handleContinue">
              <span class="cta-label">🔍 Sportarten finden</span>
            </div>
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
  router.push('/screen/2')
}

const handleContinue = () => {
  router.push('/screen/5')
}
</script>

<style scoped>
.content {
  gap: 32px;
}

.hero-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.heading-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.headline-with-emoji {
  margin: 0;
  font-size: 28px;
  line-height: 1.2;
  font-weight: 800;
  color: var(--foreground);
}

.info-text {
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 400;
  color: var(--muted-foreground);
}

.illustration-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sports-illustration-card {
  width: 100%;
  max-width: 340px;
  background-color: var(--card);
  border-radius: 24px;
  padding: 24px 20px 20px 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.7);
}

.sports-ring {
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto;
  border-radius: 999px;
  border: 1px dashed rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
}

.sport-icon {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  background-color: rgba(255, 215, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

#sport-basketball {
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
}

#sport-swim {
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
}

#sport-soccer {
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
}

#sport-gym {
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
}

#sport-run {
  top: 24px;
  right: 24px;
}

#sport-tennis {
  bottom: 24px;
  left: 24px;
}

.illustration-caption {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  text-align: center;
  color: var(--muted-foreground);
}

.cta-shadow-wrapper {
  width: 100%;
}

.cta-button {
  width: 100%;
  background-color: var(--primary);
  border-radius: 999px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 18px 36px rgba(255, 215, 0, 0.4);
  cursor: pointer;
  transition: all 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 44px rgba(255, 215, 0, 0.5);
}

.cta-button:active {
  transform: translateY(0);
}

.cta-label {
  font-size: 16px;
  font-weight: 700;
  color: var(--primary-foreground);
  white-space: nowrap;
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
  width: 8px;
  height: 8px;
  background-color: var(--primary);
}
</style>

