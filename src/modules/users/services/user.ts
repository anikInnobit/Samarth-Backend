// import User from '../models/userModel'
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import sequelize from "sequelize";

// export class userService {
//     //this is to get all the user
//     async getUser(req:any) {
//         try {
//             console.log("666666666666666")
//             let user = await User.findAll()
//             return Promise.resolve(user)
//         }
//         catch (err) {
//             return Promise.reject(err)
//         }
//     }

//     // this is to get user by Id
//     async getUserById(req:any) {
//         try {
//             let userExist = await User.findByPk(req.params.id)
//             if (!userExist) {
//                 throw (`user with id ${req.params.id} does not exist`)
//             }
//             return Promise.resolve(userExist)
//         }
//         catch (err) { return Promise.reject(err) }
//     }

//     //this is to create user
//     async createUser(req:any) {
//         try {
            
//             const username = req.body.username
            

//             let existingUser = await User.findAll()

//             // if(existingUser){
//             //     throw (`user with username ${username} already exists`)
//             // }

//             //creating user 
//             const user = await User.create(req.body)
//             console.log(user)
//             return Promise.resolve(user);
//         }
//         catch (err) {
//             return Promise.reject(err)
//         }
//     }

//     // this is to update user by Id
//     async updateUser(req:any) {
//         try {
//             // check if user exist or not
//             let userExist = await User.findByPk(req.params.id)
//             if (!userExist) {
//                 throw (`user with id ${req.params.id} does not exist`)
//             }

//             let user = await User.update(req.body, {
//                 where: { id: req.params.id },
//                 returning:true
//             })
//             return Promise.resolve(user)
//         } catch (err) {
//             return Promise.reject(err)
//         }

//     }

//     //this is to delete user by Id 
//     async deleteUser(req:any) {
//         try {
//             let existingUser = await User.findByPk(req.params.id);

//             // throw error if user is not exist
//             if ((!existingUser)) {
//                 throw ('user to be deleted is not found')
//             }

//             // delete user 
//             await User.destroy({ where: { id: req.params.id } })

//             return Promise.resolve('user deleted successfully')
//         } catch (err) { return Promise.reject(err) }
//     }

//     async register(req:any) {
//         try {
//           console.log("controller hit-----",req)
//             let {firstName,lastName,contactNumber,otp} = req.body

//             if (!(contactNumber && otp && firstName && lastName)) {
//                 console.log("All input is required");
//               }

//             let existingUser = await User.findOne({where:{contactNumber:contactNumber}})

//             if(existingUser){
//                 throw (`user with username ${contactNumber} already exists`)
//             }

//           const encryptedPassword = await bcrypt.hash(otp, 10);

//             //creating user 
//             const user = await User.create({firstName,lastName,contactNumber,otp:encryptedPassword});

//             console.log("user------",user)
          
//             // const token = jwt.sign(
//             //     { user_id: user.id,contactNumber },
//             //     process.env.TOKEN_KEY,
//             //     {
//             //       expiresIn: "2h",
//             //     }
//             //   );

//             //   user.token = token;
//   } catch (err) {
//     console.log(err);
//   }
           
       
//     }

// }

