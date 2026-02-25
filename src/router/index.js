import { createRouter, createWebHistory } from 'vue-router'

const screens = [
  { id: 1, name: 'Startbildschirm', path: '/screen/1', component: 'findyoursports/Startbildschirm' },
  { id: 2, name: 'Rollenwahl', path: '/screen/2', component: 'findyoursports/Rollenwahl' },
  { id: 3, name: 'Talent Info Polished', path: '/screen/3', component: 'findyoursports/TalentInfoPolished' },
  { id: 4, name: 'Eltern Willkommen', path: '/screen/4', component: 'findyoursports/ElternWillkommen' },
  { id: 5, name: 'Account erstellen', path: '/screen/5', component: 'findyoursports/AccountErstellen' },
  { id: 6, name: 'E-Mail Bestätigung', path: '/screen/6', component: 'findyoursports/EmailBestaetigung' },
  { id: 7, name: 'Begabungsdiagnostik Schritt 1', path: '/screen/7', component: 'findyoursports/Begabungsdiagnostik' },
  { id: 8, name: 'Begabungsdiagnostik Schritt 2', path: '/screen/8', component: 'findyoursports/Begabungsdiagnostik' },
  { id: 9, name: 'Begabungsdiagnostik Schritt 3', path: '/screen/9', component: 'findyoursports/Begabungsdiagnostik' },
  { id: 10, name: 'Begabungsdiagnostik Schritt 4', path: '/screen/10', component: 'findyoursports/Begabungsdiagnostik' },
  { id: 11, name: 'Ergebnisse Dashboard', path: '/screen/11', component: 'findyoursports/ErgebnisseDashboard' },
  { id: 12, name: 'Avatar-Auswahl', path: '/screen/12', component: 'findyoursports/AvatarAuswahl' },
  { id: 13, name: 'Avatar konfigurieren', path: '/screen/13', component: 'findyoursports/AvatarKonfigurieren' },
  { id: 14, name: 'Avatar gespeichert', path: '/screen/14', component: 'findyoursports/AvatarGespeichert' },
  { id: 15, name: 'Ergebnis-Optionen', path: '/screen/15', component: 'findyoursports/ErgebnisOptionen' },
  { id: 16, name: 'Prognose', path: '/screen/16', component: 'findyoursports/Prognose' },
  { id: 17, name: 'Sportarten-Übersicht', path: '/screen/17', component: 'findyoursports/SportartenUebersicht' },
  { id: 19, name: 'Wohnzimmer-Test Paywall', path: '/screen/19', component: 'findyoursports/WohnzimmerPaywall' },
  { id: 20, name: 'Kauf erfolgreich', path: '/screen/20', component: 'findyoursports/KaufErfolgreich' },
  { id: 21, name: 'Wohnzimmer-Test Übersicht', path: '/screen/21', component: 'findyoursports/WohnzimmerTestUebersicht' },
  { id: 22, name: 'Körpermaße messen', path: '/screen/22', component: 'findyoursports/KoerpermasseMessen' },
  { id: 23, name: 'Seitwärtssprung', path: '/screen/23', component: 'findyoursports/Seitwaertssprung' },
  { id: 24, name: 'Schlussweitsprung', path: '/screen/24', component: 'findyoursports/Schlussweitsprung' },
  { id: 25, name: 'Tapping-Test', path: '/screen/25', component: 'findyoursports/TappingTest' },
  { id: 26, name: 'Stroop-Test', path: '/screen/26', component: 'findyoursports/StroopTest' },
  { id: 27, name: 'Sport-Avatar Top', path: '/screen/27', component: 'findyoursports/SportAvatarTop' },
  { id: 28, name: 'Golden Picture', path: '/screen/28', component: 'findyoursports/goldenPicture' },
  { id: 29, name: 'Golden Point Termin', path: '/screen/29', component: 'findyoursports/GoldenPointTermin' },
  { id: 30, name: 'QR- oder Link-Start', path: '/screen/30', component: 'findyoursports/QrLinkStart' },
  { id: 31, name: 'Sport-Detail', path: '/screen/31', component: 'findyoursports/SportDetail' },
  { id: 32, name: 'Wohnzimmer-Test Kaufabschluss', path: '/screen/32', component: 'findyoursports/WohnzimmerCheckout' },
  { id: 33, name: 'Sport-Matching Detail', path: '/screen/33', component: 'findyoursports/SportMatchingDetail' },
  { id: 34, name: 'Golden Point Payment', path: '/screen/34', component: 'findyoursports/GoldenPointPayment' },
  { id: 35, name: 'Golden Point Zahlung erfolgreich', path: '/screen/35', component: 'findyoursports/GoldenPointPaymentSuccess' },
  { id: 36, name: '4talents Start (Landing)', path: '/screen/36', component: '4TalentsAccount/StartLanding' }
]

export { screens }

const screenModules = import.meta.glob('../components/findyoursports/*.vue')
const accountModules = import.meta.glob('../components/4TalentsAccount/*.vue')

function getScreenComponent (componentPath) {
  const key = `../components/${componentPath}.vue`
  const loader = screenModules[key] || accountModules[key]
  if (!loader) {
    console.warn('Screen component not found:', key)
    return () => Promise.resolve({ template: '<div>Screen nicht gefunden</div>' })
  }
  return loader
}

const numberWords = { 1: 'Eins', 2: 'Zwei', 3: 'Drei', 4: 'Vier', 5: 'Fuenf', 6: 'Sechs', 7: 'Sieben', 8: 'Acht', 9: 'Neun', 10: 'Zehn' }
function nameToRouteName (name) {
  const withWords = name.replace(/\d+/g, n => numberWords[parseInt(n, 10)] || n)
  const parts = withWords.split(/[\s\-]+/).filter(Boolean)
  return parts.map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')).join('')
}

const screenRoutes = screens.map(screen => ({
  path: screen.path,
  name: nameToRouteName(screen.name),
  component: getScreenComponent(screen.component),
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
