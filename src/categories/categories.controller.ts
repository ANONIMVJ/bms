import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAdminGuard } from '../guards/jwt-admin.guard';
import { Roles } from '../decorator/roles-auth.decorator';

@ApiTags("Categories")
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation(
    {
      summary: "add category"
    }
  )
  @Roles("ADMIN")
  @UseGuards(JwtAdminGuard)
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @ApiOperation(
    {
      summary: "List of category"
    }
  )
  @Get('all')
  findAll() {
    return this.categoriesService.findAll();
  }
  
  @ApiOperation(
    {
      summary: "Get category by Id"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Change category by Id"
    }
  )
  @Roles("ADMIN")
  @UseGuards(JwtAdminGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  
  @ApiOperation(
    {
      summary: "Remove category by Id"
    }
  )
  @Roles("ADMIN")
  @UseGuards(JwtAdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
