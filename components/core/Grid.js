import React from 'react'
import { Wrapper } from 'styles/Grid'

export const Grid = ({ children, ...props }) => {
	return <div {...props}>{children}</div>
}
