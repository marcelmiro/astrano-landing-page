import classNames from 'classnames'

import SkeletonImage from '@/components/SkeletonImage'
import styles from '@/styles/Home/Chains.module.scss'
import homeStyles from '@/styles/Home/Home.module.scss'

interface ChainsProps {
	className?: string
	titleClassName?: string
}

const chains = [
	{ src: '/eth.png', alt: 'Ethereum' },
	{ src: '/bsc.png', alt: 'Binance Smart Chain' },
	{ src: '/polygon.png', alt: 'Polygon Chain' },
	{ src: '/avax.png', alt: 'Avalanche' },
	{ src: '/fantom.png', alt: 'Fantom Opera' },
]

export default function Chains({ className, titleClassName }: ChainsProps) {
	return (
		<section className={classNames(className, styles.container)}>
			<div className={classNames(styles.wrapper, homeStyles.wrapper)}>
				<div className={styles.text}>
					<h3 className={styles.subtitle}>Multi-chain solution</h3>
					<h2 className={classNames(styles.title, titleClassName)}>
						Launch on <strong>any</strong> blockchain
					</h2>
				</div>

				<div className={styles.list}>
					{chains.map(({ src, alt }, index) => (
						<SkeletonImage
							src={src}
							alt={alt}
							objectFit="contain"
							className={styles.icon}
							key={index}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
