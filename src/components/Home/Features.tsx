import { ForwardedRef, forwardRef } from 'react'
import classNames from 'classnames'

import BlocksVector from '@/public/blocks.svg'
import WitnessVector from '@/public/witness.svg'
import CoinsVector from '@/public/coins.svg'
import styles from '@/styles/Home/Features.module.scss'

interface FeaturesProps {
	className?: string
	titleClassName?: string
}

interface FeatureProps {
	title: string
	desc: string
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any
}

const features = [
	{
		title: 'Create your own token',
		desc: 'Back your ideas by creating your own token in our no-code platform. Profiles are verified using both public information and validators - your core believers.',
		icon: <BlocksVector />,
	},
	{
		title: 'Engage with your followers',
		desc: 'Build an economy on top of your community. They support you by buying your token. You give back by letting them exchange your token for rewards. Everyone wins.',
		icon: <WitnessVector />,
	},
	{
		title: 'Invest in people',
		desc: 'Human capital is the most valuable asset in the world. By staking your faith in an individual, you share a piece of their success on this exhilarating journey.',
		icon: <CoinsVector />,
	},
]

const Feature = ({ title, desc, icon }: FeatureProps) => (
	<div className={styles.feature}>
		<div className={styles.icon}>{icon}</div>
		<h3 className={styles.title}>{title}</h3>
		<p className={styles.desc}>{desc}</p>
	</div>
)

export default forwardRef(function Features(
	{ className, titleClassName }: FeaturesProps,
	ref: ForwardedRef<HTMLDivElement>
) {
	return (
		<section className={classNames(styles.container, className)} ref={ref}>
			<h2 className={titleClassName}>
				What is <strong>Astrano</strong>?
			</h2>

			<div className={styles.list}>
				{features.map((feature, index) => (
					<Feature {...feature} key={index} />
				))}
			</div>
		</section>
	)
})
