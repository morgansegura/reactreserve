import React from 'react'
import {
	Wrapper,
	Left,
	Right,
	InputControl,
	MediaFile,
	Label,
	FormGroup,
	MediaPlaceholder,
	MediaDescription
} from 'styles/inputs/MediaInput'

import { Button, Image } from 'components/core'

const MediaInput = ({
	type,
	name,
	label,
	placeholder,
	media,
	removePreview,
	mediaPreview,
	...props
}) => {
	const {
		name: mediaName,
		size: mediaSize,
		type: mediaType,
		lastModified
	} = media

	const removeMedia = () => {
		removePreview('')
	}

	return (
		<Wrapper preview={Boolean(mediaPreview)}>
			<Left>
				{Boolean(mediaPreview) && (
					<>
						{label && (
							<Label style={{ paddingBottom: '1rem' }}>
								{label}
							</Label>
						)}
						<Image src={mediaPreview} alt={mediaName} />
					</>
				)}
			</Left>
			<Right>
				<FormGroup {...props}>
					{Boolean(mediaPreview) === false ? (
						label && <Label>{label}</Label>
					) : (
						<MediaDescription>
							<h4>Media Details:</h4>
							<p>
								<b>File Name:</b> {mediaName}
							</p>
							<p>
								<b>Last Modified:</b> {lastModified}
							</p>
							<p>
								<b>Media Type:</b> {mediaType}
							</p>
							<p>
								<b>File Size:</b> {mediaSize}
							</p>
						</MediaDescription>
					)}
					<InputControl>
						<MediaFile>
							<>
								{Boolean(mediaPreview) ? (
									<MediaPlaceholder onClick={removeMedia}>
										Remove Image
									</MediaPlaceholder>
								) : (
									<>
										<input
											name={name}
											type="file"
											accept="image/*"
											content="Select Image"
										/>
										<MediaPlaceholder>
											{placeholder}
										</MediaPlaceholder>
									</>
								)}
							</>
						</MediaFile>
					</InputControl>
				</FormGroup>
			</Right>
		</Wrapper>
	)
}

export default MediaInput
