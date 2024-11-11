import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Rating } from './model/rating.model';

@Injectable()
export class RatingService {
  constructor(
    @InjectModel(Rating) private ratingModel: typeof Rating,
  ) {}
  create(createRatingDto: CreateRatingDto) {
    return this.ratingModel.create(createRatingDto)
  }

  findAll() {
    return this.ratingModel.findAll(
      {
        include:
        {
          all : true
        }
      }
    )
  }

  findOne(id: number) {
    return this.ratingModel.findByPk(id)
  }

  async update(id: number, updateRatingDto: UpdateRatingDto):Promise<Rating> {
    const rating = await this.ratingModel.findByPk(id);
  
    if (!rating) throw new NotFoundException(`Rating with ID ${id} not found...`);
    
    rating.update(updateRatingDto)
        
    return rating; 
  }

  async remove(id: number):Promise<void> {
    const rating = await this.ratingModel.findByPk(id);

    if (!rating) throw new NotFoundException(`Rating with ID ${id} not found...`);
    
    await rating.destroy();
  }
}
