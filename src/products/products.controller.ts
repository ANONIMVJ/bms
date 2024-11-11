import { Controller, Get, Post, Body,Param, Delete, Put} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Products")
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation(
    {
      summary: "Add product"
    }
  )
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
 
  @ApiOperation(
    {
      summary: "List of all product"
    }
  )
  @Get('all')
  findAll() {
    return this.productsService.findAll();
  }

  @ApiOperation(
    {
      summary: "Get product by Id"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Change product by Id"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @ApiOperation(
    {
      summary: "Remove product by Id"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
