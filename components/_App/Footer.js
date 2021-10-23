import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { Container } from 'components/core'
import {
	FooterCopyright,
	Logo,
	Menu,
	Nav,
	NavItem,
	Footer as Wrapper
} from '@styles/Footer'

const Footer = ({ user }) => {
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
					<FooterCopyright>
						&copy; {new Date().getFullYear()} / All rights reserved.
					</FooterCopyright>
				</Menu>
			</Wrapper>
		</Container>
	)
}

export default Footer
