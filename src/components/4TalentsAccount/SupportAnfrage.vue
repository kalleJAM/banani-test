<template>
  <div class="screen-wrapper">
    <div class="mobile-root">
      <header class="nav-bar">
        <button type="button" class="back-btn" @click="goBack" aria-label="Zurück">
          <iconify-icon icon="lucide:chevron-left" class="back-icon" aria-hidden="true" />
        </button>
        <h1 class="nav-title">Support</h1>
      </header>

      <div class="content">
        <div class="form-header">
          <h2 class="form-headline">Erziehungsberechtigung nachweisen</h2>
          <p class="form-desc">
            Bitte fülle das Formular aus und lade einen Nachweis hoch, um
            Zugriff auf das Spielerprofil zu erhalten.
          </p>
        </div>

        <div class="form-group">
          <label class="label">Name des Erziehungsberechtigten</label>
          <input
            v-model="nameErziehungsberechtigter"
            type="text"
            class="input-field"
            placeholder="z.B. Sarah Müller"
          />
        </div>

        <div class="form-group">
          <label class="label">Name des Spielers</label>
          <input
            v-model="nameSpieler"
            type="text"
            class="input-field"
            placeholder="z.B. Leo Schmidt"
          />
        </div>

        <div class="form-group">
          <label class="label">E-Mail-Adresse</label>
          <input
            v-model="email"
            type="email"
            class="input-field"
            placeholder="sarah.mueller@example.com"
          />
        </div>

        <div class="form-group">
          <label class="label">Grund der Anfrage</label>
          <div class="select-field">
            <span>{{ grundLabel }}</span>
            <iconify-icon icon="lucide:chevron-down" class="select-icon" aria-hidden="true" />
          </div>
        </div>

        <div class="form-group">
          <label class="label">Dokument hochladen</label>
          <div class="upload-area" @click="triggerUpload">
            <iconify-icon icon="lucide:upload-cloud" class="upload-icon" aria-hidden="true" />
            <span class="upload-text">Datei auswählen oder hierher ziehen</span>
            <span class="upload-hint">Geburtsurkunde, Ausweis etc. (PDF, JPG, PNG)</span>
          </div>
        </div>

        <button type="button" class="submit-btn" @click="onSubmit">
          Anfrage absenden
        </button>
      </div>

      <div class="home-indicator" aria-hidden="true"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const nameErziehungsberechtigter = ref('Sarah Müller')
const nameSpieler = ref('Leo Schmidt')
const email = ref('sarah.mueller@example.com')
const grund = ref('Berechtigung nachweisen')

const grundLabel = computed(() => grund.value)

const goBack = () => {
  router.push('/screen/46')
}

const triggerUpload = () => {
  // Platzhalter – später Datei-Upload
}

const onSubmit = () => {
  router.push('/screen/38')
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

.nav-bar {
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}

.back-btn {
  background: none;
  border: none;
  padding: 8px;
  margin-left: -8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--foreground);
}

.back-icon {
  font-size: 24px;
}

.nav-title {
  font-size: 16px;
  font-weight: 600;
  margin-left: 8px;
  flex: 1;
  margin: 0;
}

.content {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-header .form-headline {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 8px;
  color: var(--foreground);
}

.form-header .form-desc {
  font-size: 14px;
  color: var(--muted-foreground);
  margin: 0;
  line-height: 1.5;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label {
  font-size: 14px;
  font-weight: 500;
  color: var(--foreground);
}

.input-field {
  height: 48px;
  background-color: var(--input);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 0 16px;
  font-size: 15px;
  color: var(--foreground);
  width: 100%;
  outline: none;
  font-family: inherit;
}

.input-field:focus {
  border-color: var(--primary);
}

.select-field {
  height: 48px;
  background-color: var(--input);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 0 16px;
  font-size: 15px;
  color: var(--foreground);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.select-icon {
  font-size: 20px;
  color: var(--muted-foreground);
}

.upload-area {
  border: 2px dashed var(--border);
  border-radius: var(--radius-md);
  background-color: var(--muted);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  cursor: pointer;
  transition: border-color 0.2s;
}

.upload-area:hover {
  border-color: var(--primary);
}

.upload-icon {
  color: var(--muted-foreground);
  font-size: 32px;
}

.upload-text {
  font-size: 14px;
  font-weight: 500;
  color: var(--foreground);
}

.upload-hint {
  font-size: 12px;
  color: var(--muted-foreground);
}

.submit-btn {
  height: 52px;
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: var(--radius-md);
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 12px;
  width: 100%;
  font-family: inherit;
  box-shadow: 0 4px 6px -1px rgba(250, 204, 21, 0.35);
}

.submit-btn:hover {
  opacity: 0.95;
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
