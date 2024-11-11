import { PartialType } from '@nestjs/swagger';
import { CreateDeliverDto } from './create-deliver.dto';

export class UpdateDeliverDto extends PartialType(CreateDeliverDto) {}
