import { useState } from 'react'
import { CardGroup } from 'reactstrap'
import { ECloudService } from '../../../../../constants/enums/cloudService'
import CloudServiceCard from '../CloudServiceCard'
import DOAuthenticationForm from '../DOAuthenticationForm'
import { CLOUD_SERVICES } from './constants'
import styles from './styles.module.scss'

function CloudLoginForm() {
  const [currentCloudService, setCurrentCloudService] = useState<ECloudService>(ECloudService.DIGITAL_OCEAN)

  function onClickServiceCard(cloudService: ECloudService): void {
    setCurrentCloudService(cloudService)
  }

  return (
    <div>
      <CardGroup className={styles.container}>
        {Array.isArray(CLOUD_SERVICES) &&
          CLOUD_SERVICES.map((cloudItem, index) => {
            return (
              <CloudServiceCard
                key={index}
                info={cloudItem}
                currentCloudService={currentCloudService}
                onClickServiceCard={onClickServiceCard}
              />
            )
          })}
      </CardGroup>

      {currentCloudService === ECloudService.DIGITAL_OCEAN && <DOAuthenticationForm />}
    </div>
  )
}

export default CloudLoginForm
