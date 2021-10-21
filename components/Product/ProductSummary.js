import { AddProductToCart } from 'components/Product'

const ProductSummary = ({ name, mediaUrl, _id, price, sku }) => {
	return (
		<>
			<div>{_id}</div>
			<div>{name}</div>
			<div>${price}</div>
			<div>SKU: {sku}</div>
			<img src={mediaUrl} alt={name} />
			<AddProductToCart productId={_id} />
		</>
	)
}

export default ProductSummary
