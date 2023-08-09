const { Guestlist } = require('../../models/Guestlist')
const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.userService = {
  async getGuestlists () {
    return await Guestlist.findAll({
      order: [
        ['id', 'ASC']
      ]
    })
  },

  async getGuestlistsForParty (partyId) {
    return await Guestlist.findAll({
      where: {
        partyId: partyId,
      },
      order: [
        ['id', 'ASC']
      ]
    })
  },

  async addGuestlist (input) {
    try {
      const guestlist = new Guestlist({
        name: input.name,
        email: input.email,
        artist: input.artist,
        partyId: input.partyId,
        listType: input.listType,
      })
      return await guestlist.save()
    } catch (err) {
      console.log(err)
    }
  },

  async updateGuestlist (guestlistId, data) {
    const updateFields = []
    const updatableFields = [
      'name',
      'email',
      'artist',
      'partyId',
      'listType',
    ]
    updatableFields.forEach(field => {
      if (field in data.input) {
        updateFields[field] = data.input[field]
      }
    })
    try {
      const updatedGuestlist = await Guestlist.update(updateFields, {
        where: {
          id: guestlistId
        },
        returning: true,
        plain: true
      })
      // updatedGuestlist[0]: number or row udpated
      // updatedGuestlist[1]: rows updated
      return updatedGuestlist[1]
    } catch (err) {
      console.log(err)
    }
  },

  async deleteGuestlist (guestlistId) {
    await Guestlist.destroy({
      where: {
        id: guestlistId
      }
    })
    return true
  },

  async isAreadyOnTheList (email, partyId) {
    foundGuestlist = await User.findOne({
      where: { email: email, partyId: partyId }
    })
    if (!foundGuestlist) {
      return false
    } else {
      return true
    }
  },  
}
