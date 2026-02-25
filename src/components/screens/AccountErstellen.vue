<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Account erstellen">
        <ScreenTopBar />

        <section class="content">
          <header class="auth-header">
            <h1 class="auth-title">Account erstellen</h1>
            <p class="auth-subtitle">
              Sichere Dir Deine Ergebnisse und entdecke passende Sportarten.
            </p>
          </header>

          <section class="social-auth">
            <div class="social-button social-apple" @click="handleSocialAuth('apple')">
              <div class="social-icon">
                <span class="emoji-icon">🍎</span>
              </div>
              <span class="social-label">Mit Apple anmelden</span>
            </div>

            <div class="social-button social-google" @click="handleSocialAuth('google')">
              <div class="social-icon google-icon">
                <span class="google-g">G</span>
              </div>
              <span class="social-label">Mit Google anmelden</span>
            </div>
          </section>

          <div class="divider-row">
            <div class="divider-line"></div>
            <span class="divider-text">oder</span>
            <div class="divider-line"></div>
          </div>

          <section class="email-section">
            <div class="input-label-row">
              <span class="input-label">E-Mail Adresse</span>
            </div>
            <div class="input-field" @click="focusEmailInput">
              <div class="input-icon">
                <span class="emoji-icon">✉️</span>
              </div>
              <input
                v-model="email"
                type="email"
                class="email-input"
                placeholder="deine@email.de"
                @keyup.enter="handleEmailContinue"
              />
            </div>

            <div class="primary-email-cta" @click="handleEmailContinue">
              <span class="primary-email-label">Weiter mit E-Mail</span>
            </div>
          </section>
        </section>

        <section class="bottom-section">
          <div class="login-row">
            <span class="login-text">Bereits registriert?</span>
            <span class="login-link" @click="handleLogin">Einloggen</span>
          </div>
          <p class="legal-text">
            Durch Registrierung stimmst Du unseren
            <span class="legal-link" @click="handleLegal('agb')">AGB</span>
            und der
            <span class="legal-link" @click="handleLegal('privacy')">Datenschutzerklärung</span>
            zu.
          </p>
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
const email = ref('')

const handleSocialAuth = (provider) => {
  alert(`${provider === 'apple' ? 'Apple' : 'Google'} Anmeldung wird implementiert`)
}

const focusEmailInput = () => {
}

const handleEmailContinue = () => {
  if (email.value && email.value.includes('@')) {
    router.push({
      path: '/screen/6',
      query: { email: email.value }
    })
  } else {
    alert('Bitte gib eine gültige E-Mail Adresse ein.')
  }
}

const handleLogin = () => {
  alert('Login wird implementiert')
}

const handleLegal = (type) => {
  alert(`${type === 'agb' ? 'AGB' : 'Datenschutzerklärung'} wird angezeigt`)
}
</script>

<style scoped>
.app-root {
  background:
    radial-gradient(
      circle at top,
      rgba(255, 215, 0, 0.08),
      transparent 55%
    ),
    var(--background);
}

.screen {
  padding: 16px 16px 20px 16px;
}

.top-bar {
  padding-bottom: 16px;
}

.content {
  gap: 20px;
}

.bottom-section {
  gap: 10px;
}

.icon-wrapper {
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.06);
}

.logo-mark-small {
  padding: 6px 14px;
  background: rgba(255, 215, 0, 0.16);
}

.auth-header {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.auth-title {
  margin: 0;
  font-size: 22px;
  font-weight: 800;
}

.auth-subtitle {
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
  color: var(--muted-foreground);
}

.social-auth {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.social-button {
  width: 100%;
  border-radius: 999px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.social-apple {
  border: 1px solid rgba(255, 255, 255, 0.6);
  background-color: transparent;
  color: var(--foreground);
}

.social-apple:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.social-google {
  background-color: var(--secondary);
  color: var(--foreground);
}

.social-google:hover {
  background-color: #222222;
}

.social-icon {
  width: 24px;
  height: 24px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.emoji-icon {
  font-size: 18px;
}

.google-icon {
  background-color: #ffffff;
}

.google-g {
  font-size: 16px;
  font-weight: 700;
  color: #4285f4;
}

.divider-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.divider-line {
  flex: 1;
  height: 1px;
  background-color: #1a1a1a;
}

.divider-text {
  font-size: 12px;
  color: var(--muted-foreground);
}

.email-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input-label {
  font-size: 13px;
  color: var(--foreground);
}

.input-field {
  border-radius: var(--radius-lg);
  background-color: var(--input);
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: text;
}

.input-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.email-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  color: var(--foreground);
  font-family: inherit;
}

.email-input::placeholder {
  color: var(--muted-foreground);
}

.primary-email-cta {
  margin-top: 4px;
  border-radius: 999px;
  background-color: var(--primary);
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.primary-email-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.4);
}

.primary-email-cta:active {
  transform: translateY(0);
}

.primary-email-label {
  font-size: 15px;
  font-weight: 700;
  color: var(--primary-foreground);
}

.login-row {
  display: flex;
  justify-content: center;
  gap: 6px;
  font-size: 13px;
}

.login-text {
  color: var(--muted-foreground);
}

.login-link {
  color: var(--primary);
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

.login-link:hover {
  opacity: 0.8;
}

.legal-text {
  margin: 0;
  font-size: 11px;
  color: var(--muted-foreground);
  text-align: center;
}

.legal-link {
  color: var(--primary);
  cursor: pointer;
  transition: opacity 0.2s;
}

.legal-link:hover {
  opacity: 0.8;
}
</style>

