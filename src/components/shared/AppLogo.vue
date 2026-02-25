<template>
  <div
    class="app-logo"
    :class="{ 'app-logo--small': size === 'small' }"
    role="button"
    tabindex="0"
    aria-label="4talents"
    @click="goToPaywall"
    @keydown.enter="goToPaywall"
  >
    <span class="app-logo-4">4</span>
    <span class="app-logo-talents">talents</span>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

defineProps({
  size: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'small'].includes(v)
  }
})

const router = useRouter()
const goToPaywall = () => router.push('/screen/19')
</script>

<style scoped>
.app-logo {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: var(--radius-xl, 20px);
  background: rgba(255, 215, 0, 0.06);
  cursor: pointer;
  transition: background 0.2s;
}

.app-logo:hover {
  background: rgba(255, 215, 0, 0.12);
}

.app-logo--small {
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(255, 215, 0, 0.14);
}

.app-logo--small .app-logo-4 {
  font-size: 16px;
}

.app-logo--small .app-logo-talents {
  font-size: 15px;
}

.app-logo-4 {
  font-size: 22px;
  font-weight: 800;
  color: var(--primary);
}

.app-logo-talents {
  font-size: 20px;
  font-weight: 700;
  color: var(--foreground);
}
</style>
