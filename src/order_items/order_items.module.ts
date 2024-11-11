import { Module } from '@nestjs/common';
import { OrderItemsService } from './order_items.service';
import { OrderItemsController } from './order_items.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderItem } from './models/order_item.model';

@Module({
  imports:[SequelizeModule.forFeature([OrderItem])],
  controllers: [OrderItemsController],
  providers: [OrderItemsService],
})
export class OrderItemsModule {}
