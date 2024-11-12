import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderItemsService } from './order_items.service';
import { CreateOrderItemDto } from './dto/create-order_item.dto';
import { UpdateOrderItemDto } from './dto/update-order_item.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Order Items")
@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}
  
  @ApiOperation(
    {
      summary: "Add order items"
    }
  )
  @Post()
  create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemsService.create(createOrderItemDto);
  }

  @ApiOperation(
    {
      summary: "List of all order items"
    }
  )
  @Get('all')
  findAll() {
    return this.orderItemsService.findAll();
  }

  @ApiOperation(
    {
      summary: "Get order items by id"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderItemsService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Change order items by id"
    }
  )
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderItemDto: UpdateOrderItemDto) {
    return this.orderItemsService.update(+id, updateOrderItemDto);
  }

  @ApiOperation(
    {
      summary: "Remove order items by id"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderItemsService.remove(+id);
  }
}
