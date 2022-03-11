import Link from 'next/link'

import Meta from '@/components/Meta'
import styles from '@/styles/error.module.scss'
import classNames from 'classnames'

export default function Custom404() {
	return (
		<>
			<Meta title="Page not found | Astrano" />

			<div className={styles.container}>
				<h1 className={styles.title}>Oops!</h1>
				<p className={styles.message}>
					Sorry, the page you&apos;re looking for doesn&apos;t exist.
					If you think something is broken, report a problem.
				</p>
				<div className={styles.actions}>
					<Link href="/">
						<a className={styles.primaryButton}>Return home</a>
					</Link>
					<a
						className={classNames(styles.button, 'track')}
						href="mailto:support@astrano.io"
						rel="noopener noreferrer"
					>
						Report a problem
					</a>
				</div>
			</div>
		</>
	)
}
