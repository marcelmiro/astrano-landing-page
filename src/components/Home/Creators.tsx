import classNames from 'classnames'

import { creatorProfiles } from '@/config'
import CreatorCard from '@/components/Home/CreatorCard'
import styles from '@/styles/Home/Creators.module.scss'

interface CreatorsProps {
	className?: string
}

export default function Creators({ className }: CreatorsProps) {
	return (
		<section className={classNames(styles.container, className)}>
			{creatorProfiles.map((profile, index) => (
				<CreatorCard {...profile} key={index} />
			))}
		</section>
	)
}
