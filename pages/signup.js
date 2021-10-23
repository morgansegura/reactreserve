import React from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import axios from 'axios'
import { baseUrl, catchErrors, connectDb } from 'utils'
import { handleLogin } from 'utils/auth'
import { WaveSpinner } from 'components/core/spinners/Wave'
import { Button, LoadingScreen as Screen, TextInput } from 'components/core'

const INITIAL_USER = {
	name: '',
	email: '',
	password: ''
}

const Signup = () => {
	const [user, setUser] = React.useState(INITIAL_USER)
	const [disabled, setDisabled] = React.useState(true)
	const [loading, setLoading] = React.useState(false)
	const [error, setError] = React.useState('')

	React.useEffect(() => {
		const isUser = Object.values(user).every(el => Boolean(el))
		isUser ? setDisabled(false) : setDisabled(true)
	}, [user])

	const handleChange = e => {
		const { name, value } = e.target

		setUser(prevState => ({ ...prevState, [name]: value }))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			setLoading(true)
			const url = `${baseUrl}/api/signup`
			const payload = { ...user }
			const response = await axios.post(url, payload)
			handleLogin(response.data)
			setError('')
		} catch (error) {
			catchErrors(error, setError)
			toast.error(`${error}`)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div>
			{loading && (
				<Screen text={`Creating New Account...`}>
					<WaveSpinner color="#3678b4" loading={loading} size={50} />
				</Screen>
			)}
			<div>
				<h4>Get Started</h4>
				<p>Create a new account</p>
			</div>
			<form onSubmit={handleSubmit}>
				<TextInput
					label="Name"
					type="text"
					vertical
					placeholder="Enter your name"
					name="name"
					value={user.name}
					onChange={handleChange}
					required
				/>
				<br />
				<TextInput
					label="Email"
					type="email"
					vertical
					placeholder="Enter your email"
					name="email"
					value={user.email}
					onChange={handleChange}
					required
				/>
				<br />
				<TextInput
					label="Password"
					type="password"
					vertical
					placeholder="Enter a password"
					name="password"
					value={user.password}
					onChange={handleChange}
					required
				/>
				<br />
				<Button theme="warning" disabled={disabled} type="submit">
					Signup
				</Button>
				<div>
					Have an account?{' '}
					<Link href="/login">
						<a>Log in here</a>
					</Link>{' '}
					instead.
				</div>
			</form>
		</div>
	)
}

export default Signup
