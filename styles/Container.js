import styled from 'styled-components'
import * as include from 'styles/utilities'

export const Container = styled(props => props.as)`
	position: relative;
	${include.container['xxl']}
`
export const Content = styled(props => props.as)`
	position: relative;
	${include.container['xl']}
`
