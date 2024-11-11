import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';

@ApiTags("AUTH")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation(
    {
      summary: "New user registration"
    }
  )
  @ApiResponse(
    {
      status:201,
      description:"Registered User",
      type: String,
    }
  )
  @Post("signup")
  async signUp(@Body() createUserDto:CreateUserDto){
    return this.authService.signUp(createUserDto)
  }
  
  @ApiOperation(
    {
      summary: "Login to the system"
    }
  )
  @Post("signin")
  async signIn(@Body() signInDto:SignInDto){
    return this.authService.signIn(signInDto)
  }
}
