<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Startbildschirm">
        <div class="bg-pattern">
          <div class="bg-pattern-overlay"></div>
          <div class="bg-sport-photo">
            <img
              data-aspect-ratio="3:4"
              alt="Kinder beim Sport"
              src="https://storage.googleapis.com/banani-generated-images/generated-images/855f9a19-c454-4b77-9b32-124f2be4694c.jpg"
            />
          </div>
        </div>

        <section class="top-logo">
          <div class="logo-mark" @click="goToSports">
            <span class="logo-4">4</span><span class="logo-talents">talents</span>
          </div>
        </section>

        <section class="content">
          <div class="entry-block entry-block-primary">
            <p class="entry-label">Für alle, die uns zufällig entdecken</p>
            <h1 class="headline">
              Finde deinen Sport & zeig, was in dir steckt
            </h1>
            <p class="subheadline">
              Wir helfen dir, Sportarten zu entdecken, die richtig Spaß machen
              und zu deinen Stärken passen.
            </p>

            <div class="cta-wrapper">
              <div class="primary-cta" @click="handleStart">
                <span class="primary-cta-label">
                  Starte jetzt & entdecke deine Begabung
                </span>
              </div>
            </div>
          </div>

          <div class="entry-divider">
            <div class="divider-line"></div>
            <span class="divider-text">oder</span>
            <div class="divider-line"></div>
          </div>

          <div class="entry-block entry-block-org">
            <p class="entry-label">
              Für alle, die über eine Sportorganisation kommen
            </p>
            <h2 class="headline-org">
              Du bist über einen Verein, Verband oder eine Schule hier?
            </h2>
            <p class="subheadline-org">
              Super! Dann kannst du den 4talents Account gemeinsam mit deiner
              Sportorganisation nutzen.
            </p>
            <div class="cta-wrapper">
              <div class="secondary-cta" @click="handleOrgStart">
                <span class="secondary-cta-label">
                  Mit Sportorganisation starten
                </span>
              </div>
            </div>
          </div>
        </section>

        <section class="bottom-progress">
          <div class="dots" aria-label="Onboarding Fortschritt">
            <span class="dot dot-active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToSports = () => {
  router.push('/screen/19')
}

const handleStart = () => {
  router.push('/screen/2')
}

const handleOrgStart = () => {
  router.push('/screen/30')
}
</script>

<style scoped>
.screen {
  padding: 32px 24px 32px 24px;
  overflow: hidden;
}

.top-logo {
  padding-top: 4px;
  padding-bottom: 32px;
  position: relative;
  z-index: 20;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  position: relative;
  z-index: 5;
}

.bottom-progress {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 24px;
  position: relative;
  z-index: 5;
}

.logo-mark {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: var(--radius-xl);
  background: rgba(255, 215, 0, 0.06);
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  z-index: 30;
}

.logo-mark:hover {
  background: rgba(255, 215, 0, 0.12);
}

.logo-4 {
  font-size: 22px;
  font-weight: 800;
  color: var(--primary);
}

.logo-talents {
  font-size: 20px;
  font-weight: 700;
  color: var(--foreground);
}

.headline {
  font-size: 30px;
  line-height: 1.15;
  font-weight: 800;
  color: var(--foreground);
  margin: 0;
}

.subheadline {
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 400;
  color: var(--muted-foreground);
}

.entry-label {
  margin: 0 0 8px 0;
  font-size: 13px;
  font-weight: 500;
  color: var(--muted-foreground);
}

.headline-org {
  margin: 0 0 6px 0;
  font-size: 20px;
  line-height: 1.3;
  font-weight: 700;
  color: var(--foreground);
}

.subheadline-org {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  color: var(--muted-foreground);
}

.cta-wrapper {
  margin-top: 12px;
}

.primary-cta {
  width: 100%;
  padding: 14px 18px;
  border-radius: var(--radius-lg);
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 22px rgba(255, 215, 0, 0.4);
  cursor: pointer;
  transition: all 0.2s ease;
}

.primary-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 28px rgba(255, 215, 0, 0.5);
}

.primary-cta:active {
  transform: translateY(0);
}

.primary-cta-label {
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-foreground);
  white-space: normal;
  text-align: center;
}

.secondary-cta {
  width: 100%;
  padding: 12px 16px;
  border-radius: var(--radius-lg);
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.secondary-cta:hover {
  background-color: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.24);
}

.secondary-cta-label {
  font-size: 15px;
  font-weight: 600;
  color: var(--foreground);
  white-space: nowrap;
}

.dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 5px;
  height: 5px;
  border-radius: 999px;
  background-color: #333333;
}

.dot-active {
  background-color: var(--primary);
}

.entry-block {
  position: relative;
  padding: 16px 14px 16px 14px;
  border-radius: var(--radius-xl);
  background-color: rgba(0, 0, 0, 0.46);
  backdrop-filter: blur(10px);
}

.entry-block-primary {
  border: 1px solid rgba(255, 215, 0, 0.6);
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.7);
}

.entry-block-org {
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.entry-divider {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}

.divider-line {
  flex: 1;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
}

.divider-text {
  font-size: 12px;
  color: var(--muted-foreground);
}

.bg-pattern {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.bg-pattern-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.24;
  background-image:
    radial-gradient(circle at 20% 10%, #1a1a1a 0, transparent 45%),
    radial-gradient(circle at 80% 20%, #1a1a1a 0, transparent 50%),
    radial-gradient(circle at 10% 70%, #1a1a1a 0, transparent 55%),
    radial-gradient(circle at 90% 80%, #1a1a1a 0, transparent 50%),
    linear-gradient(
      135deg,
      transparent 0 20%,
      #111111 20% 21%,
      transparent 21% 40%,
      #111111 40% 41%,
      transparent 41% 60%,
      #111111 60% 61%,
      transparent 61% 80%,
      #111111 80% 81%,
      transparent 81% 100%
    );
  mix-blend-mode: normal;
}

.bg-sport-photo {
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0.22;
}

.bg-sport-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(10%);
}
</style>
