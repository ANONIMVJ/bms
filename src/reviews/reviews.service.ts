import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Review } from './models/review.model';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review) private reviewModel: typeof Review,
  ) {}
  create(createReviewDto: CreateReviewDto) {
    return this.reviewModel.create(createReviewDto)
  }

  findAll() {
    return this.reviewModel.findAll(
      {
        include:
        {
          all : true
        }
      }
    )
  }

  findOne(id: number) {
    return this.reviewModel.findByPk(id)
  }

  async update(id: number, updateReviewDto: UpdateReviewDto):Promise<Review> {
    const review = await this.reviewModel.findByPk(id);
  
    if (!review) throw new NotFoundException(`Review with ID ${id} not found...`);
    
    review.update(updateReviewDto)
        
    return review; 
  }

  async remove(id: number):Promise<void> {
    const review = await this.reviewModel.findByPk(id);

    if (!review) throw new NotFoundException(`Review with ID ${id} not found...`);
    
    await review.destroy();
  }
}
