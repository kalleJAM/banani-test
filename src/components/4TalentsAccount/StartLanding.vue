<template>
  <div class="screen-wrapper">
    <div class="screen-root">
      <div class="background-media">
        <img
          src="https://storage.googleapis.com/banani-generated-images/generated-images/f530a914-f972-492e-9288-5ae80bb2c8d2.jpg"
          alt="4talents Diagnostik"
        />
      </div>
      <div class="gradient-overlay"></div>

      <div class="logo-container">
        <iconify-icon icon="lucide:activity" class="logo-icon" aria-hidden="true" />
        <span class="logo-text">4talents</span>
      </div>

      <div class="content-shell">
        <div class="headline-block">
          <h1 class="headline">
            Erkenne deine<br /><span class="highlight">Begabung.</span>
          </h1>
          <p class="subtext">Diagnostik für Kids &amp; Teens</p>
        </div>

        <div class="cta-card">
          <div class="cta-label">Starte jetzt</div>
          <div class="actions">
            <button type="button" class="btn btn-primary" @click="goAccount">
              <div class="btn-content">
                <span>Account erstellen</span>
              </div>
            </button>
            <button type="button" class="btn btn-secondary" @click="goLogin">
              <div class="btn-content">
                <span>Bereits registriert? Anmelden</span>
              </div>
            </button>
          </div>
          <p class="legal-text">
            Für Eltern, die ihre Kinder beschützen &amp; fördern wollen
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goAccount = () => {
  router.push('/screen/37')
}

const goLogin = () => {
  router.push('/screen/38')
}
</script>

<style scoped>
.screen-root {
  position: relative;
  width: 100%;
  min-height: 812px;
  overflow: hidden;
}

.background-media {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.background-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(15, 23, 42, 0.25) 0%,
    rgba(15, 23, 42, 0.55) 30%,
    rgba(15, 23, 42, 0.9) 70%,
    #020617 100%
  );
  z-index: 1;
}

.logo-container {
  position: absolute;
  top: 32px;
  left: 24px;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(15, 23, 42, 0.85);
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.4);
}

.logo-icon {
  font-size: 20px;
  color: var(--primary);
}

.logo-text {
  font-size: 18px;
  font-weight: 800;
  color: var(--primary);
  letter-spacing: -0.5px;
}

.content-shell {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 812px;
  padding: 96px 24px 40px 24px;
}

.headline-block {
  margin-top: auto;
  margin-bottom: 24px;
  color: #f9fafb;
}

.headline {
  font-size: 40px;
  font-weight: 800;
  line-height: 1.05;
  margin: 12px 0 8px 0;
  letter-spacing: -1px;
}

.highlight {
  color: var(--primary);
}

.subtext {
  font-size: 16px;
  line-height: 1.5;
  color: #e5e7eb;
  opacity: 0.9;
  max-width: 80%;
}

.cta-card {
  background: rgba(15, 23, 42, 0.96);
  border-radius: var(--radius-xl);
  padding: 20px 18px 18px 18px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  backdrop-filter: blur(18px);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.cta-label {
  font-size: 12px;
  font-weight: 500;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  border-radius: var(--radius-xl);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  border: none;
  white-space: nowrap;
  font-family: inherit;
}

.btn-primary {
  background: var(--primary);
  color: var(--primary-foreground);
}

.btn-primary:hover {
  filter: brightness(1.1);
}

.btn-secondary {
  background: transparent;
  color: #e5e7eb;
  border: 1px solid rgba(148, 163, 184, 0.65);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.05);
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legal-text {
  margin-top: 8px;
  font-size: 11px;
  color: #9ca3af;
}
</style>
