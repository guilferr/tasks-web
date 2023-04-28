import bcrypt from 'bcryptjs'
import { type FindOptionsWhere } from 'typeorm'
import { type iUser } from '../interfaces/loginInterface'
import { AppDataSource } from '../orm/database/data-source'
import { Users } from '../orm/models/Users'

export class UserModel implements iUser {
  private readonly userRepo = AppDataSource.getRepository(Users)

  async create (username: string, password: string): Promise<Users> {
    const salt = await bcrypt.genSalt(10)
    const hahsPassword = await bcrypt.hash(password, salt)

    const newUser = this.userRepo.create({
      login: username,
      password: hahsPassword,
      salt
    })

    return await this.userRepo.save(newUser)
  }

  async list (options: FindOptionsWhere<Users> | Array<FindOptionsWhere<Users>> | undefined): Promise<Users[]> {
    return await this.userRepo.find({
      where: options
    })
  }

  async get (id: number): Promise<Users | null> {
    const user = await this.userRepo.findOne({
      where: { id }
    })

    return user
  }
}
