import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { roleType } from 'utils/auth'
import { useLockBodyScroll, useToggle } from 'react-use'
import baseUrl from 'utils/baseUrl'
import { Button, Modal } from 'components/core'

const ProductAttributes = ({ user, _id, description, name }) => {
	const [active, setActive] = React.useState(false)
	const [locked, toggleLocked] = useToggle(false)
	const router = useRouter()
	const { isRootOrAdmin } = roleType(user)

	useLockBodyScroll(locked)

	const toggleModal = () => {
		setActive(!active)
	}

	const handleDelete = async () => {
		const url = `${baseUrl}/api/product`
		const payload = { params: { _id } }
		await axios.delete(url, payload)
		router.push('/')
	}

	return (
		<>
			<h3>About this product:</h3>
			<div>{description}</div>
			{isRootOrAdmin && (
				<Button onClick={toggleModal} theme="danger" size="sm">
					Delete Product
				</Button>
			)}

			{active && (
				<Modal active={active} close={() => setActive(false)}>
					<p>
						Do you really want to delete {name}?{' '}
						<Button
							type="dark"
							size="md"
							outline
							onClick={toggleModal}>
							Cancel
						</Button>
						<Button type="danger" size="md" onClick={handleDelete}>
							Delete
						</Button>
					</p>
				</Modal>
			)}
		</>
	)
}

export default ProductAttributes
