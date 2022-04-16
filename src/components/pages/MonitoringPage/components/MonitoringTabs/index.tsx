import cx from 'classnames'
import { NavItem, NavLink } from 'reactstrap'
import { EMonitoringTabs } from '../../../../../constants/enums/monitoringTabs'
import styles from './styles.module.scss'

interface IMonitoringTabProps {
  tab: EMonitoringTabs
  currentTab: EMonitoringTabs
  onClickTab: (tabName: EMonitoringTabs) => void
}

const TabsContainer = (props: IMonitoringTabProps) => {
  const { tab, currentTab, onClickTab } = props

  return (
    <NavItem>
      <NavLink
        onClick={() => onClickTab(tab)}
        className={cx(styles.tabName, {
          [styles.activeTab]: currentTab === tab
        })}
      >
        {tab}
      </NavLink>
    </NavItem>
  )
}

export default TabsContainer
