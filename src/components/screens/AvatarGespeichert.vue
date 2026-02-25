<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Avatar gespeichert">
        <ScreenTopBar />

        <section class="content">
          <header class="section-header">
            <p class="section-label">Avatar</p>
            <h1 class="screen-title">Avatar gespeichert</h1>
            <p class="screen-subtitle">
              Super, dein Sport-Avatar ist jetzt gesichert. Du kannst ihn
              jederzeit wieder anpassen oder ein echtes Foto ergänzen.
            </p>
          </header>

          <section class="avatar-preview-section">
            <div class="avatar-preview-card">
              <div class="avatar-preview-figure">
                <div class="avatar-court-floor"></div>
                <div class="avatar-player">
                  <div class="avatar-player-shadow"></div>
                  <div class="avatar-player-legs"></div>
                  <div class="avatar-player-shorts"></div>
                  <div class="avatar-player-jersey"></div>
                  <div class="avatar-player-arm-left"></div>
                  <div class="avatar-player-arm-right"></div>
                  <div class="avatar-player-head"></div>
                  <div class="avatar-basketball"></div>
                </div>
              </div>
              <div class="avatar-preview-texts">
                <p class="avatar-preview-title">Dein gespeicherter Avatar</p>
                <p class="avatar-preview-subtitle">
                  So sehen dich andere in 4talents – sportlich, mutig und
                  bereit für neue Herausforderungen.
                </p>
              </div>
            </div>
          </section>

          <section class="summary-section">
            <div class="summary-card">
              <div class="summary-icon-wrapper">
                <iconify-icon
                  icon="lucide:check-circle-2"
                  style="font-size: 22px; color: var(--primary)"
                ></iconify-icon>
              </div>
              <div class="summary-texts">
                <p class="summary-title">Avatar erfolgreich angelegt</p>
                <p class="summary-subtitle">
                  Ein Avatar pro Kind hilft, die Entwicklung und
                  Testergebnisse im Blick zu behalten.
                </p>
              </div>
            </div>
          </section>
        </section>

        <section class="bottom-section">
          <div class="primary-cta-wrapper">
            <div class="primary-cta" @click="handleContinue">
              <span class="primary-cta-label">Weiter zu den Ergebnissen</span>
            </div>
          </div>
          <div class="secondary-cta-wrapper">
            <div class="secondary-cta" @click="handleLater">
              <span class="secondary-cta-label">Avatar später noch einmal anpassen</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ScreenTopBar } from '../shared'

const router = useRouter()

const handleContinue = () => {
  router.push('/screen/15')
}

const handleLater = () => {
  router.push('/screen/11')
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
  gap: 24px;
  overflow-y: auto;
}

.bottom-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
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

.section-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.section-label {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--primary);
}

.screen-title {
  margin: 0;
  font-size: 22px;
  line-height: 1.3;
  font-weight: 800;
  color: var(--foreground);
}

.screen-subtitle {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--muted-foreground);
}

.avatar-preview-section {
  display: flex;
}

.avatar-preview-card {
  width: 100%;
  padding: 16px;
  border-radius: var(--radius-lg);
  background-color: var(--card);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.avatar-preview-figure {
  width: 100%;
  height: 220px;
  border-radius: var(--radius-lg);
  background:
    radial-gradient(
      circle at top,
      rgba(255, 255, 255, 0.08),
      transparent 60%
    ),
    #000000;
  position: relative;
  overflow: hidden;
}

.avatar-court-floor {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 22px;
  height: 46px;
  border-radius: 999px;
  background: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 0.7),
    transparent 70%
  );
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}

.avatar-player {
  position: absolute;
  left: 50%;
  bottom: 34px;
  transform: translateX(-50%);
  width: 90px;
  height: 160px;
}

.avatar-player-shadow {
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: -12px;
  height: 18px;
  border-radius: 999px;
  background: radial-gradient(
    circle at center,
    rgba(0, 0, 0, 0.8),
    transparent 70%
  );
}

.avatar-player-legs {
  position: absolute;
  bottom: 0;
  left: 18px;
  width: 52px;
  height: 54px;
  border-radius: 24px 24px 12px 12px;
  background: linear-gradient(
    180deg,
    rgba(245, 245, 245, 0.98),
    rgba(185, 185, 185, 0.9)
  );
}

