import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderStatusService } from './order_status.service';
import { CreateOrderStatusDto } from './dto/create-order_status.dto';
import { UpdateOrderStatusDto } from './dto/update-order_status.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("order status")
@Controller('order-status')
export class OrderStatusController {
  constructor(private readonly orderStatusService: OrderStatusService) {}
  
  @ApiOperation(
    {
      summary: "Add order status"
    }
  )
  @Post()
  create(@Body() createOrderStatusDto: CreateOrderStatusDto) {
    return this.orderStatusService.create(createOrderStatusDto);
  }

  @ApiOperation(
    {
      summary: "List of all order status"
    }
  )
  @Get()
  findAll() {
    return this.orderStatusService.findAll();
  }

  @ApiOperation(
    {
      summary: "Get order status by id"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderStatusService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Change order status by id"
    }
  )
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderStatusDto: UpdateOrderStatusDto) {
    return this.orderStatusService.update(+id, updateOrderStatusDto);
  }

  @ApiOperation(
    {
      summary: "Remove order status by id"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderStatusService.remove(+id);
  }
}
