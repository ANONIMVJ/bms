import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order_item.dto';
import { UpdateOrderItemDto } from './dto/update-order_item.dto';
import { InjectModel } from '@nestjs/sequelize';
import { OrderItem } from './models/order_item.model';

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectModel(OrderItem) private orderItemModel: typeof OrderItem,
  ) {}
  create(createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemModel.create(createOrderItemDto)
  }

  findAll() {
    return this.orderItemModel.findAll(
      {
        include:
        {
          all : true
        }
      }
    )
  }

  findOne(id: number) {
    return this.orderItemModel.findByPk(id)
  }

  async update(id: number, updateOrderItemDto: UpdateOrderItemDto):Promise<OrderItem> {
    const orderItem = await this.orderItemModel.findByPk(id)
  
    if (!orderItem) throw new NotFoundException(`Order item with ID ${id} not found...`);
    
    orderItem.update(updateOrderItemDto)
        
    return orderItem; 
  }

  async remove(id: number):Promise<void> {
    const orderItem = await this.orderItemModel.findByPk(id);

    if (!orderItem) throw new NotFoundException(`Order item with ID ${id} not found...`);
    
    await orderItem.destroy();
  }
}
