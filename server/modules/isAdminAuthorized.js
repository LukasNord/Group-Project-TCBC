
let isAdminAuthorized = function (req, res, next) {
        if(req.user.role === 3){
            console.log('user is admin', req.user);        
        return next();
        } else {
            res.send('User not authorized for action');
        }
  }

  module.exports = isAdminAuthorized;