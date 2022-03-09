import SkeletonImage from '@/components/SkeletonImage'
import BorderGradient from '@/components/BorderGradient'

import styles from '@/styles/Home/CreatorCard.module.scss'

interface CreatorCardProps {
	category: string
	name: string
	price: string
	logo: string
	banner: string
}

export default function CreatorCard({
	category,
	name,
	price,
	logo,
	banner,
}: CreatorCardProps) {
	return (
		<div className={styles.container}>
			<BorderGradient className={styles.card}>
				<div className={styles.info}>
					<SkeletonImage
						src={logo}
						alt={'Logo ' + name}
						className={styles.logo}
					/>
					<div className={styles.text}>
						<p className={styles.name}>{name}</p>
						<p className={styles.price}>${price}</p>
					</div>
				</div>
				<SkeletonImage
					src={banner}
					alt={'Banner ' + name}
					className={styles.banner}
				/>
			</BorderGradient>
			<h4 className={styles.title}>{category}</h4>
		</div>
	)
}
