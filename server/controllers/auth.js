import mysql from 'mysql'
import db from '../index.js'
import { v4 as uuidv4} from 'uuid'
const login = async(req, res) =>{
    const {username, password} = req.body

    
}


const signup = async(req, res) =>{
    // const {name, email, password}= req.body;
    // try{
    //     const existinguser=await User.findOne({email})
    //     if(existinguser){
    //         return res.status(404).json({message: "User already Exist."})
    //     }
    //     const hashedPassword=await bcrypt.hash(password,12)
    //     const newUser=await User.create({name,email,password: hashedPassword})
        
    //     const token=jwt.sign({email: newUser.email, id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '1h'})
    //     res.status(200).json({result: newUser, token})
    // }catch(err){
    //     res.status(500).json(err)
    // }    
    
    const sql = "INSERT INTO user_details (`name`,`email`,`password`,`age`,`gender`,`country`,`signup_date`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.age,
        req.body.gender,
        req.body.country,
        Date.now().toLocaleString()
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            return res.status(404).json("Error")
        }
        return res.status(200).json(data)
    })
}

export {login, signup}