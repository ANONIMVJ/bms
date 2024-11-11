import { PartialType } from '@nestjs/swagger';
import { CreateDeliverStatusDto } from './create-deliver_status.dto';

export class UpdateDeliverStatusDto extends PartialType(CreateDeliverStatusDto) {}