.avatar-player-shorts {
  position: absolute;
  bottom: 42px;
  left: 10px;
  width: 70px;
  height: 38px;
  border-radius: 12px;
  background: linear-gradient(
    180deg,
    rgba(250, 250, 250, 0.98),
    rgba(220, 220, 220, 0.9)
  );
  border: 2px solid rgba(0, 120, 70, 0.8);
}

.avatar-player-jersey {
  position: absolute;
  bottom: 80px;
  left: 10px;
  width: 70px;
  height: 54px;
  border-radius: 18px 18px 12px 12px;
  background: linear-gradient(
    180deg,
    rgba(250, 250, 250, 1),
    rgba(220, 220, 220, 0.9)
  );
  border: 2px solid rgba(0, 120, 70, 0.9);
  box-shadow: 0 0 18px rgba(255, 215, 0, 0.55);
}

.avatar-player-jersey::before {
  content: "0";
  position: absolute;
  inset: 8px 0 auto 0;
  margin: 0 auto;
  width: 24px;
  height: 30px;
  border-radius: 8px;
  border: 2px solid rgba(0, 120, 70, 0.9);
  color: rgba(0, 120, 70, 0.95);
  font-size: 18px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-player-arm-left,
.avatar-player-arm-right {
  position: absolute;
  bottom: 92px;
  width: 14px;
  height: 44px;
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    rgba(238, 215, 190, 0.97),
    rgba(196, 170, 150, 0.94)
  );
}

.avatar-player-arm-left {
  left: -6px;
  transform: rotate(-20deg);
}

.avatar-player-arm-right {
  right: -6px;
  transform: rotate(22deg);
}

.avatar-player-arm-right::after {
  content: "";
  position: absolute;
  top: 4px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 16px;
  height: 6px;
  border-radius: 999px;
  background: rgba(0, 120, 70, 0.9);
}

.avatar-player-head {
  position: absolute;
  bottom: 138px;
  left: 24px;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  background: radial-gradient(
    circle at top,
    rgba(255, 255, 255, 0.7),
    rgba(210, 190, 160, 0.96)
  );
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
}

.avatar-basketball {
  position: absolute;
  right: -4px;
  bottom: 86px;
  width: 30px;
  height: 30px;
  border-radius: 999px;
  border: 2px solid rgba(0, 0, 0, 0.9);
  background: radial-gradient(
    circle at top,
    rgba(255, 190, 0, 0.96),
    rgba(210, 120, 0, 0.85)
  );
  box-shadow: 0 0 14px rgba(255, 190, 0, 0.8);
}

.avatar-basketball::before,
.avatar-basketball::after {
  content: "";
  position: absolute;
  inset: 6px;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.7);
}

.avatar-preview-texts {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.avatar-preview-title {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: var(--foreground);
}

.avatar-preview-subtitle {
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  color: var(--muted-foreground);
}

.summary-section {
  display: flex;
}

.summary-card {
  width: 100%;
  padding: 14px 14px 14px 16px;
  border-radius: var(--radius-lg);
  background-color: var(--secondary);
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
}

.summary-icon-wrapper {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background-color: #111111;
  display: flex;
  align-items: center;
  justify-content: center;
}

.summary-texts {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.summary-title {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: var(--foreground);
}

.summary-subtitle {
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  color: var(--muted-foreground);
}

.primary-cta-wrapper {
  width: 100%;
}

.primary-cta {
  width: 100%;
  background-color: var(--primary);
  border-radius: 999px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 18px 36px rgba(255, 215, 0, 0.4);
  cursor: pointer;
  transition: all 0.2s;
}

.primary-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 44px rgba(255, 215, 0, 0.5);
}

.primary-cta:active {
  transform: translateY(0);
}

.primary-cta-label {
  font-size: 16px;
  font-weight: 700;
  color: var(--primary-foreground);
  text-align: center;
}

.secondary-cta-wrapper {
  width: 100%;
}

.secondary-cta {
  width: 100%;
  border-radius: 999px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;
}

.secondary-cta:hover {
  background-color: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 215, 0, 0.3);
}

.secondary-cta-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--muted-foreground);
  text-align: center;
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



