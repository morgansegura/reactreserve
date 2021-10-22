import React from 'react'
import { CartItemList, CartSummary } from 'components/Cart'
import { Content } from 'components/core/Container'

const Cart = () => {
	return (
		<Content>
			<CartItemList />
			<CartSummary />
		</Content>
	)
}

export default Cart
