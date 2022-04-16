import { useState } from 'react'
import { Nav } from 'reactstrap'
import { EMonitoringTabs } from '../../../../../constants/enums/monitoringTabs'
import BandwidthChart from '../MonitoringCharts/BandwithCharts'
import TabsContainer from '../MonitoringTabs'
import PeriodDropdowns from '../SelectPeriod'
import styles from './styles.module.scss'

const MonitoringContent = () => {
  const [currentTab, setTabActive] = useState<EMonitoringTabs>(EMonitoringTabs.BANDWIDTH)

  function onClickTab(tabName: EMonitoringTabs): void {
    setTabActive(tabName)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.boardContainer}>
        <div className={styles.tabContainer}>
          <Nav tabs>
            {Array.isArray(Object.values(EMonitoringTabs)) &&
              Object.values(EMonitoringTabs).map((graphItem, index) => {
                return <TabsContainer key={index} tab={graphItem} currentTab={currentTab} onClickTab={onClickTab} />
              })}
          </Nav>
          <div className={styles.periodDropdown}>
            <PeriodDropdowns />
          </div>
        </div>
        <div className={styles.graphContainer}>{currentTab === EMonitoringTabs.BANDWIDTH && <BandwidthChart />}</div>
      </div>
    </div>
  )
}

export default MonitoringContent
