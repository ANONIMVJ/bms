import { Controller, Get, Post, Body,Param, Delete, Put, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from '../decorator/roles-auth.decorator';
import { RolesGuard } from '../guards/roles.guard';

@ApiTags("Roles")
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiOperation(
    {
      summary: "Add role"
    }
  )
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @ApiOperation(
    {
      summary: "List of all role"
    }
  )
  @Get('all')
  findAll() {
    return this.rolesService.findAll();
  }
  
  @ApiOperation(
    {
      summary: "List role by value"
    }
  )
  @Get("/value/:value")
  findRoleByValue(@Param("value") value:string) {
    return this.rolesService.findRoleByValue(value);
  }

  @ApiOperation(
    {
      summary: "Get role by Id"
    }
  )
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Change role by id"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @ApiOperation(
    {
      summary: "Remove role by Id"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
