import styled, { css } from 'styled-components'
import * as include from 'styles/utilities'
import { fadeIn, fadeOut } from 'styles/keyframes'
import { rgba, readableColor } from 'polished'

export const ProductCardMediaContainer = styled.div`
	border-bottom: 1px solid ${include.alpha['90-a10']};
	background-color: ${include.neutral['00']};
	transition: background-color 0.3s ease-out;
`

export const ProductCard = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	flex-direction: column;
	background-color: ${include.neutral['00']};
	${include.radius['md']};
	overflow: hidden;
	transform: scale(1);
	/* cursor: pointer; */
	transition: all 0.3s ease-out;

	${props =>
		props.active
			? `
					${include.shadow['card']};
					${ProductCardMediaContainer} {
						background-color: ${rgba(include.blue['10'], 0.3)};
					}
			  `
			: `
				&:hover {
					${include.shadow['card']};
					${ProductCardMediaContainer} {
						background-color: ${rgba(include.yellow['10'], 0.3)};
					}
				}
			`}
`
export const ProductCardDetails = styled.div`
	position: relative;
	flex: 1;
	display: flex;
	flex-direction: column;
	padding-top: ${include.sp['3']};
	padding-right: ${include.sp['3']};
	padding-left: ${include.sp['3']};
	transition: height 0.3s ease;
`
export const ProductCardMeta = styled.div`
	position: relative;
	justify-self: flex-end;
	display: flex;
	/* flex-direction: column; */
	justify-content: space-between;
	padding-top: ${include.sp['2']};
	padding-right: ${include.sp['3']};
	padding-left: ${include.sp['3']};
	padding-bottom: ${include.sp['3']};
`

export const ProductCardName = styled.h5`
	a {
		text-decoration: none;
		color: ${include.neutral['90']};
	}
`

export const ProductCardPrice = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	justify-content: flex-end;

	span {
		${include.tag['bold']};
		background-color: ${include.turquoise['20']};
		color: ${readableColor(include.turquoise['20'])};
		padding: ${include.sp[0.5]} ${include.sp[1.5]};
		${include.radius['lg']};
	}
`
export const ProductCardDescription = styled.div`
	flex: 1 0 auto;
	${include.body['small']};
	color: ${include.neutral['70']};
	transition: all 0.3s ease-out;

	${props =>
		props.active
			? `
					position: relative;
					margin-top: ${include.sp['1.5']};
					height: 100%;
					${include.visible}
			  `
			: `
					position: absolute;
					margin-top: 0;
					height: 0;
					${include.invisible}
			  `}
`
export const ProductCardToggleDetails = styled.button`
	display: flex;
	align-items: center;
	cursor: pointer;
	z-index: 2;
	${include.tag['important']};
	${include.radius['sm']};
	border: none;
	padding: ${include.sp[0.5]} ${include.sp[1.5]};
	color: ${readableColor(include.neutral['10'])};
	background-color: ${include.neutral['10']};
	transition: color 0.3s ease-out, background-color 0.3s ease-out;

	&:hover {
		background-color: ${include.neutral['20']};
		color: ${readableColor(include.neutral['10'])};
	}
`

export const ProductCardMedia = styled('img')`
	mix-blend-mode: multiply;

	width: 100%;
	height: auto;
`
