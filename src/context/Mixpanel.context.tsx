import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'
import mixpanel from 'mixpanel-browser'

interface MixpanelContextProps {
	track(event: string, props?: Record<string, unknown>): void
	track_links(
		selector: string,
		event: string,
		props?:
			| Record<string, unknown>
			| ((el: HTMLAnchorElement) => Record<string, unknown>)
	): void
}

/* eslint-disable @typescript-eslint/no-empty-function */
const defaultValues: MixpanelContextProps = {
	track: () => {},
	track_links: () => {},
}
/* eslint-enable @typescript-eslint/no-empty-function */

const MixpanelContext = createContext<MixpanelContextProps>(defaultValues)

export const useMixpanel = () => useContext(MixpanelContext)

export function MixpanelProvider({ children }: { children: React.ReactNode }) {
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		const key = process.env.NEXT_PUBLIC_MIXPANEL_KEY
		if (!key) return console.error('Mixpanel key not found')
		mixpanel.init(key, { loaded: () => setIsLoaded(true), debug: true })
	}, [])

	const track: MixpanelContextProps['track'] = useCallback(
		(event, props) => {
			if (!isLoaded) return
			return mixpanel.track(event, props)
		},
		[isLoaded]
	)

	const track_links: MixpanelContextProps['track_links'] = useCallback(
		(selector, event, props) => {
			if (!isLoaded) return
			return mixpanel.track_links(
				selector,
				event,
				(el: HTMLAnchorElement) => {
					const defaultProps = {
						label: el.innerText || el.innerHTML || null,
						link: el.href,
					}
					const newProps =
						typeof props === 'function' ? props(el) : props
					return { ...defaultProps, ...newProps }
				}
			)
		},
		[isLoaded]
	)

	const value = { track, track_links }

	return (
		<MixpanelContext.Provider value={value}>
			{children}
		</MixpanelContext.Provider>
	)
}
