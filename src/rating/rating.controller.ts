import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Rating")
@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @ApiOperation(
    {
      summary: "Add rating"
    }
  )
  @Post()
  create(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingService.create(createRatingDto);
  }

  @ApiOperation(
    {
      summary: "List of all rating"
    }
  )
  @Get('all')
  findAll() {
    return this.ratingService.findAll();
  }

  @ApiOperation(
    {
      summary: "Get rating by id"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ratingService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Change rating by id"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRatingDto: UpdateRatingDto) {
    return this.ratingService.update(+id, updateRatingDto);
  }

  @ApiOperation(
    {
      summary: "Remove rating by id"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ratingService.remove(+id);
  }
}
