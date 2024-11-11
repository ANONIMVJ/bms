import { Module } from '@nestjs/common';
import { OrderStatusService } from './order_status.service';
import { OrderStatusController } from './order_status.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderStatus } from './models/order_status.model';
import { MyLoggerService } from '../logs/logger_service';

@Module({
  imports:[SequelizeModule.forFeature([OrderStatus])],
  controllers: [OrderStatusController],
  providers: [OrderStatusService],
})
export class OrderStatusModule {}
