import Head from 'next/head'

import { Footer, HeadContent, Header } from 'components/_App'
import { Container } from 'components/core'

function Layout({ children }) {
	return (
		<>
			<Head>
				<HeadContent />
				{/* Stylesheets */}
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap"
				/>

				<link rel="stylesheet" type="text/css" href="/styles.css" />
				<link rel="stylesheet" type="text/css" href="/nprogress.css" />
				<title>ReactReserve</title>
			</Head>
			<Header />
			<Container>{children}</Container>
			<Footer />
		</>
	)
}

export default Layout
