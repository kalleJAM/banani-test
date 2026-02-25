<template>
  <button
    type="button"
    class="app-back-button"
    aria-label="Zurück"
    @click="goBack"
  >
    <iconify-icon
      icon="lucide:arrow-left"
      class="app-back-icon"
    ></iconify-icon>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => router.back()
</script>

<style scoped>
.app-back-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: var(--radius-md, 10px);
  background-color: rgba(255, 255, 255, 0.06);
  color: var(--foreground);
  cursor: pointer;
  transition: background-color 0.2s;
}

.app-back-button:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.app-back-icon {
  font-size: 22px;
}
</style>
