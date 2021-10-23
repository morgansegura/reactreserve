import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { Container } from 'components/core'
import { Logo, Menu, Nav, NavItem, Header as Wrapper } from '@styles/Header'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default function Header({ user }) {
	const router = useRouter()

	function isActive(route) {
		return router.pathname === route
	}

	return (
		<Container>
			<Wrapper>
				<Menu>
					<Link href="/">
						<a>
							<Logo>ReactReserve</Logo>
						</a>
					</Link>
					<Nav>
						<Link href="/product">
							<a>
								<NavItem active={isActive('/product')}>
									Products
								</NavItem>
							</a>
						</Link>
						{user ? (
							<>
								<Link href="/cart">
									<a>
										<NavItem active={isActive('/cart')}>
											Cart
										</NavItem>
									</a>
								</Link>
								<Link href="/create">
									<a>
										<NavItem active={isActive('/create')}>
											Create
										</NavItem>
									</a>
								</Link>
								<Link href="/account">
									<a>
										<NavItem active={isActive('/account')}>
											Account
										</NavItem>
									</a>
								</Link>
							</>
						) : (
							<>
								<Link href="/signup">
									<a>
										<NavItem active={isActive('/signup')}>
											Signup
										</NavItem>
									</a>
								</Link>
								<Link href="/login">
									<a>
										<NavItem active={isActive('/login')}>
											Login
										</NavItem>
									</a>
								</Link>
							</>
						)}
					</Nav>
				</Menu>
			</Wrapper>
		</Container>
	)
}
