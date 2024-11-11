import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DeliverService } from './deliver.service';
import { CreateDeliverDto } from './dto/create-deliver.dto';
import { UpdateDeliverDto } from './dto/update-deliver.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Deliver")
@Controller('deliver')
export class DeliverController {
  constructor(private readonly deliverService: DeliverService) {}

  @ApiOperation(
    {
      summary: "Add deliver"
    }
  )
  @Post()
  create(@Body() createDeliverDto: CreateDeliverDto) {
    return this.deliverService.create(createDeliverDto);
  }

  @ApiOperation(
    {
      summary: "List of all deliver"
    }
  )
  @Get('all')
  findAll() {
    return this.deliverService.findAll();
  }

  @ApiOperation(
    {
      summary: "Get deliver by id"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliverService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Change deliver by id"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDeliverDto: UpdateDeliverDto) {
    return this.deliverService.update(+id, updateDeliverDto);
  }

  @ApiOperation(
    {
      summary: "Remove deliver by id"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliverService.remove(+id);
  }
}
