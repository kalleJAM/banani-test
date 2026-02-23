import { createRouter, createWebHistory } from 'vue-router'

const screens = [
  { id: 1, name: 'Startbildschirm', path: '/screen/1', component: 'Startbildschirm' },
  { id: 2, name: 'Rollenwahl', path: '/screen/2', component: 'Rollenwahl' },
  { id: 3, name: 'Talent Info Polished', path: '/screen/3', component: 'TalentInfoPolished' },
  { id: 4, name: 'Eltern Willkommen', path: '/screen/4', component: 'ElternWillkommen' },
  { id: 5, name: 'Account erstellen', path: '/screen/5', component: 'AccountErstellen' },
  { id: 6, name: 'E-Mail Bestätigung', path: '/screen/6', component: 'EmailBestaetigung' },
  { id: 7, name: 'Begabungsdiagnostik Schritt 1', path: '/screen/7', component: 'Begabungsdiagnostik' },
  { id: 8, name: 'Begabungsdiagnostik Schritt 2', path: '/screen/8', component: 'Begabungsdiagnostik' },
  { id: 9, name: 'Begabungsdiagnostik Schritt 3', path: '/screen/9', component: 'Begabungsdiagnostik' },
  { id: 10, name: 'Begabungsdiagnostik Schritt 4', path: '/screen/10', component: 'Begabungsdiagnostik' },
  { id: 11, name: 'Ergebnisse Dashboard', path: '/screen/11', component: 'ErgebnisseDashboard' },
  { id: 12, name: 'Avatar-Auswahl', path: '/screen/12', component: 'AvatarAuswahl' },
  { id: 13, name: 'Avatar konfigurieren', path: '/screen/13', component: 'AvatarKonfigurieren' },
  { id: 14, name: 'Avatar gespeichert', path: '/screen/14', component: 'AvatarGespeichert' },
  { id: 15, name: 'Ergebnis-Optionen', path: '/screen/15', component: 'ErgebnisOptionen' },
  { id: 16, name: 'Prognose', path: '/screen/16', component: 'Prognose' },
  { id: 17, name: 'Sportarten-Übersicht', path: '/screen/17', component: 'SportartenUebersicht' },
  { id: 19, name: 'Wohnzimmer-Test Paywall', path: '/screen/19', component: 'WohnzimmerPaywall' },
  { id: 20, name: 'Kauf erfolgreich', path: '/screen/20', component: 'KaufErfolgreich' },
  { id: 21, name: 'Wohnzimmer-Test Übersicht', path: '/screen/21', component: 'WohnzimmerTestUebersicht' },
  { id: 22, name: 'Körpermaße messen', path: '/screen/22', component: 'KoerpermasseMessen' },
  { id: 23, name: 'Seitwärtssprung', path: '/screen/23', component: 'Seitwaertssprung' },
  { id: 24, name: 'Schlussweitsprung', path: '/screen/24', component: 'Schlussweitsprung' },
  { id: 25, name: 'Tapping-Test', path: '/screen/25', component: 'TappingTest' },
  { id: 26, name: 'Stroop-Test', path: '/screen/26', component: 'StroopTest' },
  { id: 27, name: 'Sport-Avatar Top', path: '/screen/27', component: 'SportAvatarTop' },
  { id: 28, name: 'Golden Picture', path: '/screen/28', component: 'GoldenPicture' },
  { id: 29, name: 'Golden Point Termin', path: '/screen/29', component: 'GoldenPointTermin' }
]

export { screens }

const numberWords = { 1: 'Eins', 2: 'Zwei', 3: 'Drei', 4: 'Vier', 5: 'Fuenf', 6: 'Sechs', 7: 'Sieben', 8: 'Acht', 9: 'Neun', 10: 'Zehn' }
function nameToRouteName (name) {
  const withWords = name.replace(/\d+/g, n => numberWords[parseInt(n, 10)] || n)
  const parts = withWords.split(/[\s\-]+/).filter(Boolean)
  return parts.map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')).join('')
}

const screenRoutes = screens.map(screen => ({
  path: screen.path,
  name: nameToRouteName(screen.name),
  component: () => import(`../components/screens/${screen.component}.vue`),
  meta: {
    title: screen.name,
    screenId: screen.id
  }
}))

const routes = [
  {
    path: '/',
    redirect: '/screen/1'
  },
  ...screenRoutes,
  {
    path: '/:pathMatch(.*)*',
    redirect: '/screen/1'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} - 4talents`
  }
  next()
})

export default router
