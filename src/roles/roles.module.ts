import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Roles } from './models/role.model';
import { MyLoggerService } from '../logs/logger_service';

@Module({
  imports:[SequelizeModule.forFeature([Roles])],
  controllers: [RolesController],
  providers: [RolesService],
  exports:[RolesService]
})
export class RolesModule {}
