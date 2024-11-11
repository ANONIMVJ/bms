import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Order")
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiOperation(
    {
      summary: "Add order"
    }
  )
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @ApiOperation(
    {
      summary: "List of all order"
    }
  )
  @Get('all')
  findAll() {
    return this.ordersService.findAll();
  }

  @ApiOperation(
    {
      summary: "Get order by id"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Change order by id"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @ApiOperation(
    {
      summary: "Remove order by id"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
