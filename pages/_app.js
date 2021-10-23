import App from 'next/app'
import { withRouter } from 'next/router'
import { Layout, Scaffold } from 'components/_App'
import { GlobalStyle } from 'styles/globalStyles'
import { parseCookies, destroyCookie } from 'nookies'
import { redirectUser } from 'utils/auth'
import { baseUrl } from 'utils'
import axios from 'axios'

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		const { token } = parseCookies(ctx)

		let pageProps = {}
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		if (!token) {
			const isProtectedRoute =
				ctx.pathname === '/account' || ctx.pathname === '/create'

			if (isProtectedRoute) {
				redirectUser(ctx, '/login')
			}
		} else {
			try {
				const payload = { headers: { Authorization: token } }
				const url = `${baseUrl}/api/account`
				const response = await axios.get(url, payload)
				const user = response.data
				pageProps.user = user
			} catch (error) {
				console.error('Error getting current user', error)
				destroyCookie(ctx, 'token')
				redirectUser(ctx, '/login')
			}
		}
		return { pageProps }
	}

	render() {
		const { query } = this.props.router
		const { Component, pageProps } = this.props

		return (
			<Layout {...pageProps}>
				<GlobalStyle />
				<Component {...pageProps} />
				{query.scaffold === 'yesplease' && <Scaffold />}
			</Layout>
		)
	}
}

export default withRouter(MyApp)
