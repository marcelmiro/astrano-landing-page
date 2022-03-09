import classNames from 'classnames'

import { mainProfiles } from '@/config'
import MainProfileCard from '@/components/Home/MainProfileCard'

import styles from '@/styles/Home/Main.module.scss'

export default function Main() {
	return (
		<main className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.h1}>Invest in human potential</h1>
				<h3 className={styles.desc}>
					Revolutionizing investment and funding through the creation
					of new asset classes.
				</h3>
				<a
					className={classNames(styles.button, 'track')}
					href="https://0zhj6xg76gq.typeform.com/to/XwWTHlZZ"
					target="_blank"
					rel="noopener noreferrer"
				>
					Join waitlist
				</a>
			</div>

			<div className={styles.profileContainer}>
				{mainProfiles.map((profile, index) => (
					<MainProfileCard {...profile} key={index} />
				))}
				<div className={styles.profileBg} />
			</div>
		</main>
	)
}
