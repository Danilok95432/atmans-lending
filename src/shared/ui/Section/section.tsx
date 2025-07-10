import React, { type FC, type ReactNode } from 'react'
import classNames from 'classnames'
import styles from './index.module.scss'

type SectionProps = {
	className?: string
	children: ReactNode
}

export const Section: FC<SectionProps> = ({ className, children }) => {
	const combinedClassName = classNames(styles.section, className)

	return <section className={combinedClassName}>{children}</section>
}
