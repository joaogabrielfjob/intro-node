import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
  { name: 'João', email: 'joao@teste.com' }
]

export default {
  async index(request: Request, response: Response) {
    return response.json(users)
  },

  async create(request: Request, response: Response) {
    const emailService = new EmailService()

    emailService.sendMail({
      to: { name: 'João', email: 'joao@teste.com' },
      message: { subject: 'Bem-vindo ao sistema', body: 'Seja bem-vindo' }
    })

    return response.send()
  }
}