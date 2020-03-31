import Dashboard from './views/Dashboard.jsx'
import UserProfile from './views/UserProfile.jsx'
import TableList from './views/TableList.jsx'

const dashboardRoutes = [
  {
    path: '/',
    name: 'Inicio',
    icon: 'pe-7s-chat',
    component: Dashboard,
  },
  {
    path: '/planejamentos',
    name: 'Planejamento',
    icon: 'pe-7s-note2',
    component: TableList,
  },
  {
    path: '/perfil',
    name: 'User Profile',
    icon: 'pe-7s-user',
    component: UserProfile,
  },
]

export default dashboardRoutes
