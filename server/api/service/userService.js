const { User } = require('../../models/User')
const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.userService = {
  async getUsers () {
    return await User.findAll({
      order: [
        ['id', 'ASC']
      ]
    })
  },

  async getUser (userId) {
    return await User.findAll({
      where: {
        id: userId
      }
    })
  },

  async addUser (input) {
    const foundUserEmail = await User.findOne({
      where: {
        email: input.email
      }
    })
    if (foundUserEmail) {
      throw new Error('This email is already associated with an account.')
    }
    const foundUserUsername = await User.findOne({
      where: {
        username: input.username
      }
    })
    if (foundUserUsername) {
      throw new Error('This username is already associated with an account.')
    }

    try {
      hashedPassword = await bcrypt.hash(input.pwd, 12)
      const user = new User({
        username: input.username,
        email: input.email,
        language: input.language,
        pwd: hashedPassword
      })
      return await user.save()
    } catch (err) {
      console.log(err)
    }
  },

  async deleteUser (userId) {
    await User.destroy({
      where: {
        id: userId
      }
    })
    return true
  },

   async changepassword (token, password) {
    try {
      decodedToken = jsonwebtoken.verify(
        token,
        process.env.AUTH_SECRET_KEY_RECOVERY
      )
      const email = decodedToken.email
      const hashedPassword = await bcrypt.hash(password, 12)
      await User.update(
        { pwd: hashedPassword },
        {
          where: {
            email: email
          },
          returning: true,
          plain: true
        }
      )
      return true
    } catch (err) {
      return false
    }
  },

  async email (email) {
    foundUser = await User.findOne({
      where: { email: email }
    })
    if (!foundUser) {
      return false
    } else {
      return true
    }
  },

  async taken (username) {
    foundUser = await User.findOne({
      where: { username: username }
    })
    if (foundUser) {
      return true
    }
    if (checkUsernameforbidden(username)) {
      return true
    }
    return false
  },
  

  async validtoken (token) {
    try {
      decodedToken = jsonwebtoken.verify(
        token,
        process.env.AUTH_SECRET_KEY_RECOVERY
      )
    } catch (err) {
      return false
    }
    return true
  },

}
