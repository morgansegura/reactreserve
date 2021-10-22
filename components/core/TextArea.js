import React from 'react'
import {
	TextAreaPlaceholder,
	InputControl,
	TextAreaInput,
	Label,
	FormGroup
} from '@styles/inputs/TextArea'

const TextArea = ({
	type,
	label,
	name,
	value,
	rows = 10,
	placeholder,
	...props
}) => {
	const inputRef = React.useRef()
	const [focus, setFocus] = React.useState(false)

	const handleFocus = () => {
		setFocus(true)
	}

	const handleBlur = () => {
		if (value.length > 0) {
			setFocus(true)
		} else {
			setFocus(false)
		}
	}

	const handleKeyStroke = () => {
		if (value.length > 0) {
			setFocus(true)
		} else {
			setFocus(false)
		}
	}
	const handleValueChange = e => {
		handleKeyStroke()
	}

	React.useEffect(() => {
		handleKeyStroke()
	}, [value])

	return (
		<FormGroup {...props} ref={inputRef}>
			{label && <Label>{label}</Label>}
			<InputControl focus={focus}>
				<TextAreaInput
					type={type}
					rows={rows}
					name={name}
					value={value}
					onBlur={handleBlur}
					onFocus={handleFocus}
					onChange={handleValueChange}
					onKeyPress={handleKeyStroke}
				/>
				{placeholder && (
					<TextAreaPlaceholder>{placeholder}</TextAreaPlaceholder>
				)}
			</InputControl>
		</FormGroup>
	)
}

export default TextArea
