import classNames from 'classnames'

import styles from '@/styles/Home/GetStarted.module.scss'

interface GetStartedProps {
	className?: string
}

export default function GetStarted({ className }: GetStartedProps) {
	return (
		<section className={className}>
			<div className={styles.container}>
				<div className={styles.text}>
					<h2>Do you know someone with high potential?</h2>
					<p>Refer them to move up in the waitlist</p>
				</div>
				<div className={styles.actions}>
					<a
						className={classNames(
							styles.button,
							styles.buttonSecondary,
							'track'
						)}
						href="https://0zhj6xg76gq.typeform.com/to/XwWTHlZZ"
						target="_blank"
						rel="noopener noreferrer"
					>
						Join waitlist
					</a>
					<a
						className={classNames(styles.button, 'track')}
						href="https://pages.viral-loops.com/astrano"
						target="_blank"
						rel="noopener noreferrer"
					>
						Refer a friend
					</a>
				</div>
			</div>
		</section>
	)
}
