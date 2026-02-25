<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Talent Info Polished">
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
          <div class="hero-header">
            <div class="hero-bubbles-row">
              <div class="hero-bubble hero-bubble-left"></div>
              <div class="hero-bubble hero-bubble-center"></div>
              <div class="hero-bubble hero-bubble-right"></div>
            </div>
            <div class="heading-block">
              <h1 class="headline-with-emoji">🎉 Toll, dass Du da bist!</h1>
              <p class="info-text">
                Aber eine Sache: Bitte hole Deine Eltern mit dazu ans Gerät.
                Ihr könnt das hier nur zusammen machen. 🤝
              </p>
            </div>
          </div>

          <section class="illustration-section">
            <div class="illustration-card">
              <div class="illustration-top-row">
                <div class="avatar-stack">
                  <div class="avatar avatar-child"></div>
                  <div class="avatar avatar-parent-left"></div>
                  <div class="avatar avatar-parent-right"></div>
                </div>
                <div class="badge-pill">Gemeinsam stark</div>
              </div>
              <div class="phone-wrapper">
                <div class="phone-outer"></div>
                <div class="phone-inner"></div>
              </div>
              <p class="illustration-caption">
                Du zeigst Deinen Eltern, was du kannst – und ihr entdeckt
                gemeinsam Deine Talente.
              </p>
            </div>
          </section>
        </section>

        <section class="bottom-cta">
          <div class="cta-shadow-wrapper">
            <div class="cta-button" @click="handleContinue">
              <span class="cta-label">✅ Meine Eltern sind jetzt dabei!</span>
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
  router.back()
}

const goToSports = () => {
  router.push('/screen/19')
}

const handleContinue = () => {
  router.push('/screen/5')
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
  background-color: var(--background);
  color: var(--foreground);
  min-height: 812px;
  display: flex;
}

.screen {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 24px 20px 28px 20px;
  position: relative;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.bottom-cta {
  padding-top: 12px;
}

.icon-wrapper {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-xl);
  background-color: rgba(255, 255, 255, 0.04);
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
  padding: 6px 12px;
  border-radius: var(--radius-xl);
  background: rgba(255, 215, 0, 0.12);
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

.hero-header {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hero-bubbles-row {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 4px;
}

.hero-bubble {
  width: 80px;
  height: 80px;
  border-radius: 999px;
  background-color: #111111;
  opacity: 0.8;
}

.hero-bubble-center {
  background-color: rgba(255, 215, 0, 0.16);
}

.hero-bubble-left,
.hero-bubble-right {
  background-color: rgba(255, 255, 255, 0.06);
}

.heading-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.headline-with-emoji {
  margin: 0;
  font-size: 30px;
  line-height: 1.16;
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

.illustration-card {
  width: 100%;
  max-width: 340px;
  background-color: var(--card);
  border-radius: 24px;
  padding: 24px 22px 22px 22px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  display: flex;
  flex-direction: column;
  gap: 18px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.7);
}

.illustration-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.avatar-stack {
  display: flex;
  align-items: center;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  border: 2px solid var(--background);
}

.avatar-child {
  background: linear-gradient(
    135deg,
    rgba(255, 215, 0, 0.18),
    rgba(255, 215, 0, 0.4)
  );
  transform: translateX(8px);
  z-index: 2;
}

.avatar-parent-left {
  background: rgba(255, 255, 255, 0.12);
  transform: translateX(0);
  z-index: 1;
}

.avatar-parent-right {
  background: rgba(255, 255, 255, 0.04);
  transform: translateX(-8px);
}

.badge-pill {
  padding: 6px 10px;
  border-radius: 999px;
  background-color: rgba(255, 215, 0, 0.12);
  color: var(--primary);
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.phone-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
  padding-bottom: 6px;
}

.phone-outer {
  width: 132px;
  height: 82px;
  border-radius: 24px;
  border: 2px solid rgba(255, 215, 0, 0.9);
}

.phone-inner {
  width: 110px;
  height: 62px;
  border-radius: 20px;
  border: 1px solid rgba(255, 215, 0, 0.65);
  position: relative;
  top: -72px;
  left: 0;
}

.illustration-caption {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  color: var(--muted-foreground);
}

.cta-shadow-wrapper {
  width: 100%;
  padding-top: 4px;
}

.cta-button {
  width: 100%;
  background-color: var(--primary);
  border-radius: 999px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 24px 40px rgba(255, 215, 0, 0.45);
  cursor: pointer;
  transition: all 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 28px 48px rgba(255, 215, 0, 0.55);
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
</style>

