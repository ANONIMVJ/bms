import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Basket } from './model/basket.model';
import { MyLoggerService } from '../logs/logger_service';

@Module({
  imports:[SequelizeModule.forFeature([Basket])],
  controllers: [BasketController],
  providers: [BasketService],
})
export class BasketModule {}
