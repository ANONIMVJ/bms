import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator"

export class CreateUserDto {

    @ApiProperty(
        {
            example:"John",
            description:"User first name"
        }
    )
    @IsString()
    @IsNotEmpty()
    first_name:string

    @ApiProperty(
        {
            example:"Doe",
            description:"User last name"
        }
    )
    @IsString()
    @IsNotEmpty()
    last_name:string

    @ApiProperty(
        {
            example:"user1@gmail.com",
            description:"User email"
        }
    )
    @IsEmail()
    @IsNotEmpty()
    email:string

    @ApiProperty(
        {
            example:"Uzbek!$t0n",
            description:"User's password (Strong password: uppercase and lowercase letter, symbol, number)"
        }
    )
    @IsStrongPassword({minLength:6})
    password:string

    @ApiProperty(
        {
            example:"+998917772233",
            description:"User phone number"
        }
    )
    @IsPhoneNumber("UZ")
    @IsNotEmpty()
    phone_number:string

    @ApiProperty(
        {
            example:"t.me/ooddiiy",
            description:"Telegram link of the user"
        }
    )
    @IsString()
    @IsNotEmpty()
    telegram_link:string

    @ApiProperty(
        {
            example:"Admin",
            description:"Initial role assigned to the user"
        }
    )
    @IsString()
    @IsNotEmpty()
    role_value:string
}
