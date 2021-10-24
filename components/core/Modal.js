import React from 'react'
import { Button } from 'components/core'
import { Container, Content } from 'styles/Container'
import { ModalWrapper, ModalContent, ModalContainer } from 'styles/Modal'

const Modal = ({ children, close }) => {
	return (
		<ModalWrapper>
			<Container>
				<Content>
					<ModalContainer>
						<ModalContent>{children}</ModalContent>
					</ModalContainer>
				</Content>
			</Container>
		</ModalWrapper>
	)
}

export default Modal
