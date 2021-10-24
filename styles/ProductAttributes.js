import styled, { css } from 'styled-components'
import * as include from 'styles/utilities'

export const Wrapper = styled.div``

export const ImageContainer = styled.div`
	${include.radius['md']};
	overflow: hidden;
	background-color: ${include.neutral['10']};
	margin-bottom: ${include.sp['2']};

	img {
		mix-blend-mode: multiply;
	}
	${include.media.lg`
		grid-column: 1/6;
	`}
	${include.media.xl`
		margin-bottom: unset;
	`}
`
export const AttributeGrid = styled.div`
	${include.media.lg`
		${include.grid()}
	`}
`
export const AttributeListGrid = styled.div`
	${include.media.xl`
		display: flex;
		justify-content: space-between;
		padding-bottom: ${include.sp['5']};
		margin-bottom: ${include.sp['5']};
		border-bottom: 1px solid ${include.neutral['10']};
	`}
`

export const AttrbuteContainer = styled.div`
	${include.radius['md']};

	margin-bottom: ${include.sp['3']};
	padding: ${include.sp['6']} ${include.sp['4']};
	background-color: ${include.neutral['00']};

	strong {
		font-weight: 600;
		padding-right: ${include.sp['0.5']};
	}

	${include.media.lg`
		grid-column: 6/13;
	`}

	${include.media.xl`
		margin-bottom: unset;
	`}
`
export const ListItems = styled.div`
	${include.media.xl`
		grid-column: 1/8;
	`}
`
export const ListItem = styled.div`
	padding-bottom: ${include.sp['0.5']};
`

export const AddProduct = styled.div`
	display: flex;
	grid-gap: ${include.sp['1.5']};
	margin-top: ${include.sp['4']};
	padding-bottom: ${include.sp['5']};
	margin-bottom: ${include.sp['5']};
	border-bottom: 1px solid ${include.neutral['10']};

	${include.media.xl`
		margin-top: ${include.sp['2.5']};
		padding-bottom: 0;
		margin-bottom: ${include.sp['2.5']};
		border-color: transparent;
		grid-column: 8/13;
	`}

	& > div {
		flex: 1;
	}
	button {
		display: inline-flex;
		justify-content: center;
	}
`
