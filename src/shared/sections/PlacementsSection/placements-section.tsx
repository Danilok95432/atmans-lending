import { Container } from '../../ui/Container/Container'
import styles from './index.module.scss'
import baseStyles from 'src/assets/base/styles/base-sections.scss'
import cn from 'classnames'

export const PlacementsSection = () => {
  return(
    <section className={cn(styles.placements, baseStyles.baseSection)}>
      <Container>
        <div></div>
      </Container>
    </section>
  )
}
