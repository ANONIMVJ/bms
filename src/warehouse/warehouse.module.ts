import { Module } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Warehouse } from './models/warehouse.model';

@Module({
  imports:[SequelizeModule.forFeature([Warehouse])],
  controllers: [WarehouseController],
  providers: [WarehouseService],
})
export class WarehouseModule {}
