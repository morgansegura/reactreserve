import styled from 'styled-components'
import * as include from 'styles/utilities'
import { rgba, readableColor } from 'polished'

export const ModalWrapper = styled.div`
	overflow: hidden;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: ${rgba(include.neutral['90'], 0.5)};
	display: flex;
	align-items: center;
	justify-content: center;
`

export const CloseButton = styled.div`
	cursor: pointer;
	position: absolute;
	${include.fontSizing('12px', '24px', '600')};
	top: ${include.sp['2']};
	right: ${include.sp['2']};
	display: inline-flex;
	align-self: flex-end;
	background-color: ${include.cyan['50']};
	color: ${readableColor(include.cyan['50'])};
	padding: ${include.sp['0.5']} ${include.sp['1']};
	${include.radius['sm']}
	transition: color 0.3s ease-out, background-color 0.3s ease-out;

	&:hover {
		background-color: ${include.cyan['40']};
		color: ${include.neutral['00']};
	}
`

export const ModalContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: ${include.contain['xs']};
`
export const ModalContent = styled.div`
	padding: ${include.sp['4']};
	flex: 1;
	${include.shadow['card']};
	${include.radius['md']};
	background-color: ${include.neutral['00']};
	${include.body['small']}

	p {
		color: ${include.neutral['60']};
	}
`
