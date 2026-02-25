<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Rollenwahl">
        <section class="top-bar">
          <div class="top-left" @click="goToPrev">
            <div class="icon-wrapper">
              <iconify-icon
                icon="lucide:arrow-left"
                style="font-size: 22px; color: var(--foreground)"
              ></iconify-icon>
            </div>
          </div>
          <div class="top-right" @click="goToSports">
            <div class="logo-mark-small">
              <span class="logo-4">4</span><span class="logo-talents">talents</span>
            </div>
          </div>
        </section>

        <section class="content">
          <div class="heading-block">
            <h1 class="headline">Wer bist Du?</h1>
            <p class="subheadline">
              Wähle aus, ob du selbst das Talent bist oder ob du für dein Kind
              startest.
            </p>
          </div>

          <div class="role-cards">
            <div 
              class="role-card" 
              :class="{ 'role-card-selected': selectedRole === 'talent' }"
              @click="selectRole('talent')"
            >
              <div class="role-card-left-accent"></div>
              <div class="role-card-body">
                <div class="role-icon">
                  <div class="icon-wrapper">
                    <iconify-icon
                      icon="lucide:medal"
                      style="font-size: 24px; color: var(--primary)"
                    ></iconify-icon>
                  </div>
                </div>
                <div class="role-text">
                  <div class="role-label-main">🧒 Ich bin ein Talent</div>
                  <div class="role-label-sub">
                    Ich möchte meinen Sport finden und zeigen, was ich kann.
                  </div>
                </div>
              </div>
            </div>

            <div 
              class="role-card" 
              :class="{ 'role-card-selected': selectedRole === 'parent' }"
              @click="selectRole('parent')"
            >
              <div class="role-card-left-accent"></div>
              <div class="role-card-body">
                <div class="role-icon">
                  <div class="icon-wrapper">
                    <iconify-icon
                      icon="lucide:users"
                      style="font-size: 24px; color: var(--primary)"
                    ></iconify-icon>
                  </div>
                </div>
                <div class="role-text">
                  <div class="role-label-main">👨‍👩‍👧 Ich bin Elternteil</div>
                  <div class="role-label-sub">
                    Ich suche den passenden Sport für mein Kind.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedRole = ref(null)

const goToPrev = () => {
  router.back()
}

const goToSports = () => {
  router.push('/screen/19')
}

const selectRole = (role) => {
  selectedRole.value = role
  setTimeout(() => {
    if (role === 'talent') {
      router.push('/screen/3')
    } else if (role === 'parent') {
      router.push('/screen/4')
    }
  }, 300)
}
</script>

<style scoped>
.screen {
  padding: 24px 24px 32px 24px;
  overflow: hidden;
}

.logo-mark-small {
  padding: 6px 10px;
  background: rgba(255, 215, 0, 0.06);
}

.headline {
  margin: 0;
  font-size: 26px;
  line-height: 1.2;
  font-weight: 800;
  color: var(--foreground);
}

.subheadline {
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 400;
  color: var(--muted-foreground);
}

.role-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.role-card {
  display: flex;
  background-color: var(--card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid #222222;
  box-shadow: 0 0 14px rgba(255, 215, 0, 0.18);
  cursor: pointer;
  transition: all 0.3s ease;
}

.role-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.25);
}

.role-card-selected {
  border-color: var(--primary);
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
}

.role-card-left-accent {
  width: 6px;
  background-color: var(--primary);
}

.role-card-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px 18px 22px 18px;
  gap: 14px;
}

.role-icon {
  flex-shrink: 0;
}

.role-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.role-label-main {
  font-size: 17px;
  font-weight: 700;
  color: var(--card-foreground);
}

.role-label-sub {
  font-size: 14px;
  font-weight: 400;
  color: var(--muted-foreground);
}

.dot {
  width: 5px;
  height: 5px;
  background-color: #333333;
}
</style>

