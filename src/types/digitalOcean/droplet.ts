// INFO: follow droplet type API
export interface IDroplet {
  disk: number
  id: number
  locked: boolean
  memory: number
  name: string
  status: EDropletStatus
}

export enum EDropletStatus {
  NEW = 'new',
  ACTIVE = 'active',
  OFF = 'off',
  ARCHIVED = 'archived'
}
