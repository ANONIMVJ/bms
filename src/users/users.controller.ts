import { Controller, Get, Post, Body,Param, Delete, Put, HttpCode, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddRemoveRoleDto } from './dto/add-remove-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Users } from './models/user.model';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { SelfGuard } from '../guards/self.guard';
import { Roles } from '../decorator/roles-auth.decorator';


@ApiTags("User roles")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation(
    {
      summary: "List of all users"
    }
  )
  @ApiResponse(
    {
      status:200,
      description:"List of users",
      type:[Users]
    }
  )
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @ApiResponse(
    {
      status:200,
      description:"Get user by Id",
      type:Users
    }
  )
  @UseGuards(SelfGuard)
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiOperation(
    {
      summary: "Change user by Id"
    }
  )
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @ApiOperation(
    {
      summary: "Remove product by Id"
    }
  )
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @HttpCode(200)
  @ApiOperation(
    {
      summary: "Assigning a user a role"
    }
  )
  @Post("add_role")
  async addRole(@Body() addRemoveRoleDto:AddRemoveRoleDto){
    return this.usersService.addRole(addRemoveRoleDto)
  }

  @ApiOperation(
    {
      summary: "Remove a role from a user"
    }
  )
  @HttpCode(200)
  @Post("remove_role")
  async removeRole(@Body() addRemoveRoleDto:AddRemoveRoleDto){
    return this.usersService.removeRole(addRemoveRoleDto)
  }

  @ApiOperation(
    {
      summary: "User activation"
    }
  )
  @HttpCode(200)
  @Post("activate")
  async activateUser(@Body() activateUserDto:ActivateUserDto){
    return this.usersService.activateUser(activateUserDto)
  }
}
