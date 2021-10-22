import React from 'react'
import {
	Placeholder,
	InputControl,
	Input,
	Label,
	FormGroup
} from '@styles/inputs/TextInput'

const TextInput = ({ type, name, value, label, placeholder, ...props }) => {
	const inputRef = React.useRef()
	const [focus, setFocus] = React.useState(false)
	// const [values, setValue] = React.useState(value)

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
				<Input
					name={name}
					value={value}
					type={type}
					onBlur={handleBlur}
					onFocus={handleFocus}
					onChange={handleValueChange}
					onKeyUp={handleKeyStroke}
				/>
				{placeholder && <Placeholder>{placeholder}</Placeholder>}
			</InputControl>
		</FormGroup>
	)
}

export default TextInput
