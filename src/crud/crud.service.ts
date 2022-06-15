import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { Crud, CrudDocument } from './schema/crud.schema';

@Injectable()
export class CrudService {

  constructor (@InjectModel (Crud.name) private readonly crudModel: Model<CrudDocument>) {}
  
  async create(createCrudDto: CreateCrudDto): Promise<CrudDocument> {
    const crud = new this.crudModel(createCrudDto);
    return crud.save();
  }

  async findAll(): Promise<CrudDocument[]> {
    return this.crudModel.find().exec();
  }

  async findOne(id: string) {
    return this.crudModel.findById(id);
  }

  async update(id: string, updateCrudDto: UpdateCrudDto): Promise<CrudDocument> {
    return this.crudModel.findByIdAndUpdate(id, updateCrudDto);
  }

  async remove(id: string) {
    return this.crudModel.findByIdAndRemove(id);
  }
}
