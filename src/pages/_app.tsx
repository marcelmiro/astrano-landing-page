import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

import { MixpanelProvider } from '@/context/Mixpanel.context'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MixpanelProvider>
			<Component {...pageProps} />
		</MixpanelProvider>
	)
}

export default MyApp
