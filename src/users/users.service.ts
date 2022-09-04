import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { createUserPayload } from './user.payload';
import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly utilisateurModel: Model<User>,
  ) {}

  async create(payload: createUserPayload) {
    const newUtilisateur = new this.utilisateurModel(payload);
    const result = await newUtilisateur.save();
    return result.id as string;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  login(payload: createUserPayload) {
    return `This action returns an id if user exist`;
  }
}
