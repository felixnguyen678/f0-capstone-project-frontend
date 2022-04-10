import { ECloudService } from '../../../../../constants/enums/cloudService'
import awsAvatar from '../../../../../static/images/aws-avatar.png'
import doAvatar from '../../../../../static/images/do-avatar.jpeg'
import gcAvatar from '../../../../../static/images/gc-avatar.png'
import { ICloudServiceInfo } from './types'

export const CLOUD_SERVICES: Array<ICloudServiceInfo> = [
  {
    imageSrc: awsAvatar,
    name: ECloudService.AWS
  },
  {
    imageSrc: doAvatar,
    name: ECloudService.DIGITAL_OCEAN
  },
  {
    imageSrc: gcAvatar,
    name: ECloudService.GOOGLE_CLOUD
  }
]
