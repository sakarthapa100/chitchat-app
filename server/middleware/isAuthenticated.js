const isAuthenticate = (req, res, next) => {
  try {
    let token = req.cookies.token
if(!token){
  return res.status(401).json({
    message:"User not authenticated ",
    success:false
  })
}
    console.log(token)
    next()
  } catch (error) {
    console.log(error)
  }
}
module.exports = isAuthenticate