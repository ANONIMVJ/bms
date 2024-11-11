import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliverStatusService } from './deliver_status.service';
import { CreateDeliverStatusDto } from './dto/create-deliver_status.dto';
import { UpdateDeliverStatusDto } from './dto/update-deliver_status.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("deliver status")
@Controller('deliver-status')
export class DeliverStatusController {
  constructor(private readonly deliverStatusService: DeliverStatusService) {}

  @ApiOperation(
    {
      summary: "Add deliver status"
    }
  )
  @Post()
  create(@Body() createDeliverStatusDto: CreateDeliverStatusDto) {
    return this.deliverStatusService.create(createDeliverStatusDto);
  }

  @ApiOperation(
    {
      summary: "List of all deliver status"
    }
  )
  @Get()
  findAll() {
    return this.deliverStatusService.findAll();
  }

  @ApiOperation(
    {
      summary: "Get deliver status by id"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliverStatusService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Change deliver status by id"
    }
  )
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliverStatusDto: UpdateDeliverStatusDto) {
    return this.deliverStatusService.update(+id, updateDeliverStatusDto);
  }

  @ApiOperation(
    {
      summary: "Remove deliver status by id"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliverStatusService.remove(+id);
  }
}
