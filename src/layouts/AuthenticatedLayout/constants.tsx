import routes from '../../routes'
import { IMenuItem } from '../components/types'

const MENU_ITEM_DATA: Array<IMenuItem> = [
  {
    title: 'Home',
    href: routes.home.value,
    icon: <i className="ri-home-3-line"></i>
  },
  {
    title: 'Monitoring',
    href: routes.monitoring.value,
    icon: <i className="ri-line-chart-line"></i>
  },
  {
    title: 'Resource Alert',
    href: routes.resourceAlerts.value,
    icon: <i className="ri-alarm-warning-line"></i>
  },
  {
    title: 'Billing',
    href: routes.billing.value,
    icon: <i className="ri-bill-line"></i>
  },
  {
    title: 'VPSs',
    href: routes.virtualPrivateServers.value,
    icon: <i className="ri-server-line"></i>
  },
  {
    title: 'Containers',
    href: routes.containers.value,
    icon: <i className="ri-code-box-line"></i>
  },
  {
    title: 'Users',
    href: routes.users.value,
    icon: <i className="ri-group-line me"></i>
  }
]

export default MENU_ITEM_DATA
