import styled, { css } from 'styled-components'
import * as include from 'styles/utilities'
import { rgba, readableColor } from 'polished'

export const Label = styled.label`
	display: block;
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

export const MediaFile = styled.div`
	position: relative;
	flex: 1;
	min-height: 70px;
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

export const InputControl = styled.div`
	position: relative;
	display: flex;
	flex: 1;
`

export const Left = styled.div`
	content: '';
`
export const Right = styled.div``

export const MediaDescription = styled.div`
	display: flex;
	flex-direction: column;

	padding: ${include.sp['3']};
	border: 1px solid ${include.neutral['10']};
	h4 {
		padding-bottom: ${include.sp['0.5']};
	}
	p,
	b {
		${include.fontSizing('16px', '32px')};
	}
	p {
		color: ${include.neutral['50']};
	}
	b {
		color: ${include.neutral['90']};
		font-weight: 700;
		padding-right: ${include.sp['0.5']};
	}
`

export const Wrapper = styled.div`
	${props => console.log(props.preview)}
	${props =>
		props.preview === true &&
		css`
			${include.grid('2', '1fr')}
			grid-gap: ${include.sp['8']}

			${Label} {
				display: block;
			}

			${MediaPlaceholder} {
				background-color: ${include.state['danger-50']};
				color: ${readableColor(include.state['danger-50'])};
				padding-top: ${include.sp['3']};
				padding-bottom: ${include.sp['3']};
				margin-top: ${include.sp['2']};
			}

			${MediaFile} {
				&:hover {
					${MediaPlaceholder} {
						background-color: ${rgba(
							include.state['danger-50'],
							0.85
						)};
						outline: 5px solid
							${rgba(include.state['danger-50'], 0.25)};
						border: 2px solid
							${rgba(include.state['danger-50'], 0.35)};
					}
				}
			}

			${Left} {
				grid-column: 1/12;

				${include.media['lg']`
					grid-column: 1/6;
				`}
			}

			${Right} {
				display: flex;
				flex-direction: column;
				grid-column: 1/12;

				${include.media['lg']`
					margin-top: ${include.sp['4']};
					grid-column: 7/12;
				`}
			}
		`}
`
