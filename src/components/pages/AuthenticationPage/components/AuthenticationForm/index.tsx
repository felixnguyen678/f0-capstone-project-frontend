import { useState } from 'react'
import { CloudServices } from './data'
import { ECloudService } from './constants'
import DOAuthenticationForm from '../DigitalOceanAuthenticationForm'
import AWSAuthenticationForm from '../AWSAuthenticationForm'
import GCAuthenticationForm from '../GoogleCloudAuthenticationForm'
import { CardGroup, Card, CardImg, CardBody, CardTitle } from 'reactstrap'
import styles from './styles.module.scss'

function CloudServiceOptionPage() {
  const [currentCloudService, setCurrentCloudService] = useState<ECloudService>(ECloudService.DIGITAL_OCEAN)
  function onClickServiceCard(cloudService: ECloudService): void {
    setCurrentCloudService(cloudService)
  }
  return (
    <div>
      <CardGroup className={styles.cloud}>
        {Array.isArray(CloudServices) &&
          CloudServices.map((cloudItem, index) => {
            const { imageSrc, name } = cloudItem
            return (
              <Card onClick={() => onClickServiceCard(name)} key={index} className={styles.cloudForm}>
                <CardImg alt={name} src={imageSrc} width="100%" />
                <CardBody>
                  <CardTitle className={styles.label} tag="h5">
                    {name}
                  </CardTitle>
                </CardBody>
              </Card>
            )
          })}
      </CardGroup>
      {currentCloudService === ECloudService.DIGITAL_OCEAN && <DOAuthenticationForm />}
      {currentCloudService === ECloudService.AWS && <AWSAuthenticationForm />}
      {currentCloudService === ECloudService.GOOGLE_CLOUD && <GCAuthenticationForm />}
    </div>
  )
}

export default CloudServiceOptionPage
