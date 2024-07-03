const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: [true, "please add a name"],
      },
      email: {
        type: String,
        required: [true, "please add an email"],
        unique: true,
        trim: true, // remove spaces in the email
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "please enter a valide email",
        ],
      },
      password: {
        type: String,
        required: [true, "please add a password"],
        minLength: [6, "password must be up to 6 characters"],
       // maxLength: [23, "password must not be more then 23 character"],
      },
  
      profile: {
        type: String,
        required: [true, "please add a profile picture"],
        default:
          "https://firebasestorage.googleapis.com/v0/b/image-respository-e99d0.appspot.com/o/light-bulb-with-fresh-green-leaf-inside-on-blurred-light-blue-background-ecological-and.jpg?alt=media&token=44110e06-25c8-4949-8dda-74b458384c7b",
      },
  
      phoneNumber: {
        type: String,
        default: "+237",
      },

      role: {
        type: String,
        default: "user",
      },

    },
    {
      timestamps: true,
    }
  );
  
  // Encrypt password before saving to database
  
  userSchema.pre("save", async function(next){
  
  if(!this.isModified("password")){
  return next();
  }
  
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();  
});

const User = mongoose.model("User", userSchema)
module.exports = User