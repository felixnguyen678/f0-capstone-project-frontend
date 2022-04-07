import { ECloudService } from './constants'
interface ICloudServiceName {
  imageSrc: string
  name: ECloudService
}
export const CloudServices: Array<ICloudServiceName> = [
  {
    imageSrc: 'https://picsum.photos/318/180',
    name: ECloudService.AWS
  },
  {
    imageSrc: 'https://picsum.photos/318/180',
    name: ECloudService.DIGITAL_OCEAN
  },
  {
    imageSrc: 'https://picsum.photos/318/180',
    name: ECloudService.GOOGLE_CLOUD
  }
]
