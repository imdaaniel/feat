const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const Users = await User.find()

        return res.json(Users);
    },

    async store(req, res) {
        const { email, pass, name, phone } = req.body;

        const userExists = await User.findOne({
            email: email
        });

        if (userExists) {
            return res.json(userExists);
        }

        const user = await User.create({
            email,
            pass,
            name,
            phone
        });

        return res.json(user);
    }
}