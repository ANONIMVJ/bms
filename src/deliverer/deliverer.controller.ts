import { Controller, Get, Post, Body,Param, Delete, Put, UseGuards } from '@nestjs/common';
import { DelivererService } from './deliverer.service';
import { CreateDelivererDto } from './dto/create-deliverer.dto';
import { UpdateDelivererDto } from './dto/update-deliverer.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAdminGuard } from '../guards/jwt-admin.guard';
import { Roles } from '../decorator/roles-auth.decorator';

@ApiTags("Deliverer")
@Controller('deliverer')
export class DelivererController {
  constructor(private readonly delivererService: DelivererService) {}

  @ApiOperation(
    {
      summary: "Add deliverer"
    }
  )
  @Roles("ADMIN")
  @UseGuards(JwtAdminGuard)
  @Post()
  create(@Body() createDelivererDto: CreateDelivererDto) {
    return this.delivererService.create(createDelivererDto);
  }

  @ApiOperation(
    {
      summary: "List of all deliverer"
    }
  )
  @Get('all')
  findAll() {
    return this.delivererService.findAll();
  }

  @ApiOperation(
    {
      summary: "Get deliverer by id"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.delivererService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Change deliverer by id"
    }
  )
  @Roles("ADMIN")
  @UseGuards(JwtAdminGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDelivererDto: UpdateDelivererDto) {
    return this.delivererService.update(+id, updateDelivererDto);
  }

  @ApiOperation(
    {
      summary: "Remove deliverer by id"
    }
  )
  @Roles("ADMIN")
  @UseGuards(JwtAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.delivererService.remove(+id);
  }
}
