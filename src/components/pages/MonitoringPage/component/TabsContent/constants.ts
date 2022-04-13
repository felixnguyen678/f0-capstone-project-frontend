import { EMonitoringTabs } from '../../../../../constants/enums/monitoringTabs'
import { IMonitoringTabInfo } from './types'

export const MONITORING_TABS: Array<IMonitoringTabInfo> = [
  {
    name: EMonitoringTabs.CPU
  },
  {
    name: EMonitoringTabs.LOAD_1_5_15
  },
  {
    name: EMonitoringTabs.MEMORY
  },
  {
    name: EMonitoringTabs.DISK_I_O
  },
  {
    name: EMonitoringTabs.DISK_USAGE
  },
  {
    name: EMonitoringTabs.BANDWIDTH
  }
]
