import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderStatusDto } from './dto/create-order_status.dto';
import { UpdateOrderStatusDto } from './dto/update-order_status.dto';
import { OrderStatus } from './models/order_status.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class OrderStatusService {
  constructor(
    @InjectModel(OrderStatus) private orderStatusModel: typeof OrderStatus,
  ) {}
  create(createOrderStatusDto: CreateOrderStatusDto) {
    return this.orderStatusModel.create(createOrderStatusDto)
  }

  findAll() {
    return this.orderStatusModel.findAll(
      {
        include:
        {
          all : true
        }
      }
    )
  }

  findOne(id: number) {
    return this.orderStatusModel.findByPk(id)
  }

  async update(id: number, updateOrderStatusDto: UpdateOrderStatusDto):Promise<OrderStatus> {
    const order_status = await this.orderStatusModel.findByPk(id)
  
    if (!order_status) throw new NotFoundException(`Order status with ID ${id} not found...`);
    
    order_status.update(updateOrderStatusDto)
        
    return order_status; 
  }

  async remove(id: number):Promise<void> {
    const order_status = await this.orderStatusModel.findByPk(id);

    if (!order_status) throw new NotFoundException(`Order status with ID ${id} not found...`);
    
    await OrderStatus.destroy();
  }
}
