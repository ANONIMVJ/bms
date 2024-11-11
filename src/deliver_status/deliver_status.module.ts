import { Module } from '@nestjs/common';
import { DeliverStatusService } from './deliver_status.service';
import { DeliverStatusController } from './deliver_status.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DeliverStatus } from './models/deliver_status.model';

@Module({
  imports:[SequelizeModule.forFeature([DeliverStatus])],
  controllers: [DeliverStatusController],
  providers: [DeliverStatusService],
})
export class DeliverStatusModule {}
