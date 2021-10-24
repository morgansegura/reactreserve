import React from 'react'
import { Button } from 'components/core'
import { NumberInput } from 'components/core'
import { AddProduct } from 'styles/ProductAttributes'

const AddProductToCart = () => {
	const [quantity, setQuantity] = React.useState(1)
	return (
		<AddProduct>
			<NumberInput
				type="number"
				min="1"
				placeholder="Quantity"
				value={quantity}
				onChange={e => setQuantity(Number(e.target.value))}
			/>
			<Button theme="warning">Add to Cart</Button>
		</AddProduct>
	)
}

export default AddProductToCart
