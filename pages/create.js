import React from 'react'
import {
	Button,
	TextInput,
	MediaInput,
	NumberInput,
	TextArea,
	Content
} from 'components/core'

const INITIAL_PRODUCT = {
	name: '',
	price: '',
	media: '',
	description: ''
}

const CreateProduct = () => {
	const [product, setProduct] = React.useState(INITIAL_PRODUCT)
	const [mediaPreview, setMediaPreview] = React.useState('')
	const [success, setSuccess] = React.useState(false)

	const handleChange = e => {
		const { name, value, files } = e.target
		if (name === 'media') {
			setProduct(prevState => ({ ...prevState, media: files[0] }))
			setMediaPreview(window.URL.createObjectURL(files[0]))
		} else {
			setProduct(prevState => ({ ...prevState, [name]: value }))
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		setProduct(INITIAL_PRODUCT)
		setMediaPreview('')
		setSuccess(true)
	}

	return (
		<>
			<form
				style={{
					paddingTop: '2rem',
					paddingBottom: '2rem',
					backgroundColor: 'rgba(255, 255, 255, 0.5)',
					borderRadius: '8px'
				}}
				onSubmit={handleSubmit}>
				<Content>
					<TextInput
						name="name"
						label="Name"
						vertical
						placeholder="Enter a product name"
						value={product.name}
						onChange={handleChange}
					/>
					<br />
					<NumberInput
						name="price"
						label="Price"
						min="0.00"
						step="0.01"
						vertical
						icon="$ "
						placeholder="0.00"
						value={product.price}
						onChange={handleChange}
					/>
					<br />
					<MediaInput
						name="media"
						label="Media"
						vertical
						placeholder="Upload Image"
						value={product.media}
						onChange={handleChange}
					/>
					{mediaPreview && (
						<img src={mediaPreview} alt={product.name} />
					)}
					<br />
					<TextArea
						name="description"
						label="Description"
						vertical
						placeholder="Enter a product description"
						rows="5"
						value={product.description}
						onChange={handleChange}
					/>
					<br />

					<Button theme="primary" type="submit">
						Create Product
					</Button>
				</Content>
			</form>
		</>
	)
}

export default CreateProduct
