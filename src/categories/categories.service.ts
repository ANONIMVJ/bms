import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './Models/category.model';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category) private categoryModule: typeof Category,
  ) {}
  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryModule.create(createCategoryDto)
  }

  findAll() {
    return this.categoryModule.findAll({include: {all:true}})
  }

  findOne(id: number) {
    return this.categoryModule.findByPk(id)
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto):Promise<Category> {
    const category = await this.categoryModule.findByPk(id);
  
    if (!category) throw new NotFoundException(`Category with ID ${id} not found...`);
    
    category.update(updateCategoryDto)
        
    return category; 
  }

  async remove(id: number):Promise<void> {
    const category = await this.categoryModule.findByPk(id);
    
    if (!category) throw new NotFoundException(`Category with ID ${id} not found...`);
    
    await category.destroy();
  }
}
