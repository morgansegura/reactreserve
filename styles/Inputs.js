import styled, { css } from 'styled-components'
import * as include from 'styles/utilities'
import { rgba, readableColor } from 'polished'

export const Form = styled.div``

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
export const TextAreaInput = styled.textarea`
	${InputBase}
	padding-top: ${include.sp['2']};
	padding-bottom: ${include.sp['1']};
	${include.fontSizing('14px', '28px')};
	transition: translateY(0);
`

export const NumbersInput = styled.input`
	${InputBase}
	padding-top: ${include.sp['2']};
	padding-bottom: ${include.sp['2']};
	${include.fontSizing('14px', '28px')};

	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		/* -webkit-appearance: none;
		margin: 0; */
	}
	&::-webkit-inner-spin-button {
	}
	&::-webkit-outer-spin-button {
	}
	&::-webkit-inner-spin-button {
		opacity: 1;
	}
`

export const Placeholder = styled.div`
	${PlaceholderBase}
	top: 50%;
	transform: translateY(-50%);
`

export const StaticPlaceholder = styled.div`
	${PlaceholderBase}
	top: 50%;
	transform: translateY(-50%);
`

export const MediaPlaceholder = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	${include.fontSizing('15px', '30px', '600')};
	background-color: ${include.cyan['50']};
	color: ${readableColor(include.cyan['50'])};
	${include.radius['md']}
	text-transform: uppercase;
	cursor: pointer;
	outline: 5px solid transparent;
	border: 2px solid transparent;
	transition: background-color 0.3s ease-out, outline 0.3s ease-out,
		border-color 0.3s ease-out;
`

export const MediaFile = styled.div`
	position: relative;
	flex: 1;
	${include.fontSizing('14px', '28px')};

	&:hover {
		${MediaPlaceholder} {
			background-color: ${rgba(include.cyan['50'], 0.85)};
			outline: 5px solid ${rgba(include.cyan['30'], 0.25)};
			border: 2px solid ${rgba(include.cyan['50'], 0.35)};
		}
	}

	input {
		cursor: pointer;
		position: relative;
		z-index: 2;
		opacity: 0;
		width: 100%;
		padding-top: ${include.sp['2']};
		padding-bottom: ${include.sp['2']};
	}
`

export const TextAreaPlaceholder = styled.div`
	${PlaceholderBase}
	top: ${include.sp['2']};
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
					${TextAreaInput} {
						padding-top: ${include.sp['3.5']};
						padding-bottom: ${include.sp['0.5']};
					}
					${Placeholder} {
						top: 50%;
						transform: translateY(-110%);
						${include.fontSizing('12px', '24px')};
					}

					${TextAreaPlaceholder} {
						transform: translateY(calc(-15%));
						${include.fontSizing('12px', '24px')};
					}
			  `
			: css``}
`
