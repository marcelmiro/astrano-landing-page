import classNames from 'classnames'

import AstranoLogo from '@/public/logo.svg'
import styles from '@/styles/Footer.module.scss'

interface FooterProps {
	scrollToElement(id: string): void
}

export default function Footer({ scrollToElement }: FooterProps) {
	const currentYear = new Date().getFullYear()

	return (
		<footer className={styles.container}>
			<div className={styles.content}>
				<div className={styles.info}>
					<div className={styles.logo}>
						<AstranoLogo />
						<span>Astrano</span>
					</div>
					<p>
						#1 service to invest in projects through cryptocurrency
					</p>
				</div>
				<div className={styles.linkContainer}>
					<div className={styles.linkGroup}>
						<h4 className={styles.linkTitle}>Company</h4>
						<button
							onClick={() => scrollToElement('about')}
							className={styles.link}
						>
							About
						</button>
						<button
							onClick={() => scrollToElement('rewards')}
							className={styles.link}
						>
							Rewards
						</button>
						<a
							className={classNames(styles.link, 'track')}
							href="https://0zhj6xg76gq.typeform.com/to/XwWTHlZZ"
							target="_blank"
							rel="noopener noreferrer"
						>
							Waitlist
						</a>
					</div>
					<div className={styles.linkGroup}>
						<h4 className={styles.linkTitle}>Social Media</h4>
						<a
							className={classNames(styles.link, 'track')}
							href="https://www.instagram.com/astrano.io/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Instagram
						</a>
						<a
							className={classNames(styles.link, 'track')}
							href="https://www.linkedin.com/company/astrano"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
						<a
							className={classNames(styles.link, 'track')}
							href="https://twitter.com/astrano_"
							target="_blank"
							rel="noopener noreferrer"
						>
							Twitter
						</a>
						<a
							className={classNames(styles.link, 'track')}
							href="https://www.reddit.com/r/Astrano/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Reddit
						</a>
					</div>
					<div className={styles.linkGroup}>
						<h4 className={styles.linkTitle}>Contact</h4>
						<a
							className={classNames(styles.link, 'track')}
							href="mailto:support@astrano.io"
							rel="noopener noreferrer"
						>
							support@astrano.io
						</a>
					</div>
				</div>
			</div>
			<hr className={styles.hr} />
			<div className={styles.copyright}>
				<span>© {currentYear} ASTRANO LLC</span>
				<span>All rights reserved.</span>
			</div>
		</footer>
	)
}
