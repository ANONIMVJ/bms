import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Basket } from './model/basket.model';
import { MyLoggerService } from '../logs/logger_service';

@Injectable()
export class BasketService {
  constructor(
    @InjectModel(Basket) private basketModel: typeof Basket,
    
  ) {}


  create(createBasketDto: CreateBasketDto) {
    return this.basketModel.create(createBasketDto)
  }

  findAll() {
    return this.basketModel.findAll(
      {
        include:
        {
          all : true
        }
      }
    )
  }

  findOne(id: number) {
    return this.basketModel.findByPk(id)
  }

  async update(id: number, updateBasketDto: UpdateBasketDto):Promise<Basket> {
    const basket = await this.basketModel.findByPk(id);
  
    if (!basket) throw new NotFoundException(`Basket with ID ${id} not found...`);
    
    basket.update(updateBasketDto)
        
    return basket; 
  }

  async remove(id: number):Promise<void> {
    const basket = await this.basketModel.findByPk(id);

    if (!basket) throw new NotFoundException(`Basket with ID ${id} not found...`);
    
    await basket.destroy();
  }
}
