<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Avatar-Auswahl">
        <ScreenTopBar />

        <section class="content">
          <header class="section-header">
            <p class="section-label">Avatar</p>
            <h1 class="screen-title">Wähle einen Avatar für dein Kind</h1>
            <p class="screen-subtitle">
              Lege fest, wie dein Kind dargestellt wird. Du kannst später
              alles anpassen – mit oder ohne Foto.
            </p>
          </header>

          <section class="avatar-grid">
            <div 
              class="avatar-card" 
              :class="{ 'avatar-card-selected': selectedAvatar === 'boy' }"
              @click="selectAvatar('boy')"
            >
              <div class="avatar-illustration avatar-config">
                <div class="avatar-config-layer">
                  <div class="avatar-config-circle outer"></div>
                  <div class="avatar-config-circle middle"></div>
                  <div class="avatar-config-circle inner"></div>
                </div>
                <div class="avatar-config-icon-wrapper">
                  <iconify-icon
                    icon="lucide:smile"
                    style="font-size: 24px; color: var(--primary)"
                  ></iconify-icon>
                </div>
              </div>
              <div class="avatar-label-wrapper">
                <p class="avatar-title">Junge</p>
                <p class="avatar-hint">
                  Stelle Schritt für Schritt Frisur, Farben und Sport-Outfit
                  für einen Jungen zusammen.
                </p>
              </div>
            </div>

            <div 
              class="avatar-card" 
              :class="{ 'avatar-card-selected': selectedAvatar === 'girl' }"
              @click="selectAvatar('girl')"
            >
              <div class="avatar-illustration avatar-config">
                <div class="avatar-config-layer">
                  <div class="avatar-config-circle outer"></div>
                  <div class="avatar-config-circle middle"></div>
                  <div class="avatar-config-circle inner"></div>
                </div>
                <div class="avatar-config-icon-wrapper">
                  <iconify-icon
                    icon="lucide:sparkles"
                    style="font-size: 24px; color: var(--primary)"
                  ></iconify-icon>
                </div>
              </div>
              <div class="avatar-label-wrapper">
                <p class="avatar-title">Mädchen</p>
                <p class="avatar-hint">
                  Wähle gemeinsam mit deinem Kind Frisur, Farben und
                  Sport-Outfit für ein Mädchen.
                </p>
              </div>
            </div>

            <div 
              class="avatar-card" 
              :class="{ 'avatar-card-selected': selectedAvatar === 'neutral' }"
              @click="selectAvatar('neutral')"
            >
              <div class="avatar-illustration neutral avatar-config">
                <div class="avatar-config-layer">
                  <div class="avatar-config-pill"></div>
                </div>
                <div class="avatar-config-icon-wrapper">
                  <iconify-icon
                    icon="lucide:user-round"
                    style="font-size: 24px; color: var(--primary)"
                  ></iconify-icon>
                </div>
              </div>
              <div class="avatar-label-wrapper">
                <p class="avatar-title">Don't know yet</p>
                <p class="avatar-hint">
                  Starte mit einem neutralen Avatar und passe später alles an,
                  wenn es für euch passt.
                </p>
              </div>
            </div>
          </section>

          <section class="photo-hint-card">
            <div class="photo-icon">
              <iconify-icon
                icon="lucide:camera"
                style="font-size: 20px; color: var(--primary)"
              ></iconify-icon>
            </div>
            <div class="photo-texts">
              <p class="photo-title">Avatar gestalten – mit oder ohne Foto</p>
              <p class="photo-subtitle">
                Ihr könnt einen bunten Sport-Avatar bauen und später ein
                echtes Foto ergänzen – ganz so, wie dein Kind sich am wohlsten
                fühlt.
              </p>
            </div>
          </section>
        </section>

        <section class="bottom-section">
          <div class="primary-cta-wrapper">
            <div class="primary-cta" @click="handleContinue">
              <span class="primary-cta-label">Avatar auswählen und weiter</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ScreenTopBar } from '../shared'

const router = useRouter()
const selectedAvatar = ref('')

const selectAvatar = (type) => {
  selectedAvatar.value = type
}

const handleContinue = () => {
  if (selectedAvatar.value) {
    router.push('/screen/13')
  } else {
    alert('Bitte wähle einen Avatar aus.')
  }
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

.avatar-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.avatar-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  border-radius: var(--radius-lg);
  background-color: var(--card);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all 0.2s;
}

.avatar-card:hover {
  border-color: rgba(255, 215, 0, 0.3);
}

.avatar-card-selected {
  border-color: var(--primary);
  box-shadow: 0 0 0 1px rgba(255, 215, 0, 0.6);
  background-color: rgba(255, 215, 0, 0.05);
}

.avatar-illustration {
  width: 72px;
  height: 72px;
  border-radius: var(--radius-xl);
  background:
    radial-gradient(
      circle at top,
      rgba(255, 215, 0, 0.18),
      transparent 60%
    ),
    #111111;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.avatar-illustration.neutral {
  background:
    radial-gradient(
      circle at top,
      rgba(255, 215, 0, 0.14),
      transparent 60%
    ),
    #111111;
}

.avatar-config-layer {
  position: absolute;
  inset: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-config-circle.outer {
  width: 100%;
  height: 100%;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.avatar-config-circle.middle {
  width: 70%;
  height: 70%;
  border-radius: 999px;
  border: 1px solid rgba(255, 215, 0, 0.4);
}

.avatar-config-circle.inner {
  width: 38%;
  height: 38%;
  border-radius: 999px;
  background: radial-gradient(
    circle at top,
    rgba(255, 215, 0, 0.6),
    rgba(255, 215, 0, 0.1)
  );
}

.avatar-config-pill {
  width: 70%;
  height: 18px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(
    90deg,
    rgba(255, 215, 0, 0.2),
    rgba(255, 255, 255, 0.02)
  );
}

.avatar-config-icon-wrapper {
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 1px rgba(255, 215, 0, 0.6);
}

.avatar-label-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.avatar-title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--foreground);
}

.avatar-hint {
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  color: var(--muted-foreground);
}

.photo-hint-card {
  margin-top: 4px;
  padding: 12px 14px;
  border-radius: var(--radius-lg);
  background-color: var(--secondary);
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.photo-icon {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background-color: #111111;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-texts {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.photo-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: var(--foreground);
}

.photo-subtitle {
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



