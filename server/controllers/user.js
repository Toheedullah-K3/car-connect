// const { User } = require('../models/user');


// const signup = async(req,res) => {

//    const user = {
//       email: req.body.email,
//       username: req.body.username,
//       password: req.body.password
//    }

//    try {
      
//     const findUser = User.findByPk(user.email);

//     if(findUser != null) {
//         return res.status(500).send({})
//     }
//     await User.create(user);

//      return res.send("user")
   
      
//    } catch(err) {

//      return res.status(500).send("errr")
//    }
    
// }







// module.exports = {
//     signup
// }


const { User } = require('../models/user');

const signup = async (req, res) => {
    const { email, username, password } = req.body;

    try {
        // Check if a user with the given email already exists
        const findUser = await User.findOne({ where: { email } });

        if (findUser) {
            // If a user with the email already exists, return a 409 Conflict status
            return res.status(409).send({ error: 'User with this email already exists' });
        }

        // Create the new user
        await User.create({ email, username, password });

        // Send a success response
        return res.status(201).send({ message: 'User registered successfully' });
    } catch (err) {
        // If an error occurs during the process, return a 500 Internal Server Error status
        console.error(err);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
};

module.exports = {
    signup
};
