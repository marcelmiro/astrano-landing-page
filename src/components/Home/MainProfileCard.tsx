import BorderGradient from '@/components/BorderGradient'
import SkeletonImage from '@/components/SkeletonImage'
import styles from '@/styles/Home/MainProfileCard.module.scss'

interface MainProfileProps {
	name: string
	symbol: string
	price: string
	banner: string | StaticImageData
	logo: string | StaticImageData
}

export default function MainProfileCard({
	name,
	symbol,
	price,
	banner,
	logo,
}: MainProfileProps) {
	return (
		<BorderGradient className={styles.container}>
			<SkeletonImage
				src={banner}
				alt={'Picture ' + name}
				className={styles.banner}
				priority
				blur
			/>
			<div className={styles.content}>
				<SkeletonImage
					src={logo}
					alt={'Logo ' + name}
					className={styles.logo}
					blur
				/>
				<div className={styles.info}>
					<p className={styles.name}>{name}</p>
					<p className={styles.symbol}>{symbol}</p>
				</div>
			</div>
			<div className={styles.price}>
				${price}
				<small>USD</small>
			</div>
			<div className={styles.bg} />
		</BorderGradient>
	)
}
