import React from 'react'
import { LoadingScreen as Screen, LoadingText } from 'styles/Loading'

export const LoadingScreen = ({ children, text, ...props }) => {
	return (
		<Screen {...props}>
			{children}
			<LoadingText>{text}</LoadingText>
		</Screen>
	)
}
