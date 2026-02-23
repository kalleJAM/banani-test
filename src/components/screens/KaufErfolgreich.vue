<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Kauf erfolgreich">
        <header class="success-header">
          <div class="logo-mark center-logo">
            <span class="logo-4">4</span><span class="logo-talents">talents</span>
          </div>
        </header>

        <section class="success-content">
          <div class="success-icon-wrapper">
            <div class="success-icon-ring">
              <span class="success-icon">✓</span>
            </div>
          </div>

          <div class="success-text">
            <h1 class="success-title">🎉 Kauf erfolgreich!</h1>
            <p class="success-body">
              Dein Wohnzimmer-Test ist jetzt freigeschaltet. Schnapp Dir Dein
              Kind und ein Maßband – los geht's!
            </p>
          </div>

          <button class="primary-button" type="button" @click="startTests">
            🏃🏽‍♂️ Tests starten
          </button>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const startTests = () => {
  router.push('/screen/7')
}
</script>

<style scoped>
.app-root {
  background:
    radial-gradient(
      circle at top,
      rgba(255, 215, 0, 0.16),
      transparent 60%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(255, 215, 0, 0.08),
      transparent 55%
    ),
    var(--background);
}

.screen {
  padding: 32px 20px 24px 20px;
}

.success-header {
  display: flex;
  justify-content: center;
  margin-bottom: 36px;
}

.success-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
}

.logo-mark {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 18px;
  border-radius: 999px;
  background: rgba(255, 215, 0, 0.16);
}

.logo-4 {
  font-size: 18px;
  font-weight: 800;
  color: var(--primary);
}

.logo-talents {
  font-size: 16px;
  font-weight: 700;
  color: var(--foreground);
}

.center-logo {
  justify-content: center;
}

.success-icon-wrapper {
  display: flex;
  justify-content: center;
}

.success-icon-ring {
  width: 120px;
  height: 120px;
  border-radius: 999px;
  background:
    radial-gradient(
      circle at center,
      rgba(255, 215, 0, 0.35),
      transparent 60%
    ),
    var(--card);
  border: 2px solid rgba(255, 215, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.4);
}

.success-icon {
  font-size: 48px;
  color: var(--primary);
}

.success-text {
  max-width: 280px;
}

.success-title {
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: 800;
}

.success-body {
  margin: 0;
  font-size: 14px;
  color: var(--muted-foreground);
}

.primary-button {
  margin-top: auto;
  width: 100%;
  border: none;
  border-radius: var(--radius-lg);
  padding: 16px;
  background:
    radial-gradient(
      circle at top,
      rgba(255, 255, 255, 0.18),
      transparent 55%
    ),
    var(--primary);
  color: var(--primary-foreground);
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  box-shadow: 0 0 18px rgba(255, 215, 0, 0.55);
  cursor: pointer;
}
</style>
