import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
	avatar: {
		type: {
			url: String,
			localPath: String
		},
		default: {
			url: "https://placehold.co/200x200",
			localPath: null
		}
	},
	name: {
		type: String,
		required: [true, "Name is required"],
		unique: true,
		lowercase: true,
		trim: true,
		index: true,
	},
	fullName: {
		type: String,
		required: [true, "Full name is required"],
		trim: true,
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: true,
		lowercase: true,
		trim: true,
		index: true,
	},
	emailVerificationToken: {
		type: String,
	},
	emailVerificationTokenExpiration: {
		type: Date,
	},
	verified: {
		type: Boolean,
		default: false,
	},
	verificationToken: {
		type: String,
	},
	forgotPasswordToken: {
		type: String,
	},
	forgotPasswordTokenExpiration: {
		type: Date,
	},
	password: {
		type: String,
		required: [true, "Password is required"],
	},
},
	{
		timestamps: true
	}
)

userSchema.pre("save", async function(next) {
	if (!this.isModified("password")) {
		return next()
	}
	this.password = await bcrypt.hash(this.password, 10)
	next()
})

export const Users = mongoose.model("Users", userSchema)
