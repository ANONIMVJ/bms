import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Payment } from './models/payment.model';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment) private paymentModel: typeof Payment,
  ) {}
  create(createPaymentDto: CreatePaymentDto) {
    return this.paymentModel.create(createPaymentDto)
  }

  findAll() {
    return this.paymentModel.findAll(
      {
        include:
        {
          all : true
        }
      }
    )
  }

  findOne(id: number) {
    return this.paymentModel.findByPk(id)
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto):Promise<Payment> {
    const payment = await this.paymentModel.findByPk(id)
  
    if (!payment) throw new NotFoundException(`Payment with ID ${id} not found...`);
    
    payment.update(updatePaymentDto)
        
    return payment; 
  }

  async remove(id: number) {
    const payment = await this.paymentModel.findByPk(id);

    if (!payment) throw new NotFoundException(`Payment with ID ${id} not found...`);
    
    await payment.destroy();
  }
}
