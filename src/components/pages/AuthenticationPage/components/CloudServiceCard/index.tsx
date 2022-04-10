import cx from 'classnames'
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'
import { ECloudService } from '../../../../../constants/enums/cloudService'
import { ICloudServiceInfo } from '../AuthenticationContent/types'
import styles from './styles.module.scss'

interface ICloudServiceCardProps {
  info: ICloudServiceInfo
  currentCloudService: ECloudService
  onClickServiceCard: (cloudService: ECloudService) => void
}

const CloudServiceCard = (props: ICloudServiceCardProps) => {
  const { info, currentCloudService, onClickServiceCard } = props

  const { imageSrc, name } = info

  return (
    <Card
      onClick={() => onClickServiceCard(name)}
      className={cx(styles.cardWrap, {
        [styles.activeCard]: currentCloudService === name
      })}
    >
      <CardImg alt={name} src={imageSrc} />

      <CardBody>
        <CardTitle className={styles.label} tag="h5">
          {name}
        </CardTitle>
      </CardBody>
    </Card>
  )
}

export default CloudServiceCard
