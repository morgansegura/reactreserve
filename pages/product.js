import axios from 'axios'
import baseUrl from 'utils/baseUrl'
import { ProductAttributes } from 'components/Product'
import { Wrapper } from 'styles/ProductAttributes'

const Product = ({ user, product }) => {
	return (
		<Wrapper>
			<ProductAttributes user={user} {...product} />
		</Wrapper>
	)
}

Product.getInitialProps = async ({ query: { _id } }) => {
	const url = `${baseUrl}/api/product`
	const payload = { params: { _id } }
	const response = await axios.get(url, payload)
	return { product: response.data }
}

export default Product
