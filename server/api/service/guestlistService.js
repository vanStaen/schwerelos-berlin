const { Guestlist } = require('../../models/Guestlist')

exports.guestlistService = {
  async getGuestlists() {
    return await Guestlist.findAll({
      order: [
        ['id', 'ASC']
      ]
    })
  },

  async getGuestlistsForParty(partyId) {
    return await Guestlist.findAll({
      where: {
        partyId: partyId,
      },
      order: [
        ['id', 'ASC']
      ]
    })
  },

  async getGuestlistsCountForParty(partyId) {
    return await Guestlist.count({
      where: {
        partyId: partyId,
      },
    })
  },

  async addGuestlist(input) {
    try {
      const guestlist = new Guestlist({
        name: input.name,
        email: input.email,
        artistId: input.artistId,
        partyId: input.partyId,
        listType: input.listType,
      })
      return await guestlist.save()
    } catch (err) {
      console.log(err)
    }
  },

  async updateGuestlist(guestlistId, data) {
    const updateFields = []
    const updatableFields = [
      'name',
      'email',
      'artistId',
      'partyId',
      'listType',
    ]
    updatableFields.forEach(field => {
      if (field in data) {
        updateFields[field] = data[field]
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

  async deleteGuestlist(guestlistId) {
    await Guestlist.destroy({
      where: {
        id: guestlistId
      }
    })
    return true
  },

  async isAreadyOnTheList(email, partyId) {
    foundGuestlist = await Guestlist.findOne({
      where: { email: email, partyId: partyId }
    })
    if (!foundGuestlist) {
      return false
    } else {
      return true
    }
  },
}
