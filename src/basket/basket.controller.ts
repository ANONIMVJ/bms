import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BasketService } from './basket.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Basket")
@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @ApiOperation(
    {
      summary: "Add basket"
    }
  )
  @Post()
  create(@Body() createBasketDto: CreateBasketDto) {
    return this.basketService.create(createBasketDto);
  }

  @ApiOperation(
    {
      summary: "List of all basket"
    }
  )
  @Get()
  findAll() {
    return this.basketService.findAll();
  }
  
  @ApiOperation(
    {
      summary: "Get basket by id"
    }
  )  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basketService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Change basket by id"
    }
  )
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBasketDto: UpdateBasketDto) {
    return this.basketService.update(+id, updateBasketDto);
  }

  @ApiOperation(
    {
      summary: "Remove basket by id"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basketService.remove(+id);
  }
}
