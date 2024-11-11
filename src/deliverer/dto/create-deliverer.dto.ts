import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateDelivererDto {
    @ApiProperty(
        {
            example: "John",
            description: "first name deliverer"
        }
    )
    @IsString()
    @IsNotEmpty()
    first_name:string
    
    @ApiProperty(
        {
            example: "Doe",
            description: "last name deliverer"
        }
    )
    @IsString()
    @IsNotEmpty()
    last_name:string

    @ApiProperty(
        {
            example: "+998936565880",
            description: "phone number deliverer"
        }
    )
    @IsString()
    @IsNotEmpty()
    phone_number:string

    @ApiProperty(
        {
            example: "deliverer",
            description: "image deliverer"
        }
    )
    @IsString()
    @IsNotEmpty()
    image:string
}
