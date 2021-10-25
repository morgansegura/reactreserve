import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import cookie from 'js-cookie'
import { baseUrl, catchErrors } from 'utils'
import { Button } from 'components/core'
import { NumberInput } from 'components/core'
import { AddProduct } from 'styles/ProductAttributes'
import { RotateSpinner } from 'components/core/spinners/Rotate'

const AddProductToCart = ({ user, productId }) => {
	const [quantity, setQuantity] = React.useState(1)
	const [loading, setLoading] = React.useState(false)
	const [success, setSuccess] = React.useState(false)
	const router = useRouter()

	React.useEffect(() => {
		let timeout
		if (success) {
			timeout = setTimeout(() => setSuccess(false), 3000)
		}
		return () => {
			clearTimeout(timeout)
		}
	}, [success])

	async function handleAddProductToCart() {
		try {
			setLoading(true)
			const url = `${baseUrl}/api/cart`
			const payload = { quantity, productId }
			const token = cookie.get('token')
			const headers = { headers: { Authorization: token } }
			await axios.put(url, payload, headers)
			setSuccess(true)
		} catch (error) {
			catchErrors(error, window.alert)
		} finally {
			setLoading(false)
		}
	}

	return (
		<AddProduct>
			<NumberInput
				type="number"
				min="1"
				placeholder="Quantity"
				value={quantity}
				onChange={e => setQuantity(Number(e.target.value))}
			/>
			{user && success ? (
				<Button theme="warning" disabled={true}>
					Item Added
				</Button>
			) : user ? (
				<Button
					theme="warning"
					loading={loading.toString()}
					onClick={handleAddProductToCart}>
					{loading ? (
						<>
							<RotateSpinner
								size="20"
								color="orange"
								style={{ marginRight: '0.5rem' }}
							/>
							Loading...
						</>
					) : (
						`Add to Cart`
					)}
				</Button>
			) : (
				<Button theme="primary" onClick={() => router.push('/signup')}>
					Sign up to purchase
				</Button>
			)}
		</AddProduct>
	)
}

export default AddProductToCart
