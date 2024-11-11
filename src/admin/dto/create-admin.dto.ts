import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString, IsStrongPassword } from "class-validator"

export class CreateAdminDto {

    @ApiProperty(
        {
            example:"name",
            description:"Admin name"
        }
    )
    @IsString()
    @IsNotEmpty()
    name:string

    @ApiProperty(
        {
            example:"login",
            description:"Admin logini"
        }
    )
    @IsNotEmpty()
    @IsString()
    login:string

    @ApiProperty(
        {
            example:"Uzbek!$t0n",
            description:"Admin password (Strong password: uppercase and lowercase letter, symbol, number)"
        }
    )
    @IsStrongPassword({minLength:6})
    hashed_password:string

    @ApiProperty(
        {
            example:"True or False",
            description:"Here it is determined whether Admini is active or not"
        }
    )
    is_active:boolean

    @ApiProperty(
        {
            example:"True or False",
            description:"Here it is determined whether the Admin is a creator or not"
        }
    )
    is_creator:boolean

    @ApiProperty(
        {
            example:"Hashed refresh token",
            description:"A hashed refresh token is stored here"
        }
    )
    @IsString()
    @IsNotEmpty()
    hashed_refresh_token: string
}
