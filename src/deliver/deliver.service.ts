import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDeliverDto } from './dto/create-deliver.dto';
import { UpdateDeliverDto } from './dto/update-deliver.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Deliver } from './models/deliver.model';

@Injectable()
export class DeliverService {
  constructor(
    @InjectModel(Deliver) private deliverModel: typeof Deliver,
  ) {}
  create(createDeliverDto: CreateDeliverDto) {
    return this.deliverModel.create(createDeliverDto)
  }

  findAll() {
    return this.deliverModel.findAll(
      {
        include:
        {
          all : true
        }
      }
    )
  }

  findOne(id: number) {
    return this.deliverModel.findByPk(id)
  }

  async update(id: number, updateDeliverDto: UpdateDeliverDto):Promise<Deliver> {
    const deliver = await this.deliverModel.findByPk(id)
  
    if (!deliver) throw new NotFoundException(`Deliver with ID ${id} not found...`);
    
    deliver.update(updateDeliverDto)
        
    return deliver; 
  }

  async remove(id: number):Promise<void> {
    const deliver = await this.deliverModel.findByPk(id);

    if (!deliver) throw new NotFoundException(`Deliver with ID ${id} not found...`);
    
    await deliver.destroy();
  }
}
