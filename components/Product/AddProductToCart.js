const AddProductToCart = () => {
	return (
		<>
			<input
				type="number"
				min="1"
				placeholder="Quantity"
				value={1}
				onChange={() => console.log('Add to cart')}
			/>
			<button>Add to Cart</button>
		</>
	)
}

export default AddProductToCart
