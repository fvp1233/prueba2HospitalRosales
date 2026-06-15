import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import {config} from "../../config.js"
import patientsModel from "../models/patients.js";

const loginPatientsController = {};

loginPatientsController.login = async(req, res) =>{
    try {
        const {email, password} = req.body;

        const patientFound = await patientsModel.findOne({email})

        if(!patientFound){
            return res.status(400).json({message: "patient not found"})
        }

        if(patientFound.timeOut && patientFound.timeOut > Date.now()){
            return res.status(403).json({message: "Blocked account"})
        }

        const isMatch = bcrypt.compare(password, patientFound.password)

        if(!isMatch){
            patientFound.loginAttemps = (patientFound.loginAttemps || 0) +1;
            if(patientFound.loginAttemps >= 5){
                patientFound.timeOut = Date.now() + 5 *60 *1000;
                patientFound.loginAttemps = 0;

                await patientFound.save();
                return res.status(403).json({message: "Blocked for many attemps"});
            }

            await patientFound.save();
            return res.status(400).json({message: "wrong password"})
        }

        patientFound.loginAttemps = 0;

        patientFound.timeOut = null;

        const token = jsonwebtoken.sign(
            {id: patientFound._id , userType: "Patient"},
            config.JWT.secret,
            {expiresIn: "30d"}
        )
        res.cookie("AuthCookie", token);
        return res.status(200).json({message: "login successfully"})
        
    } catch (error) {
        console.log("error" + error)
        return res.status(500).json({message: "Internal server error"})
    }
}
export default loginPatientsController