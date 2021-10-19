import Head from 'next/head'

import { HeadContent, Header, Container, Content } from 'components/_App'

function Layout({ children }) {
	return (
		<>
			<Head>
				<HeadContent />
				{/* Stylesheets */}
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>

				<link rel="stylesheet" type="text/css" href="/styles.css" />
				<link rel="stylesheet" type="text/css" href="/nprogress.css" />
				<title>ReactReserve</title>
			</Head>
			<Header />
			<Container>
				<Content>{children}</Content>
			</Container>
		</>
	)
}

export default Layout
