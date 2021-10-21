import React from 'react'
import { ProductCard } from 'components/Index'
import { ProductList as Wrapper } from 'styles/ProductList'

const ProductList = ({ products }) => {
	const [meta, setMeta] = React.useState(false)

	const toggleDescription = () => {
		setMeta(!meta)
	}

	return (
		<Wrapper>
			{products.map(product => (
				<ProductCard
					key={product._id}
					product={product}
					active={meta}
					toggle={toggleDescription}
				/>
			))}
		</Wrapper>
	)
}

export default ProductList
