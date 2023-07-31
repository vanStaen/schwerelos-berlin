const { TRUE } = require('sass');
const { Ticket } = require('../../models/Ticket');

exports.ticketService = {
  async getTickets() {
    return await Ticket.findAll({
      order: [
        ['id', 'ASC'],
      ]
    })
  },

  async getTicket(uuid) {
    return await Ticket.findAll({
      where: {
        uuid: uuid
      }
    })
  },

  async getLastTicketId() {
     return await Ticket.findAll({
      limit: 1,
      order: [ [ 'createdAt', 'DESC' ]],
      attributes: ['id']
    })
  },

  async addTicket(uuid) {
    try {
      const ticket = new Ticket({
        uuid: uuid,
        valid: true,
      })
      return await ticket.save()
    } catch (err) {
      console.log(err)
    }
  },

  async updateTicket(uuid) {
    try {
      const updatedTicket = await Ticket.update(
        { punched: true },
        {
          where: {
            uuid: uuid
          },
          returning: true,
          plain: true
        })
      return updatedTicket[1]
    } catch (err) {
      console.log(err)
    }
  },

  async resetTicket(id) {
    try {
      const updatedTicket = await Ticket.update(
        { punched: false, valid: true },
        {
          where: {
            id: id
          },
          returning: true,
          plain: true
        })
      return updatedTicket[1]
    } catch (err) {
      console.log(err)
    }
  },

  async deleteTicket(id, req) {
    await Ticket.destroy({
      where: {
        id: id
      }
    })
    return true
  },

}
