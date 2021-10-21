import React from 'react'
import Link from 'next/link'
import {
	ProductCard,
	ProductCardMediaContainer,
	ProductCardMedia,
	ProductCardMeta,
	ProductCardName,
	ProductCardPrice,
	ProductCardDetails,
	ProductCardToggleDetails,
	ProductCardDescription
} from 'styles/ProductCard'

const ProductList = ({ product }) => {
	const [active, setActive] = React.useState(false)

	const toggleDescription = () => {
		setActive(!active)
	}

	return (
		<ProductCard key={product._id} active={active}>
			<Link href={`/product?_id=${product._id}`}>
				<a>
					<ProductCardMediaContainer>
						<ProductCardMedia
							src={product.mediaUrl}
							alt={product.name}
						/>
					</ProductCardMediaContainer>
				</a>
			</Link>
			<ProductCardDetails>
				<ProductCardName>
					<Link href={`/product?_id=${product._id}`}>
						<a>{product.name}</a>
					</Link>
				</ProductCardName>
				<ProductCardDescription active={active}>
					{product.description}
				</ProductCardDescription>
			</ProductCardDetails>
			<ProductCardMeta>
				<ProductCardToggleDetails onClick={toggleDescription}>
					{active ? `Hide` : `Show`} Description
				</ProductCardToggleDetails>
				<ProductCardPrice>
					<span>${product.price}</span>
				</ProductCardPrice>
			</ProductCardMeta>
		</ProductCard>
	)
}

export default ProductList
