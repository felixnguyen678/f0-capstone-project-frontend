import { useState } from 'react'
import { Nav } from 'reactstrap'
import { EMonitoringTabs } from '../../../../../constants/enums/monitoringTabs'
import BandwidthChart from '../MonitoringCharts/BandwithCharts'
import TabsContainer from '../MonitoringTabs'
import { MONITORING_TABS } from './constants'
import styles from './styles.module.scss'

const MonitoringContent = () => {
  const [currentTab, setTabActive] = useState<EMonitoringTabs>(EMonitoringTabs.CPU)
  function onClickTab(tabName: EMonitoringTabs): void {
    setTabActive(tabName)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.boardContainer}>
        <Nav tabs>
          {Array.isArray(MONITORING_TABS) &&
            MONITORING_TABS.map((graphItem, index) => {
              return <TabsContainer key={index} info={graphItem} currentTab={currentTab} onClickTab={onClickTab} />
            })}
        </Nav>
        <div className={styles.graphContainer}>{currentTab === EMonitoringTabs.BANDWIDTH && <BandwidthChart />}</div>
      </div>
    </div>
  )
}

export default MonitoringContent
