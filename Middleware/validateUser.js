// Middleware to validate user registration data in the request body
export const validateUser = (req, res, next) => {
    const { username, password, email} = req.body;
    const errors = [];
  
    // Check if each required field is provided
    if (!username) errors.push("username required");
    if (!password) errors.push("password required");
    if (!email) errors.push("email required");
    
  
    // If validation errors pass it to the next middleware
    if (errors.length > 0) {
      const err = new Error(errors.join(", "));
      err.statuscode = 400; 
      return next(err);
    }
  
    
    next();
  };