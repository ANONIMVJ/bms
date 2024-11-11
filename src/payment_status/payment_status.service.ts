import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentStatusDto } from './dto/create-payment_status.dto';
import { UpdatePaymentStatusDto } from './dto/update-payment_status.dto';
import { InjectModel } from '@nestjs/sequelize';
import { PaymentStatus } from './models/payment_status.model';

@Injectable()
export class PaymentStatusService {
  constructor(
    @InjectModel(PaymentStatus) private paymentStatusModel: typeof PaymentStatus,
  ) {}
  create(createPaymentStatusDto: CreatePaymentStatusDto) {
    return this.paymentStatusModel.create(createPaymentStatusDto)
  }

  findAll() {
    return this.paymentStatusModel.findAll(
      {
        include:
        {
          all : true
        }
      }
    )
  }

  findOne(id: number) {
    return this.paymentStatusModel.findByPk(id)
  }

  async update(id: number, updatePaymentStatusDto: UpdatePaymentStatusDto):Promise<PaymentStatus> {
    const payment_status = await this.paymentStatusModel.findByPk(id)
  
    if (!payment_status) throw new NotFoundException(`Payment status with ID ${id} not found...`);
    
    payment_status.update(updatePaymentStatusDto)
        
    return payment_status; 
  }

  async remove(id: number):Promise<void> {
    const payment_status = await this.paymentStatusModel.findByPk(id);

    if (!payment_status) throw new NotFoundException(`Payment status with ID ${id} not found...`);
    
    await payment_status.destroy();
  }
}
