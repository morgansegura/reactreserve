// Styled
import * as s from '@styles/Container'

export const Content = ({ children, as = 'div', ...props }) => {
	// sm:default, md, lg, xl
	return (
		<s.Content as={as} {...props}>
			{children}
		</s.Content>
	)
}

const Container = ({ children, as = 'div', ...props }) => {
	return (
		<s.Container as={as} {...props}>
			{children}
		</s.Container>
	)
}

export default Container
