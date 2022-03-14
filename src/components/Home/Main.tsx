import classNames from 'classnames'
import Typewriter, { Options, TypewriterClass } from 'typewriter-effect'

import { mainProfessions, mainProfiles } from '@/config'
import MainProfileCard from '@/components/Home/MainProfileCard'
import ArrowRight from '@/public/arrow_head_right.svg'
import styles from '@/styles/Home/Main.module.scss'

const professionList = mainProfessions.join(', ')

const typewriterOnInit = (tw: TypewriterClass) => {
	tw = mainProfessions.reduce(
		(prevTw, profession) =>
			prevTw.typeString(profession).pauseFor(1000).deleteAll(),
		tw
	)
	return tw.start()
}

const typewriterOptions: Options = {
	loop: true,
	wrapperClassName: styles.typewriterWrapper,
}

export default function Main() {
	return (
		<main className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.h1}>Invest in human potential</h1>
				<h3
					className={styles.desc}
					aria-label={`Discover the next generation of ${professionList}.`}
				>
					Discover the next generation of{' '}
					{typeof window !== 'undefined' ? (
						<Typewriter
							onInit={typewriterOnInit}
							options={typewriterOptions}
						/>
					) : (
						'high-potential individuals'
					)}
				</h3>
				<a
					className={classNames(styles.button, 'track')}
					href="https://astrano.typeform.com/waitlist"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>Join waitlist</span>
					<ArrowRight />
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
