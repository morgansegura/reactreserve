import React from 'react'
import {
	InputControl,
	MediaFile,
	Label,
	FormGroup,
	MediaPlaceholder
} from 'styles/Inputs'

const MediaInput = ({ type, name, label, placeholder, ...props }) => {
	return (
		<FormGroup {...props}>
			{label && <Label>{label}</Label>}
			<InputControl>
				<MediaFile>
					<input
						name={name}
						type="file"
						accept="image/*"
						content="Select Image"
					/>
					<MediaPlaceholder>{placeholder}</MediaPlaceholder>
				</MediaFile>
			</InputControl>
		</FormGroup>
	)
}

export default MediaInput
