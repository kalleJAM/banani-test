<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>

    <button class="menu-toggle" @click="showMenu = !showMenu">
      ☰
    </button>

    <div class="screen-list-overlay" v-if="showMenu" @click="showMenu = false">
      <div class="screen-list" @click.stop>
        <h2>Alle Screens</h2>
        <div class="screen-list-jump">
          <label for="jump-to-screen">Zu Screen springen:</label>
          <div class="screen-list-jump-row">
            <input
              id="jump-to-screen"
              v-model.number="jumpToScreenId"
              type="number"
              min="1"
              :max="maxScreenId"
              placeholder="z.B. 50"
              @keydown.enter="jumpToScreen"
            />
            <button type="button" class="jump-btn" @click="jumpToScreen">Go</button>
          </div>
        </div>
        <div class="screen-list-items">
          <button
            v-for="screen in displayScreens"
            :key="screen.id + (screen.isBegabung ? '-begabung' : '')"
            type="button"
            @click="goToScreen(screen.path)"
            :class="{ active: isScreenActive(screen) }"
            class="screen-list-item"
          >
            <span class="screen-id">{{ screen.idDisplay }}</span>
            <span class="screen-title">{{ screen.name }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { screens } from './router'

const router = useRouter()
const route = useRoute()
const showMenu = ref(false)
const jumpToScreenId = ref(null)

const maxScreenId = computed(() => Math.max(...screens.map(s => s.id), 1))

const currentScreenId = computed(() => {
  const match = route.path.match(/\/screen\/(\d+)/)
  return match ? parseInt(match[1], 10) : 1
})

const displayScreens = computed(() => {
  const list = []
  for (const s of screens) {
    if (s.id >= 7 && s.id <= 10) {
      if (s.id === 7) {
        list.push({
          id: 7,
          idDisplay: '7–10',
          name: 'Begabungsdiagnostik',
          path: '/screen/7',
          isBegabung: true
        })
      }
    } else {
      list.push({
        ...s,
        idDisplay: String(s.id),
        isBegabung: false
      })
    }
  }
  return list
})

function isScreenActive(screen) {
  if (screen.isBegabung) return currentScreenId.value >= 7 && currentScreenId.value <= 10
  return currentScreenId.value === screen.id
}

function goToScreen(path) {
  router.push(path)
  showMenu.value = false
}

function jumpToScreen() {
  const id = jumpToScreenId.value
  if (id >= 1 && id <= maxScreenId.value && screens.some(s => s.id === id)) {
    router.push(`/screen/${id}`)
    showMenu.value = false
  }
}

const screenIds = screens.map(s => s.id).sort((a, b) => a - b)
const handleKeyPress = (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    const nextIdx = screenIds.indexOf(currentScreenId.value) + 1
    if (nextIdx < screenIds.length) router.push(`/screen/${screenIds[nextIdx]}`)
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    const prevIdx = screenIds.indexOf(currentScreenId.value) - 1
    if (prevIdx >= 0) router.push(`/screen/${screenIds[prevIdx]}`)
  } else if (e.key === 'Escape') {
    showMenu.value = false
  }
}

import { onUnmounted } from 'vue'
window.addEventListener('keydown', handleKeyPress)
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyPress)
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-height: 100vh;
  background: #0a0a0a;
  color: #ffffff;
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.menu-toggle {
  position: fixed;
  top: 16px;
  left: calc(50% + 187.5px + 16px);
  background: rgba(26, 26, 26, 0.9);
  border: 1px solid rgba(255, 215, 0, 0.3);
  color: #ffd700;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.menu-toggle:hover {
  background: rgba(255, 215, 0, 0.1);
  border-color: #ffd700;
}

@media (max-width: 460px) {
  .menu-toggle {
    left: auto;
    right: 16px;
  }
}

.screen-list-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.screen-list {
  background: #1a1a1a;
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 16px;
  padding: 24px;
  max-width: 400px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
}

.screen-list h2 {
  color: #ffd700;
  margin-bottom: 16px;
  font-size: 20px;
}

.screen-list-jump {
  margin-bottom: 16px;
}

.screen-list-jump label {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  margin-bottom: 6px;
}

.screen-list-jump-row {
  display: flex;
  gap: 8px;
  align-items: center;
}

.screen-list-jump input {
  width: 80px;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 14px;
}

.screen-list-jump input:focus {
  outline: none;
  border-color: #ffd700;
}

.jump-btn {
  padding: 8px 14px;
  background: #ffd700;
  color: #111;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
}

.jump-btn:hover {
  opacity: 0.9;
}

.screen-list-items {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.screen-list-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s;
  text-align: left;
  width: 100%;
}

.screen-list-item:hover {
  background: rgba(255, 215, 0, 0.1);
  border-color: rgba(255, 215, 0, 0.3);
}

.screen-list-item.active {
  background: rgba(255, 215, 0, 0.15);
  border-color: #ffd700;
}

.screen-id {
  color: #ffd700;
  font-weight: 700;
  font-size: 14px;
  min-width: 30px;
}

.screen-title {
  color: #ffffff;
  font-size: 14px;
  flex: 1;
}
</style>



