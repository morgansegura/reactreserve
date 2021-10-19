import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { Container, Content } from 'components/_App'
import * as s from 'styles/Header.styled'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default function Header() {
	const router = useRouter()
	const user = true

	function isActive(route) {
		return router.pathname === route
	}

	return (
		<Container>
			<s.Wrapper>
				<Content>
					<s.Menu>
						<Link href="/">
							<a>
								<s.Logo>ReactReserve</s.Logo>
							</a>
						</Link>
						<s.Nav>
							<Link href="/product">
								<a>
									<s.NavItem active={isActive('/product')}>
										Products
									</s.NavItem>
								</a>
							</Link>
							{user ? (
								<>
									<Link href="/cart">
										<a>
											<s.NavItem
												active={isActive('/cart')}>
												Cart
											</s.NavItem>
										</a>
									</Link>
									<Link href="/create">
										<a>
											<s.NavItem
												active={isActive('/create')}>
												Create
											</s.NavItem>
										</a>
									</Link>
									<Link href="/account">
										<a>
											<s.NavItem
												active={isActive('/account')}>
												Account
											</s.NavItem>
										</a>
									</Link>
								</>
							) : (
								<>
									<Link href="/signup">
										<a>
											<s.NavItem
												active={isActive('/signup')}>
												Signup
											</s.NavItem>
										</a>
									</Link>
									<Link href="/login">
										<a>
											<s.NavItem
												active={isActive('/login')}>
												Login
											</s.NavItem>
										</a>
									</Link>
								</>
							)}
						</s.Nav>
					</s.Menu>
				</Content>
			</s.Wrapper>
		</Container>
	)
}
