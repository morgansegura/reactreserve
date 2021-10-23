import cookie from 'js-cookie'
import Router from 'next/router'

export function handleLogin(token) {
	cookie.set('token', token)
	Router.push('/account')
}

export function handleLogout() {
	cookie.remove('token')
	window.localStorage.setItem('logout', Date.now())
	Router.push('/login')
}

export function redirectUser(ctx, location) {
	if (ctx.req) {
		ctx.res.writeHead(302, { Location: location })
		ctx.res.end()
	} else {
		Router.push(location)
	}
}

export function roleType(user) {
	const isRoot = user && user.role === 'root'
	const isAdmin = user && user.role === 'admin'
	const isRootOrAdmin = isAdmin || isRoot
	return { isRoot, isAdmin, isRootOrAdmin }
}
