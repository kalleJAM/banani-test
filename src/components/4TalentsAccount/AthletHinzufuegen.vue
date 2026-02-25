<template>
  <div class="screen-wrapper">
    <div class="mobile-root">
      <header class="header">
        <button type="button" class="back-btn" @click="goBack" aria-label="Zurück">
          <iconify-icon icon="lucide:arrow-left" class="back-icon" aria-hidden="true" />
        </button>
        <h1 class="header-title">Athlet hinzufügen</h1>
      </header>

      <div class="content">
        <div class="avatar-upload" @click="triggerAvatarUpload">
          <div class="avatar-placeholder">
            <iconify-icon icon="lucide:camera" class="avatar-icon" aria-hidden="true" />
          </div>
          <span class="avatar-label">Foto hochladen</span>
        </div>

        <div class="form-group">
          <label class="form-label">Vorname</label>
          <input
            v-model="vorname"
            type="text"
            class="form-input"
            placeholder="z.B. Leo"
          />
        </div>

        <div class="form-group">
          <label class="form-label">Nachname</label>
          <input
            v-model="nachname"
            type="text"
            class="form-input"
            placeholder="z.B. Schmidt"
          />
        </div>

        <div class="form-group">
          <label class="form-label">Geburtsdatum</label>
          <input
            v-model="geburtsdatum"
            type="date"
            class="form-input"
          />
        </div>

        <div class="form-group">
          <label class="form-label">Geschlecht</label>
          <div class="radio-group">
            <button
              type="button"
              class="radio-option"
              :class="{ active: geschlecht === 'm' }"
              @click="geschlecht = 'm'"
            >
              Männlich
            </button>
            <button
              type="button"
              class="radio-option"
              :class="{ active: geschlecht === 'w' }"
              @click="geschlecht = 'w'"
            >
              Weiblich
            </button>
            <button
              type="button"
              class="radio-option"
              :class="{ active: geschlecht === 'd' }"
              @click="geschlecht = 'd'"
            >
              Divers
            </button>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Sportart</label>
          <select v-model="sportart" class="form-select">
            <option value="Fußball">Fußball</option>
            <option value="Basketball">Basketball</option>
            <option value="Handball">Handball</option>
            <option value="Leichtathletik">Leichtathletik</option>
            <option value="Tennis">Tennis</option>
          </select>
        </div>

        <button type="button" class="save-btn" @click="onSave">
          Athlet speichern
        </button>
      </div>

      <div class="home-indicator" aria-hidden="true"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const vorname = ref('')
const nachname = ref('')
const geburtsdatum = ref('2015-01-01')
const geschlecht = ref('m')
const sportart = ref('Fußball')

const goBack = () => {
  router.push('/screen/38')
}

const triggerAvatarUpload = () => {
  // Platzhalter – später Datei-Upload
}

const onSave = () => {
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

.header {
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}

.back-btn {
  background: none;
  border: none;
  padding: 8px;
  margin-left: -8px;
  cursor: pointer;
  color: var(--foreground);
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-icon {
  font-size: 24px;
}

.header-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  flex: 1;
  color: var(--foreground);
}

.content {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.avatar-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 0;
  cursor: pointer;
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--muted);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted-foreground);
  border: 1px dashed var(--muted-foreground);
}

.avatar-icon {
  font-size: 32px;
}

.avatar-label {
  font-size: 14px;
  color: var(--primary);
  font-weight: 500;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 14px;
  font-weight: 500;
  color: var(--foreground);
}

.form-input {
  height: 48px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 0 16px;
  font-size: 16px;
  font-family: inherit;
  background-color: var(--input);
  color: var(--foreground);
  outline: none;
  transition: border-color 0.2s;
}

.form-input:focus {
  border-color: var(--primary);
}

.form-input::placeholder {
  color: var(--muted-foreground);
}

.form-select {
  height: 48px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 0 16px;
  padding-right: 40px;
  font-size: 16px;
  font-family: inherit;
  background-color: var(--input);
  color: var(--foreground);
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239ca3af%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  cursor: pointer;
}

.radio-group {
  display: flex;
  background: var(--muted);
  padding: 4px;
  border-radius: var(--radius-md);
  gap: 4px;
}

.radio-option {
  flex: 1;
  text-align: center;
  padding: 10px 8px;
  font-size: 14px;
  font-weight: 500;
  border-radius: var(--radius-sm);
  cursor: pointer;
  color: var(--muted-foreground);
  background: none;
  border: none;
  font-family: inherit;
  transition: background 0.2s, color 0.2s;
}

.radio-option:hover {
  color: var(--foreground);
}

.radio-option.active {
  background: var(--card);
  color: var(--foreground);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.save-btn {
  margin-top: auto;
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: var(--radius-lg);
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  font-family: inherit;
  transition: opacity 0.2s;
}

.save-btn:hover {
  opacity: 0.95;
}

.home-indicator {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 134px;
  height: 5px;
  background-color: var(--foreground);
  border-radius: 100px;
  opacity: 0.2;
  z-index: 10;
}

@media (min-width: 481px) {
  .mobile-root {
    border-radius: 24px;
    overflow: hidden;
  }
}
</style>
