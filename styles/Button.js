import styled, { css } from 'styled-components'
import * as include from 'styles/utilities'
import { rgba, readableColor } from 'polished'

export const ButtonType = styled(props => props.as)`
	cursor: pointer;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	letter-spacing: 0.02857em;
	transition: opacity 0.3s ease-out;

	&:hover {
		opacity: 0.75;
	}

	${({ size }) =>
		size === 'xs'
			? css`
					${include.fontSizing('12px', '24px', '500')};
					padding: 2px 8px;
			  `
			: size === 'sm'
			? css`
					${include.fontSizing('13px', '26px', '500')};
					padding: 4px 10px;
			  `
			: size === 'lg'
			? css`
					${include.fontSizing('15px', '28px', '500')};
					padding: 6px 16px;
			  `
			: css`
					${include.fontSizing('14px', '28px', '500')};
					padding: 6px 16px;
			  `}

	${props =>
		props.theme === 'primary'
			? css`
					background-color: ${include.cyan['50']};
					border: 1px solid ${include.cyan['50']};
					color: ${!props.outline
						? readableColor(include.cyan['50'])
						: include.cyan['40']};
			  `
			: props.theme === 'secondary'
			? css`
					background-color: ${include.yellow['20']};
					border: 1px solid ${include.yellow['20']};
					color: ${!props.outline
						? readableColor(include.yellow['20'])
						: include.yellow['20']};
			  `
			: props.theme === 'danger'
			? css`
					background-color: ${include.state['danger-50']};
					border: 1px solid ${include.state['danger-50']};
					color: ${!props.outline
						? readableColor(include.state['danger-50'])
						: include.state['danger-50']};
			  `
			: props.theme === 'warning'
			? css`
					background-color: ${include.state['warning-50']};
					border: 1px solid ${include.state['warning-50']};
					color: ${!props.outline
						? readableColor(include.state['warning-50'])
						: include.state['warning-50']};
			  `
			: props.theme === 'success'
			? css`
					background-color: ${include.state['success-50']};
					border: 1px solid ${include.state['success-50']};
					color: ${!props.outline
						? readableColor(include.state['success-50'])
						: include.state['success-50']};
			  `
			: props.theme === 'dark'
			? css`
					background-color: ${include.neutral['90']};
					border: 1px solid ${include.neutral['90']};
					color: ${!props.outline
						? readableColor(include.neutral['90'])
						: include.neutral['90']};
			  `
			: props.theme === 'light'
			? css`
					background-color: ${include.neutral['00']};
					border: 1px solid ${include.neutral['00']};
					color: ${!props.outline
						? readableColor(include.neutral['00'])
						: include.neutral['00']};
			  `
			: css`
					background-color: ${include.neutral['20']};
					border: 1px solid
						${!props.outline
							? include.neutral['20']
							: include.neutral['60']};
					color: ${!props.outline
						? readableColor(include.neutral['20'])
						: include.neutral['60']};
			  `}

	${({ disabled }) =>
		disabled === true &&
		css`
			pointer-events: none;
			background-color: ${include.neutral['10']};
			border: 1px solid ${include.neutral['00']};
			color: ${include.neutral['40']};
		`}

	${({ radius }) =>
		radius === 'md'
			? css`
					${include.radius['md']};
			  `
			: radius === 'none'
			? css`
					${include.radius['none']};
			  `
			: radius === 'round'
			? css`
					${include.radius['round']};
			  `
			: css`
					${include.radius['sm']};
			  `}

	${({ outline }) =>
		outline
			? css`
					background-color: transparent;
			  `
			: css``}

	${({ important }) =>
		important
			? css`
					text-transform: uppercase;
					letter-spacing: 0.02857em;
			  `
			: css``}
`
