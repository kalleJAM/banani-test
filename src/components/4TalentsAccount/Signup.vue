<template>
  <div class="screen-wrapper">
    <div class="auth-page">
      <div class="auth-container">
        <div class="logo-section">
          <div class="logo-icon">
            <iconify-icon icon="lucide:activity" class="logo-icon-svg" aria-hidden="true" />
          </div>
          <div class="logo-text">4talents</div>
        </div>

        <div class="title-block">
          <h1 class="title">Account erstellen</h1>
          <p class="subtitle">Starten Sie die Talentdiagnostik für Ihr Kind.</p>
        </div>

        <form class="auth-form" @submit.prevent="onSubmit">
          <div class="form-row">
            <div class="form-col form-group">
              <label for="firstname">Vorname</label>
              <input
                id="firstname"
                v-model="firstname"
                type="text"
                class="input-field"
                placeholder="Max"
              />
            </div>
            <div class="form-col form-group">
              <label for="lastname">Nachname</label>
              <input
                id="lastname"
                v-model="lastname"
                type="text"
                class="input-field"
                placeholder="Mustermann"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="email">E-Mail-Adresse</label>
            <input
              id="email"
              v-model="email"
              type="email"
              class="input-field"
              placeholder="name@beispiel.de"
            />
          </div>

          <div class="form-group">
            <label for="password">Passwort</label>
            <input
              id="password"
              v-model="password"
              type="password"
              class="input-field"
              placeholder="••••••••"
            />
            <div class="password-strength">
              <div v-for="i in 4" :key="i" class="strength-bar" :class="{ active: i <= strength }"></div>
            </div>
            <span class="strength-text">Passwortstärke: {{ strengthLabel }}</span>
          </div>

          <div class="form-group">
            <label for="confirm-password">Passwort bestätigen</label>
            <input
              id="confirm-password"
              v-model="confirmPassword"
              type="password"
              class="input-field"
              placeholder="••••••••"
            />
          </div>

          <div class="checkbox-row">
            <input
              id="agb"
              v-model="agbAccepted"
              type="checkbox"
              class="checkbox-input"
            />
            <label for="agb" class="checkbox-label">
              Ich stimme den
              <a href="#" class="link" @click.prevent>AGB</a>
              und der
              <a href="#" class="link" @click.prevent>Datenschutzerklärung</a>
              zu.
            </label>
          </div>

          <button type="submit" class="btn-submit">
            Account erstellen
          </button>
        </form>

        <p class="footer-link">
          Bereits registriert?
          <a href="#" class="link" @click.prevent="goLogin">Anmelden</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const firstname = ref('')
const lastname = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const agbAccepted = ref(false)

const strength = computed(() => {
  const p = password.value
  if (!p) return 0
  let s = 0
  if (p.length >= 8) s++
  if (/[A-Z]/.test(p) && /[a-z]/.test(p)) s++
  if (/\d/.test(p)) s++
  if (/[^A-Za-z0-9]/.test(p)) s++
  return Math.min(s, 4)
})

const strengthLabel = computed(() => {
  const labels = ['Schwach', 'Mittel', 'Gut', 'Stark']
  return labels[strength.value] || 'Schwach'
})

const onSubmit = () => {
  router.push('/screen/38')
}

const goLogin = () => {
  router.push('/screen/38')
}
</script>

<style scoped>
.screen-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  background-color: var(--background);
}

.auth-page {
  width: 100%;
  max-width: 400px;
}

.auth-container {
  width: 100%;
  background-color: var(--card);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  border: 1px solid var(--border);
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 28px;
  gap: 12px;
}

.logo-icon {
  width: 48px;
  height: 48px;
  background: var(--primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-foreground);
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.25);
}

.logo-icon-svg {
  font-size: 28px;
}

.logo-text {
  font-size: 22px;
  font-weight: 700;
  color: var(--foreground);
  letter-spacing: -0.5px;
}

.title-block {
  text-align: center;
  margin-bottom: 28px;
}

.title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: var(--foreground);
}

.subtitle {
  font-size: 14px;
  color: var(--muted-foreground);
  margin: 0;
}

.auth-form {
  margin-bottom: 24px;
}

.form-row {
  display: flex;
  gap: 12px;
}

.form-col {
  flex: 1;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--foreground);
  margin-bottom: 6px;
}

.input-field {
  width: 100%;
  padding: 12px 14px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  background-color: var(--card);
  font-size: 15px;
  color: var(--foreground);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  font-family: inherit;
}

.input-field:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.2);
}

.input-field::placeholder {
  color: var(--muted-foreground);
}

.password-strength {
  display: flex;
  gap: 4px;
  margin-top: 8px;
  height: 4px;
}

.strength-bar {
  flex: 1;
  height: 100%;
  background-color: var(--muted);
  border-radius: 2px;
}

.strength-bar.active {
  background-color: var(--primary);
}

.strength-text {
  font-size: 12px;
  color: var(--muted-foreground);
  margin-top: 6px;
  display: block;
}

.checkbox-row {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 20px;
}

.checkbox-input {
  width: 20px;
  height: 20px;
  margin-top: 2px;
  flex-shrink: 0;
  accent-color: var(--primary);
  cursor: pointer;
}

.checkbox-label {
  font-size: 13px;
  color: var(--muted-foreground);
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  cursor: pointer;
}

.link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
}

.link:hover {
  text-decoration: underline;
}

.btn-submit {
  width: 100%;
  padding: 14px;
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: var(--radius-md);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  font-family: inherit;
}

.btn-submit:hover {
  opacity: 0.9;
}

.btn-submit:active {
  opacity: 0.95;
}

.footer-link {
  margin: 0;
  text-align: center;
  font-size: 14px;
  color: var(--muted-foreground);
}

.footer-link .link {
  font-weight: 600;
}

@media (max-width: 480px) {
  .screen-wrapper {
    padding: 16px 12px;
    align-items: flex-start;
    padding-top: 48px;
  }

  .auth-container {
    box-shadow: none;
    border: none;
    padding: 24px 16px;
    background: transparent;
  }
}
</style>
