import { Container } from '../../ui/Container/Container'
import styles from './index.module.scss'
import baseStyles from 'src/assets/base/styles/base-sections.scss'
import cn from 'classnames'

export const GeneralPartnersSection = () => {
  return(
    <section className={cn(styles.generalPartners, baseStyles.baseSection)}>
      <Container>
        <div></div>
      </Container>
    </section>
  )
}
