import { useEffect, useRef } from 'react'

import { useMixpanel } from '@/context/Mixpanel.context'
import Meta from '@/components/Meta'
import Navbar from '@/components/Navbar'
import Bg from '@/components/Home/Bg'
import Main from '@/components/Home/Main'
import Features from '@/components/Home/Features'
import Creators from '@/components/Home/Creators'
import Chains from '@/components/Home/Chains'
import Rewards from '@/components/Home/Rewards'
import GetStarted from '@/components/Home/GetStarted'
import Footer from '@/components/Footer'

import styles from '@/styles/Home/Home.module.scss'

export default function Home() {
	const { track, track_links } = useMixpanel()
	const sections = useRef<Record<string, HTMLDivElement | null>>({})

	useEffect(() => {
		track_links('.track', 'Link clicked')
	}, [track_links])

	const scrollToElement = (id: string) => {
		const element = sections.current[id]
		if (!element) return
		track('Navigation click', { element: id })
		element.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div className={styles.wrapper}>
			<Meta title="Astrano | Invest in human potential" />

			<Navbar scrollToElement={scrollToElement} />

			{/* <Bg /> */}

			<Main />

			<Features
				className={styles.section}
				titleClassName={styles.h2}
				ref={(el) => (sections.current.about = el)}
			/>

			<Creators className={styles.section} />

			<Chains className={styles.section} titleClassName={styles.h2} />

			<Rewards
				className={styles.section}
				ref={(el) => (sections.current.rewards = el)}
			/>

			<GetStarted className={styles.section} />

			<Footer
				scrollToElement={scrollToElement}
				ref={(el) => (sections.current.footer = el)}
			/>
		</div>
	)
}
