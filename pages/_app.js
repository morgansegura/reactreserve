import App from 'next/app'
import { withRouter } from 'next/router'
import { Layout, Scaffold } from 'components/_App'
import { GlobalStyle } from 'styles/globalStyles'

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	render() {
		const { query } = this.props.router
		const { Component, pageProps } = this.props

		return (
			<Layout>
				<GlobalStyle />
				<Component {...pageProps} />
				{query.scaffold === 'yesplease' && <Scaffold />}
			</Layout>
		)
	}
}

export default withRouter(MyApp)
