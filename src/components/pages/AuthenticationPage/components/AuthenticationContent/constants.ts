import { ECloudService } from '../../../../../constants/enums/cloudService'
import doAvatar from '../../../../../static/images/do-avatar.jpeg'
import { ICloudServiceInfo } from './types'

export const CLOUD_SERVICES: Array<ICloudServiceInfo> = [
  {
    imageSrc: 'https://picsum.photos/318/180',
    name: ECloudService.AWS
  },
  {
    imageSrc: doAvatar,
    name: ECloudService.DIGITAL_OCEAN
  },
  {
    imageSrc: 'https://picsum.photos/318/180',
    name: ECloudService.GOOGLE_CLOUD
  }
]
