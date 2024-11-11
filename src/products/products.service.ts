import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './models/product.models';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productModel: typeof Product,
  ) {}
  create(createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto)
  }

  findAll() {
    return this.productModel.findAll(
      {
        include: 
        { 
          all:true 
        }
      }
    )
  }

  findOne(id: number) {
    return this.productModel.findByPk(id)
  }

  async update(id: number, updateProductDto: UpdateProductDto):Promise<Product> {

    const product = await this.productModel.findByPk(id);
  
    if (!product) throw new NotFoundException(`Product with ID ${id} not found...`);
    
    product.update(updateProductDto)
        
    return product; 
  }

  async remove(id: number):Promise<void> {
    const product = await this.productModel.findByPk(id);

    if (!product) throw new NotFoundException(`Role with ID ${id} not found...`);
    
    await product.destroy();
  }
}
