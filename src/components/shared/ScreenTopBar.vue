<template>
  <header class="screen-top-bar">
    <AppBackButton v-if="showBack" />
    <div v-else class="screen-top-bar-spacer"></div>
    <AppLogo :size="logoSize" />
  </header>
</template>

<script setup>
import AppBackButton from './AppBackButton.vue'
import AppLogo from './AppLogo.vue'

defineProps({
  showBack: {
    type: Boolean,
    default: true
  },
  logoSize: {
    type: String,
    default: 'small',
    validator: (v) => ['default', 'small'].includes(v)
  }
})
</script>

<style scoped>
.screen-top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;
  margin-bottom: 2px;
}

.screen-top-bar-spacer {
  width: 40px;
  height: 40px;
}
</style>
