import React from 'react'
import { Button } from 'components/core'

const CartSummary = () => {
	return (
		<div>
			<div>
				<strong>Subtotal: </strong> $0.00
				<Button theme="warning">Checkout</Button>
			</div>
		</div>
	)
}

export default CartSummary
