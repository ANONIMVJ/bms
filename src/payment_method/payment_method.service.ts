import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { InjectModel } from '@nestjs/sequelize';
import { PaymentMethod } from './models/payment_method.model';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod) private paymentMethodModel: typeof PaymentMethod,
  ) {}
  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodModel.create(createPaymentMethodDto)
  }

  findAll() {
    return this.paymentMethodModel.findAll(
      {
        include:{
          all : true
        }
      }
    )
  }

  findOne(id: number) {
    return this.paymentMethodModel.findByPk(id)
  }

  async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto):Promise<PaymentMethod> {
    const payment_method = await this.paymentMethodModel.findByPk(id)
  
    if (!payment_method) throw new NotFoundException(`Payment method with ID ${id} not found...`);
    
    payment_method.update(updatePaymentMethodDto)
        
    return payment_method; 
  }

  async remove(id: number):Promise<void> {
    const payment_method = await this.paymentMethodModel.findByPk(id);

    if (!payment_method) throw new NotFoundException(`Payment method with ID ${id} not found...`);
    
    await payment_method.destroy();
  
  }
}
