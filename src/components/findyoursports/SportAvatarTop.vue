<template>
  <div class="screen-wrapper">
    <div id="app-root" class="app-root">
      <main class="screen" aria-label="4talents Sport-Avatar Basketball">
        <header class="header">
          <ScreenTopBar />
        </header>

        <section class="content centered-content">
          <div class="title-block title-centered">
            <h1 class="title highlight">
              <span class="title-emoji">🏀 Sport-Avatar</span>
              <span>Dein Top-Sport: Basketball</span>
            </h1>
            <p class="teaser">
              Dieser Avatar zeigt, wie dein Kind in seiner bestpassenden
              Sportart aussehen könnte.
            </p>
          </div>

          <section class="card avatar-card" aria-label="Basketball-Avatar für Max">
            <div class="avatar-frame">
              <div class="avatar-bg-pattern"></div>
              <div class="avatar-image-wrap">
                <img
                  class="avatar-hero-image"
                  alt="Junge in Basketball-Kleidung"
                  src="https://storage.googleapis.com/banani-generated-images/generated-images/e1ac1d32-a34c-45a2-8521-930673b8c532.jpg"
                />
              </div>
              <div class="avatar-highlight-ring"></div>
            </div>

            <div class="avatar-meta">
              <div class="meta-main">
                <div class="meta-row">
                  <span class="meta-label">Höchstes Matching</span>
                  <span class="meta-value">Basketball</span>
                </div>
                <div class="meta-row subtle">
                  <span class="meta-label">Profil</span>
                  <span class="meta-value">Junge, dynamisch, sprungstark</span>
                </div>
              </div>
              <div class="badge-pill">
                <span class="badge-dot"></span>
                <span class="badge-text">Visualisierung deines Talents</span>
              </div>
            </div>
          </section>

          <section class="card info-card" aria-label="Avatar-Erklärung">
            <h2 class="section-heading">Was zeigt dieser Avatar?</h2>
            <p class="info-text">
              Der Avatar übersetzt deine Testergebnisse in ein Bild. Er stellt
              einen Jungen dar, der für Basketball besonders gut geeignet sein
              könnte: schnell, reaktionsstark und mit guter Sprungkraft.
            </p>
            <p class="info-text subtle-text">
              Eltern können diese Visualisierung nutzen, um mit ihrem Kind
              über passende Sportarten zu sprechen und gemeinsam die nächsten
              Schritte zu planen.
            </p>
          </section>
        </section>

        <footer class="footer footer-centered">
          <button class="primary-button" type="button" @click="handleContinue">
            <span class="button-label">✓ Avatar merken &amp; Sportempfehlung ansehen</span>
          </button>
          <div class="progress-dots" aria-label="Fortschritt 8 von 9">
            <span v-for="i in 8" :key="i" class="dot active"></span>
            <span class="dot"></span>
          </div>
        </footer>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ScreenTopBar } from '../shared'

const router = useRouter()


function handleContinue() {
  router.push('/screen/11')
}
</script>

<style scoped>
.app-root {
  background:
    radial-gradient(circle at top, rgba(255, 215, 0, 0.18), transparent 60%),
    radial-gradient(circle at bottom right, rgba(255, 215, 0, 0.1), transparent 55%),
    var(--background);
  color: var(--foreground);
}
.screen {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 16px 20px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  padding-bottom: 8px;
}
.centered-content { align-items: center; }
.footer { padding-top: 10px; display: flex; flex-direction: column; gap: 10px; }
.footer-centered { align-items: center; }

.back-button {
  background: transparent;
  border: none;
  padding: 4px 0;
  color: var(--foreground);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
.back-arrow { white-space: nowrap; }
.header-logo { padding: 4px 14px; cursor: pointer; }
.logo-mark { display: inline-flex; align-items: center; gap: 6px; border-radius: 999px; background: rgba(255, 215, 0, 0.16); }
.logo-4 { font-size: 16px; font-weight: 800; color: var(--primary); }
.logo-talents { font-size: 15px; font-weight: 700; color: var(--foreground); }

.title-block { display: flex; flex-direction: column; gap: 6px; }
.title-centered { align-items: center; text-align: center; }
.title {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 22px;
  font-weight: 800;
}
.title.highlight { color: var(--primary); }
.title-emoji { font-size: 14px; color: var(--muted-foreground); }
.teaser { margin: 0; font-size: 14px; color: var(--muted-foreground); }

.card {
  border-radius: var(--radius-lg);
  background: var(--card);
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 320px;
}
.avatar-card {
  background:
    radial-gradient(circle at top left, rgba(255, 215, 0, 0.18), transparent 55%),
    var(--card);
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.7);
}
.avatar-frame {
  position: relative;
  border-radius: var(--radius-xl);
  background: #050505;
  padding: 10px;
  overflow: hidden;
}
.avatar-bg-pattern {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at top left, rgba(255, 215, 0, 0.12), transparent 55%),
    radial-gradient(circle at bottom right, rgba(255, 215, 0, 0.08), transparent 60%);
  opacity: 0.9;
}
.avatar-image-wrap {
  position: relative;
  border-radius: calc(var(--radius-xl) - 6px);
  overflow: hidden;
  border: 1px solid rgba(255, 215, 0, 0.35);
}
.avatar-hero-image { width: 100%; display: block; }
.avatar-highlight-ring {
  position: absolute;
  inset: 12px;
  border-radius: calc(var(--radius-xl) - 2px);
  border: 1px solid rgba(255, 215, 0, 0.35);
  pointer-events: none;
}
.avatar-meta { display: flex; flex-direction: column; gap: 10px; }
.meta-main { display: flex; flex-direction: column; gap: 4px; }
.meta-row { display: flex; justify-content: space-between; font-size: 13px; }
.meta-row.subtle { color: var(--muted-foreground); }
.meta-label { color: var(--muted-foreground); }
.meta-value { font-weight: 600; }
.badge-pill {
  align-self: flex-start;
  padding: 4px 10px;
  border-radius: 999px;
  background-image: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 215, 0, 0.45));
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.badge-dot { width: 6px; height: 6px; border-radius: 999px; background-color: var(--primary); }
.badge-text { font-size: 11px; color: var(--primary); }

.section-heading { margin: 0 0 4px 0; font-size: 14px; font-weight: 700; }
.info-card { text-align: left; }
.info-text { margin: 0; font-size: 13px; color: var(--card-foreground); }
.info-text + .info-text { margin-top: 6px; }
.subtle-text { color: var(--muted-foreground); }

.primary-button {
  width: 100%;
  max-width: 320px;
  border: none;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at top left, #ffffff, var(--primary));
  color: var(--primary-foreground);
  padding: 13px 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 700;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.85);
  cursor: pointer;
}
.button-label { text-align: center; width: 100%; white-space: normal; line-height: 1.25; }
.progress-dots { display: flex; justify-content: center; gap: 6px; }
.dot { width: 10px; height: 6px; border-radius: 999px; background-color: var(--muted); }
.dot.active { background-color: var(--primary); }
</style>
