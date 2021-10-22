import React from 'react'
import { ImageContainer, Img } from 'styles/Image'

const Image = ({ src, alt, ...props }) => {
	return (
		<ImageContainer {...props}>
			<Img src={src} alt={alt} />
		</ImageContainer>
	)
}

export default Image
