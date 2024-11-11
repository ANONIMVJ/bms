import { Module } from '@nestjs/common';
import { DelivererService } from './deliverer.service';
import { DelivererController } from './deliverer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Deliverer } from './model/deliverer.model';

@Module({
  imports:[SequelizeModule.forFeature([Deliverer])],
  controllers: [DelivererController],
  providers: [DelivererService],
})
export class DelivererModule {}
