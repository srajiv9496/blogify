const { createHmac, randomBytes } = require("crypto")
const {Schema, model} = require("mongoose");
const { createTokenForUser } = require("../services/authentication");

const userSchema = new Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }, 
    salt: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    profileImageURL: {
        type: String,
        default: '/images/default/webp',
    },
    role: {
        type: String,
        email: ["USER", "ADMIN"],
        default: "USER",
    },
}, {timestamps: true,});

userSchema.pre("save", function(next) {
    const user = this;
    if(!user.isModified("password")) return next();

    const salt = randomBytes(16).toString("hex");
    // const salt = '123456'

    const hashedPassword = createHmac("sha256", salt)
        .update(user.password)
        .digest("hex");

    this.salt = salt;
    this.password = hashedPassword;

    next();
});

userSchema.static("matchPasswordAndGenerateToken", async function(email, password){
    // console.log(email);
    const user = await this.findOne({ email });

    // console.log(user);

    if(!user){ 
        throw new Error("User not found");
    }

    const salt = user.salt;
    const hashedPassword = user.password;

    const userProvidedHash = createHmac("sha256", salt)
        .update(password)
        .digest("hex");

    if(hashedPassword !== userProvidedHash) throw new Error("Incorrect Password");

    const token = createTokenForUser(user);
    return token;
});

const User = model('user', userSchema);

module.exports = User;
