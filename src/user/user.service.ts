import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HashService } from 'src/common/services/hash.service';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, private hashService: HashService) {}

    async getUserByUsername(username: string) {
      return  this.userModel.findOne({ username }).exec();
    }

    async registerUser(createUserDto: CreateUserDto) {
        // validate DTO

        const createUser = new this.userModel(createUserDto);
        // check if user exists
        const user = await this.getUserByUsername(createUser.username);
        if(user) {
            throw new BadRequestException();
        }
        // Hash Password
        createUser.password = await this.hashService.hashPassword(createUser.password); 

        return createUser.save();
    }
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all user`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
