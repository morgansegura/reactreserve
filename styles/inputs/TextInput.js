import styled, { css } from 'styled-components'
import * as include from 'styles/utilities'
import { rgba } from 'polished'

const InputBase = css`
	flex-grow: 1;
	padding-right: ${include.sp['2']};
	padding-left: ${include.sp['2']};
	${include.radius['sm']}
	font-family: ${include.font['family']};
	border: 2px solid ${include.neutral['10']};
	outline: 5px solid transparent;
	transition: outline 0.3s ease-out, border-color 0.3s ease-out;

	:focus {
		outline: 5px solid ${rgba(include.cyan['30'], 0.25)};
		border: 2px solid ${rgba(include.cyan['50'], 0.35)};
	}
`
const PlaceholderBase = css`
	position: absolute;
	left: ${include.sp['2']};
	pointer-events: none;
	${include.fontSizing('14px', '28px')};
	color: ${include.neutral['30']};
	transition: transform 0.1s ease-out;
`

export const Label = styled.label``

export const FormGroup = styled.div`
	${props =>
		props.vertical === true
			? css`
					${Label} {
						display: block;
						margin-bottom: ${include.sp['1.5']};
					}
			  `
			: css`
					display: flex;
					align-items: center;
					grid-gap: ${include.sp['1.5']};
			  `}
`

export const Input = styled.input`
	${InputBase}
	padding-top: ${include.sp['1']};
	padding-bottom: ${include.sp['1']};
	${include.fontSizing('14px', '42px')};
`

export const Placeholder = styled.div`
	${PlaceholderBase}
	top: 50%;
	transform: translateY(-50%);
`

export const InputControl = styled.div`
	position: relative;
	display: flex;
	flex: 1;

	${props =>
		props.focus === true
			? css`
					${Input} {
						padding-top: ${include.sp['2.5']};
						padding-bottom: ${include.sp['0.5']};
					}
					${Placeholder} {
						top: 50%;
						transform: translateY(-110%);
						${include.fontSizing('12px', '24px')};
					}
			  `
			: css``}
`
