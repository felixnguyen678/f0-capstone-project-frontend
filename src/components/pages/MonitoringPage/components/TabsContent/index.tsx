import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import { Nav } from 'reactstrap'
import { EMonitoringTabs } from '../../../../../constants/enums/monitoringTabs'
import { useStores } from '../../../../../hooks/useStores'
import { getDateRange } from '../../../../../utils'
import BandwidthChart from '../MonitoringCharts/BandwidthChart'
import TabsContainer from '../MonitoringTabs'
import PeriodSelect from '../PeriodSelect'
import { TIME_VALUES } from '../PeriodSelect/constants'
import styles from './styles.module.scss'

const MonitoringContent = () => {
  const { bandwidthStore, cloudServiceStore } = useStores()

  const [currentTab, setTabActive] = useState<EMonitoringTabs>(EMonitoringTabs.BANDWIDTH)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [currentPeriod, setCurrentPeriod] = useState<string>(TIME_VALUES['6h'])

  function onClickTab(tabName: EMonitoringTabs): void {
    setTabActive(tabName)
  }

  function onChangePeriodSelect(newPeriod: string): void {
    setCurrentPeriod(newPeriod)
  }

  async function fetchBandwidthData(): Promise<void> {
    setIsLoading(true)
    const { start, end } = getDateRange(currentPeriod)

    await bandwidthStore.fetchMonitoringBandwidth(start, end)

    setIsLoading(false)
  }

  useEffect(() => {
    if (cloudServiceStore?.currentDroplet) {
      fetchBandwidthData()
    }
  }, [currentPeriod, cloudServiceStore.currentDroplet])

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
            <PeriodSelect currentPeriod={currentPeriod} onChange={onChangePeriodSelect} isLoading={isLoading} />
          </div>
        </div>

        <div className={styles.graphContainer}>{currentTab === EMonitoringTabs.BANDWIDTH && <BandwidthChart />}</div>
      </div>
    </div>
  )
}

export default observer(MonitoringContent)
