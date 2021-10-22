import styled from 'styled-components'
import * as include from 'styles/utilities'
import { rgba } from 'polished'

export const LoadingScreen = styled.div`
	position: fixed;
	z-index: 1000;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${rgba(include.neutral['00'], 0.9)};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const LoadingText = styled.div`
	margin-top: ${include.sp['2']};
	${include.fontSizing('20px', '40px', '600')}
`
