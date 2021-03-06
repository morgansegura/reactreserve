import App from 'next/app'
import Router, { withRouter } from 'next/router'
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
				const isRoot = user.role === 'root'
				const isAdmin = user.role === 'admin'
				const isNotPermitted =
					!(isRoot || isAdmin) && ctx.pathname === '/create'
				if (isNotPermitted) {
					redirectUser(ctx, '/')
				}
				pageProps.user = user
			} catch (error) {
				console.error('Error getting current user', error)
				destroyCookie(ctx, 'token')
				redirectUser(ctx, '/login')
			}
		}
		return { pageProps }
	}

	componentDidMount() {
		window.addEventListener('storage', this.syncLogout)
	}

	syncLogout = event => {
		if (event.key === 'logout') {
			Router.push('/login')
		}
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
