import Head from 'next/head'
import { useRouter } from 'next/router'

import { baseUrl, maxMetaDescLength } from '@/config'

interface MetaProps {
	title: string
	description?: string
	canonical?: string
	hideSeo?: boolean
	children?: React.ReactNode
}

export default function Meta({
	title,
	description,
	canonical,
	hideSeo,
	children,
}: MetaProps) {
	const { asPath } = useRouter()

	const processedCanonical = canonical || baseUrl + asPath

	if (description && description.length > maxMetaDescLength)
		description = description.slice(0, maxMetaDescLength)

	return (
		<Head>
			{/* Main meta */}
			<title>{title}</title>
			{description && <meta name="description" content={description} />}

			{/* OpenGraph meta */}
			<meta property="og:type" content="website" />
			<meta name="og:title" property="og:title" content={title} />
			{description && (
				<meta
					name="og:description"
					property="og:description"
					content={description}
				/>
			)}
			<meta property="og:site_name" content="Astrano" />
			<meta property="og:url" content={processedCanonical} />
			<meta property="og:image" content="https://astrano.io/banner.png" />

			{/* Twitter meta */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			{description && (
				<meta name="twitter:description" content={description} />
			)}
			<meta name="twitter:site" content="@AstranoCrypto" />
			<meta name="twitter:creator" content="@AstranoCrypto" />
			<meta
				name="twitter:image"
				content="https://astrano.io/banner.png"
			/>

			{/* Favicon */}
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/favicon/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon/favicon-16x16.png"
			/>
			<link rel="manifest" href="/favicon/site.webmanifest" />
			<link
				rel="mask-icon"
				href="/favicon/safari-pinned-tab.svg"
				color="#c27ff9"
			/>
			<link rel="shortcut icon" href="/favicon/favicon.ico" />
			<meta name="msapplication-TileColor" content="#c27ff9" />
			<meta
				name="msapplication-config"
				content="/favicon/browserconfig.xml"
			/>
			<meta name="theme-color" content="#c27ff9" />

			{/* Other */}
			<link rel="canonical" href={processedCanonical} />
			{hideSeo && <meta name="robots" content="noindex nofollow" />}
			{children}
		</Head>
	)
}
