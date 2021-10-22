import React from 'react'
import {
	InputControl,
	NumbersInput,
	Label,
	FormGroup,
	StaticPlaceholder
} from 'styles/inputs/NumberInput'

const NumberInput = ({
	type,
	label,
	icon,
	name,
	value,
	min = 0,
	max,
	step,
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
				<NumbersInput
					name={name}
					type="number"
					min={min}
					max={max}
					value={value}
					step={step}
					onBlur={handleBlur}
					onFocus={handleFocus}
					onChange={handleValueChange}
					onKeyUp={handleKeyStroke}
				/>
				{placeholder && value.length === 0 && (
					<StaticPlaceholder>
						{icon} {placeholder}
					</StaticPlaceholder>
				)}
			</InputControl>
		</FormGroup>
	)
}

export default NumberInput
