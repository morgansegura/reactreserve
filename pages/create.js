import React from 'react'
import toast from 'react-hot-toast'
import { WaveSpinner } from 'react-spinners-kit'
import axios from 'axios'
import { baseUrl, catchErrors } from 'utils'
import {
	Button,
	Content,
	Grid,
	Image,
	LoadingScreen as Screen,
	MediaInput,
	NumberInput,
	TextArea,
	TextInput
} from 'components/core'

import { ImageContainer, Img } from 'styles/Image'

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
	const [loading, setLoading] = React.useState(false)
	const [error, setError] = React.useState('')

	const handleChange = e => {
		const { name, value, files } = e.target
		if (name === 'media') {
			setProduct(prevState => ({ ...prevState, media: files[0] }))
			setMediaPreview(window.URL.createObjectURL(files[0]))
		} else {
			setProduct(prevState => ({ ...prevState, [name]: value }))
		}
	}

	const removeImage = () => {
		setMediaPreview('')
	}

	const handleImageUpload = async () => {
		const data = new FormData()
		data.append('file', product.media)
		data.append('upload_preset', 'reactreserve')
		data.append('cloudname', 'segurallc')
		const response = await axios.post(process.env.CLOUDINARY_URL, data)
		const mediaUrl = response.data.url
		return mediaUrl
	}

	const handleSubmit = async e => {
		try {
			e.preventDefault()
			setLoading(true)
			const mediaUrl = await handleImageUpload()
			const url = `${baseUrl}/api/product`
			const { name, price, description } = product
			const payload = { name, price, description, mediaUrl }
			await axios.post(url, payload)
			toast.success(`Product saved.`)
			setProduct(INITIAL_PRODUCT)
			removeImage()
			setSuccess(true)
		} catch (err) {
			catchErrors(err, setError)
			toast.error(`${error.message || error}`)
			console.log(error)
		} finally {
			setLoading(false)
		}
	}
	return (
		<>
			{loading && (
				<Screen text={`Saving...`}>
					<WaveSpinner color="#3678b4" loading={loading} size={50} />
				</Screen>
			)}
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
						media={product.media}
						mediaPreview={mediaPreview}
						removePreview={removeImage}
						placeholder="Upload Image"
						value={product.media}
						onChange={handleChange}
					/>
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

					<Button theme="primary" disabled={loading} type="submit">
						Create Product
					</Button>
				</Content>
			</form>
		</>
	)
}

export default CreateProduct
