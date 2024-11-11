import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDeliverStatusDto } from './dto/create-deliver_status.dto';
import { UpdateDeliverStatusDto } from './dto/update-deliver_status.dto';
import { InjectModel } from '@nestjs/sequelize';
import { DeliverStatus } from './models/deliver_status.model';

@Injectable()
export class DeliverStatusService {
  constructor(
    @InjectModel(DeliverStatus) private deliverStatusModel: typeof DeliverStatus,
  ) {}
  create(createDeliverStatusDto: CreateDeliverStatusDto) {
    return this.deliverStatusModel.create(createDeliverStatusDto)
  }

  findAll() {
    return this.deliverStatusModel.findAll(
      {
        include:
        {
          all : true
        }
      }
    )
  }

  findOne(id: number) {
    return this.deliverStatusModel.findByPk(id)
  }

  async update(id: number, updateDeliverStatusDto: UpdateDeliverStatusDto):Promise<DeliverStatus> {
    const deliver_status = await this.deliverStatusModel.findByPk(id)
  
    if (!deliver_status) throw new NotFoundException(`Deliver status with ID ${id} not found...`);
    
    deliver_status.update(updateDeliverStatusDto)
        
    return deliver_status; 
  }

  async remove(id: number):Promise<void> {
    const deliver_status = await this.deliverStatusModel.findByPk(id);

    if (!deliver_status) throw new NotFoundException(`Deliver status with ID ${id} not found...`);
    
    await deliver_status.destroy();
  
  }
}
