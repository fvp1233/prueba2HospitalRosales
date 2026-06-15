const logoutController = {};

logoutController.logout = async(req, res) =>{
    res.clearCookie("AuthCookie");
    return res.status(200).json({message: "Sign Out"});
}

export default logoutController