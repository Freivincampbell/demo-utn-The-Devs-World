import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);

    const result = await createdUser.save().catch((errors) => {
      return errors;
    });

    if (result.id) return await this.findOne(result.id);

    return result;
  }

  async findAll(): Promise<User[]> {
    return await this.userModel
      .find()
      .exec()
      .catch((errors) => {
        return errors;
      });
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel
      .findOne({ _id: id })
      .exec()
      .catch((errors) => {
        return errors;
      });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userModel
      .findOneAndUpdate({ id }, updateUserDto, {
        new: true,
      })
      .exec()
      .catch((errors) => {
        return errors;
      });
  }

  async remove(id: string): Promise<User> {
    return await this.userModel
      .findByIdAndDelete({ _id: id })
      .exec()
      .catch((errors) => {
        return errors;
      });
  }

  async findOneByUsername(name: string): Promise<User> {
    return await this.userModel
      .findOne({ name })
      .exec()
      .catch((error) => {
        return error;
      });
  }
}
