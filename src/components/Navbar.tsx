import classNames from 'classnames'

import Logo from '@/public/logo.svg'
import styles from '@/styles/Navbar.module.scss'

interface NavbarProps {
	scrollToElement(id: string): void
}

export default function Navbar({ scrollToElement }: NavbarProps) {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Logo />
				<span>Astrano</span>
			</div>

			<nav className={styles.nav}>
				<button
					className={styles.navButton}
					onClick={() => scrollToElement('about')}
				>
					About
				</button>
				<button
					className={styles.navButton}
					onClick={() => scrollToElement('rewards')}
				>
					Rewards
				</button>
				<button
					className={styles.navButton}
					onClick={() => scrollToElement('footer')}
				>
					Contact
				</button>

				<a
					className={classNames(
						styles.navButton,
						styles.navButtonBorder,
						'track'
					)}
					href="https://0zhj6xg76gq.typeform.com/to/XwWTHlZZ"
					target="_blank"
					rel="noopener noreferrer"
				>
					Join waitlist
				</a>
			</nav>
		</header>
	)
}
