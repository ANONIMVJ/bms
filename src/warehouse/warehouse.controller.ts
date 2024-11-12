import { Controller, Get, Post, Body,Param, Delete, Put, UseGuards } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAdminGuard } from '../guards/jwt-admin.guard';
import { Roles } from '../decorator/roles-auth.decorator';

@ApiTags("Warehouse")
@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @ApiOperation(
    {
      summary: "Add warehouse"
    }
  )
  @Roles("ADMIN")
  @UseGuards(JwtAdminGuard)
  @Post()
  create(@Body() createWarehouseDto: CreateWarehouseDto) {
    return this.warehouseService.create(createWarehouseDto);
  }

  @ApiOperation(
    {
      summary: "List of all warehouse"
    }
  )
  @Get('all')
  findAll() {
    return this.warehouseService.findAll();
  }

  @ApiOperation(
    {
      summary: "Get warehouse by Id"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.warehouseService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Change warehouse by Id"
    }
  )
  @Roles("ADMIN")
  @UseGuards(JwtAdminGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateWarehouseDto: UpdateWarehouseDto) {
    return this.warehouseService.update(+id, updateWarehouseDto);
  }

  @ApiOperation(
    {
      summary: "Remove warehouse by Id"
    }
  )
  @Roles("ADMIN")
  @UseGuards(JwtAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.warehouseService.remove(+id);
  }
}
