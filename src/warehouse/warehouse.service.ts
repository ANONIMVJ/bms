import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Warehouse } from './models/warehouse.model';

@Injectable()
export class WarehouseService {
  constructor(
    @InjectModel(Warehouse) private warehouseModel: typeof Warehouse,
  ) {}
  create(createWarehouseDto: CreateWarehouseDto) {
    return this.warehouseModel.create(createWarehouseDto)
  }

  findAll() {
    return this.warehouseModel.findAll(
      {
        include:
        {
          all : true
        }
      }
    )
  }

  findOne(id: number) {
    return this.warehouseModel.findByPk(id)
  }

  async update(id: number, updateWarehouseDto: UpdateWarehouseDto):Promise<Warehouse> {
    const warehouse = await this.warehouseModel.findByPk(id);
  
    if (!warehouse) throw new NotFoundException(`Warehouse with ID ${id} not found...`);
    
    warehouse.update(updateWarehouseDto)
        
    return warehouse; 
  }

  async remove(id: number):Promise<void> {
    const warehouse = await this.warehouseModel.findByPk(id);

    if (!warehouse) throw new NotFoundException(`Warehouse with ID ${id} not found...`);
    
    await warehouse.destroy();
  }
}
