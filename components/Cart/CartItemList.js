import React from 'react'
import Link from 'next/link'
import { Button } from '../core'

const CartItemList = ({ user = false }) => {
	return (
		<div>
			<div>No items in your cart yet. Add some!</div>
			<div>
				{user ? (
					<Button theme="primary">View Products</Button>
				) : (
					<Link href="/login">
						<a>
							<Button theme="warning">
								Login to Add products
							</Button>
						</a>
					</Link>
				)}
			</div>
		</div>
	)
}

export default CartItemList
