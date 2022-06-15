import { Module } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';
import { Crud, CrudSchema } from './schema/crud.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Crud.name, schema: CrudSchema},
    ])
  ],
  controllers: [CrudController],
  providers: [CrudService]
})
export class CrudModule {}
