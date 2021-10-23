import bcrypt from 'bcrypt'
import jwt, { TokenExpiredError } from 'jsonwebtoken'
import { connectDb } from 'utils'
import User from 'models/User'

connectDb()

export default async (req, res) => {
	const { email, password } = req.body

	try {
		// Check if user exists
		const user = await User.findOne({ email }).select('+password')
		// --if not, return error
		if (!user) {
			return res.status(404).send('No user exists with that email')
		}
		// check to see if user has a matching password
		const passwordsMatch = await bcrypt.compare(password, user.password)
		//--if so, generate token
		if (passwordsMatch) {
			const token = jwt.sign(
				{ userId: user._id },
				process.env.JWT_SECRET,
				{ expiresIn: '7d' }
			)
			// send token to client
			res.status(200).json(token)
		} else {
			console.log(error)
			res.status(401).send('Passwords do not match')
		}
	} catch (error) {
		res.status(401).send('Error logging in user')
		console.log(error)
	}
}
