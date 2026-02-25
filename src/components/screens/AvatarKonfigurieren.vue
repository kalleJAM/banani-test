<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Avatar konfigurieren">
        <ScreenTopBar />

        <section class="content">
          <header class="section-header">
            <p class="section-label">Avatar</p>
            <h1 class="screen-title">Gestalte den Sport-Avatar</h1>
            <p class="screen-subtitle">
              Passe Schritt für Schritt das Aussehen deines Kindes an – so,
              wie es sich selbst am liebsten sieht.
            </p>
          </header>

          <section class="avatar-preview-section">
            <div class="avatar-preview-card">
              <div class="avatar-preview-figure">
                <div class="avatar-preview-bg"></div>
                <div class="avatar-preview-body"></div>
                <div class="avatar-preview-head"></div>
                <div class="avatar-preview-ball"></div>
              </div>
              <div class="avatar-preview-texts">
                <p class="avatar-preview-title">Dein aktueller Avatar</p>
                <p class="avatar-preview-subtitle">
                  Wir starten mit einem sportlichen Basis-Avatar. Unten kannst
                  du Frisur, Farben und Outfit anpassen.
                </p>
              </div>
            </div>
          </section>

          <section class="config-section">
            <div class="config-card" @click="handleConfigClick('hair')">
              <div class="config-icon-wrapper">
                <iconify-icon
                  icon="lucide:sparkles"
                  style="font-size: 20px; color: var(--primary)"
                ></iconify-icon>
              </div>
              <div class="config-texts">
                <p class="config-title">Frisur & Gesicht</p>
                <p class="config-subtitle">
                  Wählt gemeinsam Frisur, Hautton und Gesichtsausdruck aus.
                </p>
              </div>
              <div class="config-chevron">
                <iconify-icon
                  icon="lucide:chevron-right"
                  style="font-size: 20px; color: var(--muted-foreground)"
                ></iconify-icon>
              </div>
            </div>

            <div class="config-card" @click="handleConfigClick('colors')">
              <div class="config-icon-wrapper">
                <iconify-icon
                  icon="lucide:layout-dashboard"
                  style="font-size: 20px; color: var(--primary)"
                ></iconify-icon>
              </div>
              <div class="config-texts">
                <p class="config-title">Farben & Outfit</p>
                <p class="config-subtitle">
                  Bestimmt Trikot-Farben, Schuhe und Accessoires.
                </p>
              </div>
              <div class="config-chevron">
                <iconify-icon
                  icon="lucide:chevron-right"
                  style="font-size: 20px; color: var(--muted-foreground)"
                ></iconify-icon>
              </div>
            </div>

            <div class="config-card" @click="handleConfigClick('sport')">
              <div class="config-icon-wrapper">
                <iconify-icon
                  icon="lucide:medal"
                  style="font-size: 20px; color: var(--primary)"
                ></iconify-icon>
              </div>
              <div class="config-texts">
                <p class="config-title">Sport-Fokus</p>
                <p class="config-subtitle">
                  Wähle, ob dein Avatar z.B. mit Ball, Schläger oder ohne
                  Sportgerät gezeigt wird.
                </p>
              </div>
              <div class="config-chevron">
                <iconify-icon
                  icon="lucide:chevron-right"
                  style="font-size: 20px; color: var(--muted-foreground)"
                ></iconify-icon>
              </div>
            </div>

            <div class="config-note-card">
              <p class="config-note-title">Alles später änderbar</p>
              <p class="config-note-text">
                Du kannst den Avatar jederzeit anpassen oder ein echtes Foto
                ergänzen, wenn es für euch passt.
              </p>
            </div>
          </section>
        </section>

        <section class="bottom-section">
          <div class="primary-cta-wrapper">
            <div class="primary-cta" @click="handleContinue">
              <span class="primary-cta-label">Avatar speichern und fortfahren</span>
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


const handleConfigClick = (type) => {
  alert(`${type === 'hair' ? 'Frisur & Gesicht' : type === 'colors' ? 'Farben & Outfit' : 'Sport-Fokus'} Konfiguration wird geöffnet`)
}

const handleContinue = () => {
  router.push('/screen/14')
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
  gap: 12px;
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
  height: 180px;
  border-radius: var(--radius-lg);
  background:
    radial-gradient(
      circle at top,
      rgba(255, 215, 0, 0.18),
      transparent 60%
    ),
    #000000;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-preview-bg {
  position: absolute;
  inset: 20px 40px 18px 40px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.avatar-preview-body {
  position: absolute;
  width: 46px;
  height: 86px;
  border-radius: 24px;
  background: linear-gradient(
    180deg,
    rgba(255, 215, 0, 0.9),
    rgba(255, 215, 0, 0.4)
  );
  bottom: 40px;
}

.avatar-preview-head {
  position: absolute;
  width: 38px;
  height: 38px;
  border-radius: 999px;
  background: radial-gradient(
    circle at top,
    rgba(255, 255, 255, 0.7),
    rgba(255, 215, 0, 0.6)
  );
  bottom: 104px;
}

.avatar-preview-ball {
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  border: 2px solid rgba(0, 0, 0, 0.8);
  background: radial-gradient(
    circle at top,
    rgba(255, 215, 0, 0.9),
    rgba(255, 215, 0, 0.5)
  );
  right: 52px;
  bottom: 40px;
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

.config-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.config-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 12px 12px 14px;
  border-radius: var(--radius-lg);
  background-color: var(--card);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all 0.2s;
}

.config-card:hover {
  border-color: rgba(255, 215, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.02);
}

.config-icon-wrapper {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background-color: #111111;
  display: flex;
  align-items: center;
  justify-content: center;
}

.config-texts {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.config-title {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: var(--foreground);
}

.config-subtitle {
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  color: var(--muted-foreground);
}

.config-chevron {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.config-note-card {
  margin-top: 4px;
  padding: 12px 14px;
  border-radius: var(--radius-lg);
  background-color: var(--secondary);
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.config-note-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--foreground);
}

.config-note-text {
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



