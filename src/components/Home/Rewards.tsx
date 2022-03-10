import { forwardRef, ForwardedRef } from 'react'
import classNames from 'classnames'

import BorderGradient from '@/components/BorderGradient'
import SkeletonImage from '@/components/SkeletonImage'
import Banner from '@/public/lilt_banner.jpg'
import styles from '@/styles/Home/Rewards.module.scss'

interface RewardsProps {
	className?: string
}

interface RewardProps {
	name: string
	price: string
	actionName: string
	stockLeft?: number
}

const rewards = [
	{
		name: 'Early access to my music',
		price: 'HOLD 500+ LILT',
		actionName: 'active',
	},
	{
		name: '1 hour collab session',
		price: '1,500 LILT',
		actionName: 'redeem',
		stockLeft: 3,
	},
	{ name: 'Social media shoutout', price: '750 LILT', actionName: 'redeem' },
	{ name: 'Branded t-shirt', price: '450 LILT', actionName: 'out of stock' },
	{ name: 'Personalized video', price: '625 LILT', actionName: 'redeem' },
]

const Reward = ({ name, price, actionName, stockLeft }: RewardProps) => {
	const isPrimaryAction = actionName === 'redeem'
	const formattedActionName =
		actionName[0].toUpperCase() + actionName.slice(1)

	return (
		<div className={styles.reward}>
			<div className={styles.rewardContent}>
				<p className={styles.rewardName}>{name}</p>
				{stockLeft && (
					<p className={styles.rewardStock}>Only {stockLeft} left!</p>
				)}
				<p className={styles.rewardPrice}>{price}</p>
			</div>

			<button
				className={classNames(styles.rewardAction, {
					[styles.rewardPrimaryAction]: isPrimaryAction,
				})}
			>
				{formattedActionName}
			</button>
		</div>
	)
}

export default forwardRef(function Rewards(
	{ className }: RewardsProps,
	ref: ForwardedRef<HTMLDivElement>
) {
	return (
		<section className={className} ref={ref}>
			<h2 className={classNames(styles.title, styles.mobileTitle)}>
				<strong>Rewards</strong>
			</h2>

			<div className={styles.container}>
				<BorderGradient className={styles.banner}>
					<SkeletonImage
						src={Banner}
						alt="Banner LILT"
						objectFit="cover"
						blur
					/>
				</BorderGradient>

				<div className={styles.content}>
					<h2 className={styles.title}>
						<strong>Rewards</strong>
					</h2>

					<div className={styles.rewardList}>
						{rewards.map((reward, index) => (
							<Reward {...reward} key={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
})
