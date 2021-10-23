import React from 'react'
import { parseCookies } from 'nookies'
import axios from 'axios'
import { baseUrl } from 'utils'
import { CartItemList, CartSummary } from 'components/Cart'
import { Content } from 'components/core/Container'

const Cart = ({ products, user }) => {
	console.log({ products })
	return (
		<Content>
			<CartItemList />
			<CartSummary />
		</Content>
	)
}

Cart.getInitialProps = async ctx => {
	const { token } = parseCookies(ctx)
	if (!token) {
		return { products: [] }
	}
	const url = `${baseUrl}/api/cart`
	const payload = { headers: { Authorization: token } }
	const response = await axios.get(url, payload)
	return { products: response.data }
}

export default Cart
