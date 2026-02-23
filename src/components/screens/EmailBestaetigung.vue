<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents E-Mail Bestätigung">
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

        <section class="verification-content">
          <header class="verification-header">
            <h1 class="verification-title">📬 Prüfe Dein Postfach</h1>
            <p class="verification-body">
              Wir haben Dir einen Bestätigungscode an
              <span class="verification-email">{{ email }}</span>
              gesendet.
            </p>
          </header>

          <section class="code-section">
            <div class="code-input-row" aria-label="Bestätigungscode eingeben">
              <input
                v-for="(digit, index) in code"
                :key="index"
                v-model="code[index]"
                ref="codeInputs"
                type="text"
                class="code-box"
                maxlength="1"
                @input="handleCodeInput(index, $event)"
                @keydown="handleCodeKeydown(index, $event)"
                @paste="handlePaste"
              />
            </div>
          </section>

          <section class="resend-section">
            <span class="resend-label">Code nicht erhalten?</span>
            <span 
              class="resend-link" 
              :class="{ disabled: resendCooldown > 0 }"
              @click="handleResend"
            >
              Erneut senden {{ resendCooldown > 0 ? `(${resendCooldown}s)` : '' }}
            </span>
          </section>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const email = ref(route.query.email || 'max@email.de')
const code = ref(['', '', '', '', '', ''])
const codeInputs = ref([])
const resendCooldown = ref(0)

const goToPrev = () => {
  router.push('/screen/5')
}

const goToSports = () => {
  router.push('/screen/19')
}

onMounted(() => {
  nextTick(() => {
    if (codeInputs.value[0]) {
      codeInputs.value[0].focus()
    }
  })
})

const handleCodeInput = (index, event) => {
  const value = event.target.value.replace(/[^0-9]/g, '')
  code.value[index] = value
  
  if (value && index < 5) {
    nextTick(() => {
      if (codeInputs.value[index + 1]) {
        codeInputs.value[index + 1].focus()
      }
    })
  }
  
  if (code.value.every(d => d !== '') && code.value.join('').length === 6) {
    verifyCode()
  }
}

const handleCodeKeydown = (index, event) => {
  if (event.key === 'Backspace' && !code.value[index] && index > 0) {
    nextTick(() => {
      if (codeInputs.value[index - 1]) {
        codeInputs.value[index - 1].focus()
      }
    })
  }
}

const handlePaste = (event) => {
  event.preventDefault()
  const pastedData = event.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, 6)
  pastedData.split('').forEach((digit, index) => {
    if (index < 6) {
      code.value[index] = digit
    }
  })
  nextTick(() => {
    if (codeInputs.value[5]) {
      codeInputs.value[5].focus()
    }
    if (code.value.every(d => d !== '') && code.value.join('').length === 6) {
      verifyCode()
    }
  })
}

const verifyCode = () => {
  const codeString = code.value.join('')
  if (codeString.length === 6) {
    nextTick(() => {
      router.replace({ path: '/screen/7' })
    })
  }
}

const handleResend = () => {
  if (resendCooldown.value > 0) return
  
  resendCooldown.value = 60
  const interval = setInterval(() => {
    resendCooldown.value--
    if (resendCooldown.value <= 0) {
      clearInterval(interval)
    }
  }, 1000)
  
  alert('Code wurde erneut gesendet')
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
  background:
    radial-gradient(
      circle at top,
      rgba(255, 215, 0, 0.08),
      transparent 55%
    ),
    var(--background);
  color: var(--foreground);
  min-height: 812px;
  display: flex;
}

.screen {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 24px 20px 24px 20px;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
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

.verification-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.logo-mark-center {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border-radius: 999px;
  background: rgba(255, 215, 0, 0.16);
}

.logo-4 {
  font-size: 18px;
  font-weight: 800;
  color: var(--primary);
}

.logo-talents {
  font-size: 17px;
  font-weight: 700;
  color: var(--foreground);
}

.verification-header {
  text-align: center;
  max-width: 280px;
}

.verification-title {
  margin: 0 0 8px 0;
  font-size: 22px;
  font-weight: 800;
}

.verification-body {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: var(--muted-foreground);
}

.verification-email {
  color: var(--foreground);
  font-weight: 600;
}

.code-section {
  width: 100%;
  display: flex;
  justify-content: center;
}

.code-input-row {
  display: flex;
  gap: 10px;
}

.code-box {
  width: 44px;
  height: 56px;
  border-radius: var(--radius-md);
  background-color: var(--input);
  border: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: var(--foreground);
  text-align: center;
  outline: none;
  transition: all 0.2s;
}

.code-box:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 1px rgba(255, 215, 0, 0.5);
}

.code-box:first-child:focus,
.code-box:first-child:not(:placeholder-shown) {
  border-color: var(--primary);
  box-shadow: 0 0 0 1px rgba(255, 215, 0, 0.5);
}

.resend-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 13px;
}

.resend-label {
  color: var(--muted-foreground);
}

.resend-link {
  color: var(--primary);
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

.resend-link:hover:not(.disabled) {
  opacity: 0.8;
}

.resend-link.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

