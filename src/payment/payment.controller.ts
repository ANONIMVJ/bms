import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Payment")
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @ApiOperation(
    {
      summary: "Add payment"
    }
  )
  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @ApiOperation(
    {
      summary: "List of all payment"
    }
  )
  @Get('all')
  findAll() {
    return this.paymentService.findAll();
  }

  @ApiOperation(
    {
      summary: "Get payment by id"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Change payment by id"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(+id, updatePaymentDto);
  }

  @ApiOperation(
    {
      summary: "Remove payment by id"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentService.remove(+id);
  }
}
