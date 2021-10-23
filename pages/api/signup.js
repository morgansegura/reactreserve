import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { connectDb } from 'utils'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'
import User from 'models/User'

connectDb()

export default async (req, res) => {
	const { name, email, password } = req.body

	try {
		// Validate fields
		if (!isLength(name, { min: 3, max: 30 })) {
			return res
				.status(422)
				.send('Name must be 3-10 characters in length.')
		} else if (!isLength(password, { min: 8 })) {
			return res
				.status(422)
				.send('Email must be at least 8 characters in length.')
		} else if (!isEmail(email)) {
			return res.status(422).send('Must be a valid email address.')
		}
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
		console.log(error)
		res.status(500).send('Error sign up user. Please try again later.')
	}
}
