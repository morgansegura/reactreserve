import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import axios from 'axios'
import { baseUrl, catchErrors } from 'utils'
import { WaveSpinner } from 'components/core/spinners/Wave'
import { Button, LoadingScreen as Screen, TextInput } from 'components/core'
import { handleLogin } from '../utils/auth'

const INITIAL_USER = {
	email: '',
	password: ''
}

const Signup = () => {
	const router = useRouter()
	const [user, setUser] = React.useState(INITIAL_USER)
	const [disabled, setDisabled] = React.useState(true)
	const [success, setSuccess] = React.useState(false)
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
			setError('')
			const url = `${baseUrl}/api/login`
			const payload = { ...user }
			const request = await axios.post(url, payload)
			handleLogin(response.data)
		} catch (error) {
			catchErrors(error, setError)
			toast.error(`${error.message || error}`)
			console.log(error.message)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div>
			{loading && (
				<Screen text={`Logging you in...`}>
					<WaveSpinner color="#3678b4" loading={loading} size={50} />
				</Screen>
			)}
			<div>
				<h4>Get Started</h4>
				<p>Login to your account</p>
			</div>
			<form onSubmit={handleSubmit}>
				<br />
				<TextInput
					label="Email"
					type="email"
					vertical
					placeholder="Enter your email"
					name="email"
					value={user.email}
					onChange={handleChange}
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
				/>
				<br />
				<Button theme="warning" disabled={disabled} type="submit">
					Login
				</Button>
				<div>
					Don't have an account?{' '}
					<Link href="/signup">
						<a>Log in here</a>
					</Link>{' '}
					instead.
				</div>
			</form>
		</div>
	)
}

export default Signup
