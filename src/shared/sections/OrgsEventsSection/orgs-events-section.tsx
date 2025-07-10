import { Container } from '../../ui/Container/Container'
import styles from './index.module.scss'
import baseStyles from 'src/assets/base/styles/base-sections.scss'
import cn from 'classnames'

export const OrgsEventsSection = () => {
  return(
    <section className={cn(styles.orgsEvents, baseStyles.baseSection)}>
      <Container>
        <div></div>
      </Container>
    </section>
  )
}
