import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './models/order.model';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order) private orderModel: typeof Order,
  ) {}
  create(createOrderDto: CreateOrderDto) {
    return this.orderModel.create(createOrderDto)
  }

  findAll() {
    return this.orderModel.findAll(
      {
        include:
        {
          all : true
        }
      }
    )
  }

  findOne(id: number) {
    return this.orderModel.findByPk(id)
  }

  async update(id: number, updateOrderDto: UpdateOrderDto):Promise<Order> {
    const order = await this.orderModel.findByPk(id)
  
    if (!order) throw new NotFoundException(`Order with ID ${id} not found...`);
    
    order.update(updateOrderDto)
        
    return order; 
  }

  async remove(id: number):Promise<void> {
    const order = await this.orderModel.findByPk(id);

    if (!order) throw new NotFoundException(`Order with ID ${id} not found...`);
    
    await order .destroy();
  }
}
