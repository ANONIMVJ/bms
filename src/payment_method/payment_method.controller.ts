import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PaymentMethodService } from './payment_method.service';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Payment method")
@Controller('payment-method')
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @ApiOperation(
    {
      summary: "Add payment method"
    }
  )
  @Post()
  create(@Body() createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodService.create(createPaymentMethodDto);
  }

  @ApiOperation(
    {
      summary: "List of all payment method"
    }
  )
  @Get()
  findAll() {
    return this.paymentMethodService.findAll();
  }

  @ApiOperation(
    {
      summary: "Get payment method by id"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentMethodService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Change payment method by id"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.paymentMethodService.update(+id, updatePaymentMethodDto);
  }

  @ApiOperation(
    {
      summary: "Remove payment method by id"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentMethodService.remove(+id);
  }
}
