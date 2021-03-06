import mongoose from 'mongoose'
import shortid from 'shortid'

const { String, Number } = mongoose.Schema.Types

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true,
			select: false
		},
		role: {
			type: String,
			required: true,
			default: 'user',
			enum: ['user', 'admin', 'root']
		}
	},
	{
		timestamps: true
	}
)

export default mongoose.models.User || mongoose.model('User', UserSchema)
