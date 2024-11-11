import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PaymentStatusService } from './payment_status.service';
import { CreatePaymentStatusDto } from './dto/create-payment_status.dto';
import { UpdatePaymentStatusDto } from './dto/update-payment_status.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Payment status")
@Controller('payment-status')
export class PaymentStatusController {
  constructor(private readonly paymentStatusService: PaymentStatusService) {}

  @ApiOperation(
    {
      summary: "Add payment status"
    }
  )
  @Post()
  create(@Body() createPaymentStatusDto: CreatePaymentStatusDto) {
    return this.paymentStatusService.create(createPaymentStatusDto);
  }

  @ApiOperation(
    {
      summary: "List of all payment status"
    }
  )
  @Get('all')
  findAll() {
    return this.paymentStatusService.findAll();
  }

  @ApiOperation(
    {
      summary: "Get payment status by id"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentStatusService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Change payment status by id"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePaymentStatusDto: UpdatePaymentStatusDto) {
    return this.paymentStatusService.update(+id, updatePaymentStatusDto);
  }

  @ApiOperation(
    {
      summary: "Remove payment status by id"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentStatusService.remove(+id);
  }
}
