import { AddProductToCart, ProductSummary } from 'components/Product'
import {
	ImageContainer,
	AttrbuteContainer,
	AttributeListGrid,
	AttributeGrid,
	ListItems,
	ListItem
} from 'styles/ProductAttributes'
import { Content } from 'components/core'

const ProductAttributes = ({
	user,
	name,
	mediaUrl,
	_id,
	price,
	sku,
	...product
}) => {
	return (
		<AttributeGrid>
			<ImageContainer>
				<Content>
					<img src={mediaUrl} alt={name} />
				</Content>
			</ImageContainer>
			<AttrbuteContainer>
				<AttributeListGrid>
					<ListItems>
						<ListItem>
							<h4>{name}</h4>
						</ListItem>
						<ListItem>
							<strong>Price: </strong>${price}
						</ListItem>
						<ListItem>
							<strong>SKU:</strong> {sku}
						</ListItem>
					</ListItems>
					<AddProductToCart user={user} productId={_id} />
				</AttributeListGrid>
				<ProductSummary {...product} />
			</AttrbuteContainer>
		</AttributeGrid>
	)
}

export default ProductAttributes
