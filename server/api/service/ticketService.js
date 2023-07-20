const { Ticket } = require('../../models/Ticket');

exports.userService = {

  async getTicket(ticketId) {
    return await Ticket.findAll({
      where: {
        uuid: ticketId
      }
    })
  },

  async addTicket(ticketId) {
    try {
      const ticket = new Ticket({
        uuid: ticketId,
        valid: true,
      })
      return await ticket.save()
    } catch (err) {
      console.log(err)
    }
  },

  async updateTicket(ticketId) {
    try {
      const updatedTicket = await Ticket.update(
        { valid: false },
        {
          where: {
            id: userId
          },
          returning: true,
          plain: true
        })
      return updatedTicket[1]
    } catch (err) {
      console.log(err)
    }
  },
}
