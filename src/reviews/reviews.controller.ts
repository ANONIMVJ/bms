import { Controller, Get, Post, Body,Param, Delete, Put } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Reviews")
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @ApiOperation(
    {
      summary: "Add reviews"
    }
  )
  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto);
  }

  @ApiOperation(
    {
      summary: "List of all reviews"
    }
  )
  @Get('all')
  findAll() {
    return this.reviewsService.findAll();
  }

  @ApiOperation(
    {
      summary: "Get review by id"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewsService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Change review by id"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.update(+id, updateReviewDto);
  }

  @ApiOperation(
    {
      summary: "Remove review by id"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(+id);
  }
}
