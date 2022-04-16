import get from 'lodash/get'
import { action, makeObservable, observable } from 'mobx'
import { getMonitoringBandwidth } from '../../API/digitalOcean/monitoring'
import {
  EBandwidthNetworkInterface,
  EBandwidthTrafficDirection,
  IMonitoringResponse
} from '../../types/digitalOcean/monitoring'
import { RootStore } from '../index'

class MonitoringBandwidthStore {
  rootStore: RootStore

  publicInboundData: IMonitoringResponse | undefined
  publicOutboundData: IMonitoringResponse | undefined
  privateInboundData: IMonitoringResponse | undefined
  privateOutboundData: IMonitoringResponse | undefined

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      publicOutboundData: observable,
      publicInboundData: observable,
      privateOutboundData: observable,
      privateInboundData: observable,
      fetchMonitoringBandwidth: action,
      fetchPublicOutboundBandwidth: action
    })

    this.rootStore = rootStore
  }

  public async fetchMonitoringBandwidth(start: Date, end: Date): Promise<void> {
    await Promise.all([
      this.fetchPublicOutboundBandwidth(start, end),
      this.fetchPublicInboundBandwidth(start, end),
      this.fetchPrivateInboundBandwidth(start, end),
      this.fetchPrivateOutboundBandwidth(start, end)
    ])
  }

  public async fetchPublicOutboundBandwidth(start: Date, end: Date): Promise<void> {
    const { cloudServiceStore } = this.rootStore

    const dropletId = get(cloudServiceStore.currentDroplet, 'id')

    if (!dropletId) {
      return
    }

    const publicOutboundResponse = await getMonitoringBandwidth(
      `${dropletId}`,
      start,
      end,
      EBandwidthNetworkInterface.PUBLIC,
      EBandwidthTrafficDirection.OUTBOUND
    )

    this.publicOutboundData = publicOutboundResponse
  }

  private async fetchPublicInboundBandwidth(start: Date, end: Date): Promise<void> {
    const { currentDroplet } = this.rootStore.cloudServiceStore
    const dropletId = get(currentDroplet, 'id')

    if (!dropletId) {
      return
    }

    const publicInboundResponse = await getMonitoringBandwidth(
      `${dropletId}`,
      start,
      end,
      EBandwidthNetworkInterface.PUBLIC,
      EBandwidthTrafficDirection.OUTBOUND
    )

    this.publicInboundData = publicInboundResponse
  }

  private async fetchPrivateOutboundBandwidth(start: Date, end: Date): Promise<void> {
    const { currentDroplet } = this.rootStore.cloudServiceStore
    const dropletId = get(currentDroplet, 'id')

    if (!dropletId) {
      return
    }

    const privateOutboundResponse = await getMonitoringBandwidth(
      `${dropletId}`,
      start,
      end,
      EBandwidthNetworkInterface.PRIVATE,
      EBandwidthTrafficDirection.OUTBOUND
    )

    this.privateOutboundData = privateOutboundResponse
  }

  private async fetchPrivateInboundBandwidth(start: Date, end: Date): Promise<void> {
    const { currentDroplet } = this.rootStore.cloudServiceStore
    const dropletId = get(currentDroplet, 'id')

    if (!dropletId) {
      return
    }

    const privateInboundResponse = await getMonitoringBandwidth(
      `${dropletId}`,
      start,
      end,
      EBandwidthNetworkInterface.PRIVATE,
      EBandwidthTrafficDirection.INBOUND
    )

    this.privateInboundData = privateInboundResponse
  }
}

export default MonitoringBandwidthStore
