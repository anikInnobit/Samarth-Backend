"use strict";
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from "../models/user";
// var localConstant = require('../utils/constant');
// export class userService {
//   //   async register(req:any) {
//   //       try {
//   //         console.log("controller hit-----",req)
//   //           let {firstName,lastName,contactNumber,otp} = req.body
//   //           if (!(contactNumber && otp && firstName && lastName)) {
//   //               console.log("All input is required");
//   //             }
//   //           let existingUser = await User.findOne({where:{contactNumber:contactNumber}})
//   //           if(existingUser){
//   //               throw (`user with username ${contactNumber} already exists`)
//   //           }
//   //         const encryptedPassword = await bcrypt.hash(otp, 10);
//   //           //creating user 
//   //           const user = await User.create({firstName,lastName,contactNumber,otp:encryptedPassword});
//   //           console.log("user------",user)
//   //           // const token = jwt.sign(
//   //           //     { user_id: user.id,contactNumber },
//   //           //     process.env.TOKEN_KEY,
//   //           //     {
//   //           //       expiresIn: "2h",
//   //           //     }
//   //           //   );
//   //           //   user.token = token;
//   // } catch (err) {
//   //   console.log(err);
//   // }
//   //   }
// }
