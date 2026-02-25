<template>
  <div class="screen-wrapper">
    <div class="mobile-root">
      <div class="content">
        <div class="icon-container">
          <iconify-icon icon="lucide:mail-check" class="icon-mail" aria-hidden="true" />
        </div>

        <h1 class="headline">Bitte bestätige die Registrierung</h1>

        <p class="description">
          Wir haben eine E-Mail an
          <strong>{{ emailDisplay }}</strong> gesendet. Bitte klicke auf den
          Link in der E-Mail, um die Spielerregistrierung abzuschließen.
        </p>

        <button type="button" class="btn-primary" @click="onWeiter">
          Weiter
        </button>

        <button type="button" class="btn-secondary" @click="onEmailErneut">
          E-Mail erneut senden
        </button>

        <button type="button" class="text-link" @click="onAndereEmail">
          Andere E-Mail verwenden
        </button>

        <button type="button" class="bottom-link" @click="goDashboard">
          Zurück zum Dashboard
        </button>
      </div>

      <div class="home-indicator" aria-hidden="true"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const emailDisplay = computed(() => {
  const email = route.query.email
  return email && typeof email === 'string' ? email : 'email@beispiel.de'
})

const onWeiter = () => {
  router.push('/screen/38')
}

const goDashboard = () => {
  router.push('/screen/38')
}

const onEmailErneut = () => {
  // Platzhalter – später API-Call
}

const onAndereEmail = () => {
  router.push('/screen/42')
}
</script>

<style scoped>
.screen-wrapper {
  min-height: 100vh;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  padding: 0;
}

.mobile-root {
  width: 100%;
  max-width: 390px;
  min-height: 100vh;
  background-color: var(--background);
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 1px var(--border);
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  text-align: center;
}

.icon-container {
  width: 80px;
  height: 80px;
  background-color: #fef9c3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: var(--primary);
}

.icon-mail {
  font-size: 40px;
}

.headline {
  font-size: 24px;
  font-weight: 700;
  color: var(--foreground);
  margin: 0 0 12px;
  line-height: 1.3;
}

.description {
  font-size: 15px;
  color: var(--muted-foreground);
  line-height: 1.5;
  margin: 0 0 32px;
  max-width: 280px;
}

.description strong {
  color: var(--foreground);
}

.btn-primary {
  width: 100%;
  height: 52px;
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: var(--radius-lg);
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 16px;
  font-family: inherit;
  box-shadow: 0 4px 6px -1px rgba(250, 204, 21, 0.35);
}

.btn-primary:hover {
  opacity: 0.95;
}

.btn-secondary {
  width: 100%;
  height: 52px;
  background-color: transparent;
  color: var(--foreground);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 16px;
  font-family: inherit;
}

.btn-secondary:hover {
  background-color: var(--muted);
}

.text-link {
  font-size: 15px;
  color: var(--primary);
  background: none;
  border: none;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 48px;
  padding: 8px;
  font-family: inherit;
}

.text-link:hover {
  text-decoration: underline;
}

.bottom-link {
  margin-top: auto;
  font-size: 15px;
  color: var(--muted-foreground);
  background: none;
  border: none;
  font-weight: 500;
  cursor: pointer;
  padding: 12px 8px 24px;
  font-family: inherit;
}

.bottom-link:hover {
  color: var(--foreground);
}

.home-indicator {
  width: 134px;
  height: 5px;
  background-color: var(--foreground);
  border-radius: 100px;
  opacity: 0.2;
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

@media (min-width: 481px) {
  .mobile-root {
    border-radius: 24px;
    overflow: hidden;
  }
}
</style>
