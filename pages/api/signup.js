import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { connectDb } from 'utils'
import User from 'models/User'

connectDb()

export default async (req, res) => {
	const { name, email, password } = req.body

	try {
		// Check if user exists
		const user = await User.findOne({ email })
		if (user) {
			return res
				.status(422)
				.send(`User already exists with email ${email}`)
		}
		// --if not, hash their password
		const hash = await bcrypt.hash(password, 10)

		// create user
		const newUser = await new User({
			name,
			email,
			password: hash
		}).save()
		console.log({ newUser })
		// create token for new user
		const token = jwt.sign(
			{ userId: newUser._id },
			process.env.JWT_SECRET,
			{
				expiresIn: '7d'
			}
		)
		// sendback token
		res.status(201).json(token)
	} catch (error) {
		res.status(500).send('Error sign up user. Please try again later.')
		console.log(error)
	}
}
