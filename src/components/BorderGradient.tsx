import classNames from 'classnames'

import styles from '@/styles/BorderGradient.module.scss'

interface BorderGradientProps {
	className?: string
	children?: React.ReactNode
}

export default function BorderGradient({
	className,
	children,
}: BorderGradientProps) {
	return (
		<div className={classNames(className, styles.container)}>
			{children}
		</div>
	)
}
