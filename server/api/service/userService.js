const { User } = require('../../models/User')
const checkUsernameforbidden = require('../../helpers/checkUsernameforbidden')
const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { mailService } = require('./mailService')

exports.userService = {
  async getUsers () {
    return await User.findAll({
      order: [
        ['id', 'ASC'],
        ['last_login', 'DESC']
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

  async updateUser (userId, data) {
    const updateFields = []
    const updatableFields = [
      'username',
      'language',
      'pwd',
    ]
    updatableFields.forEach(field => {
      if (field in data.input) {
        updateFields[field] = data.input[field]
      }
    })
    if (data.input.password) {
      updateFields.password = await bcrypt.hash(data.input.password, 12)
    }
    try {
      const updatedUser = await User.update(updateFields, {
        where: {
          id: userId
        },
        returning: true,
        plain: true
      })
      // updatedUser[0]: number or row udpated
      // updatedUser[1]: rows updated
      return updatedUser[1]
    } catch (err) {
      console.log(err)
    }
  },

  async deleteUser (args, req) {
    if (!req.isAuth) {
      throw new Error('Unauthorized!')
    }
    await User.destroy({
      where: {
        id: req.userId
      }
    })
    req.session = null
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
