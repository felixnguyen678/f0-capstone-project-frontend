import cx from 'classnames'
import { NavItem, NavLink } from 'reactstrap'
import { EMonitoringTabs } from '../../../../../constants/enums/monitoringTabs'
import { IMonitoringTabInfo } from '../TabsContent/types'
import styles from './styles.module.scss'

interface IMonitoringTabProps {
  info: IMonitoringTabInfo
  currentTab: EMonitoringTabs
  onClickTab: (tabName: EMonitoringTabs) => void
}

const TabsContainer = (props: IMonitoringTabProps) => {
  const { info, currentTab, onClickTab } = props

  const { name } = info
  return (
    <NavItem>
      <NavLink
        onClick={() => onClickTab(name)}
        className={cx(styles.tabName, {
          [styles.activeTab]: currentTab === name
        })}
      >
        {name}
      </NavLink>
    </NavItem>
  )
}

export default TabsContainer
