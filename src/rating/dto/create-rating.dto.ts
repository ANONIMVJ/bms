import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber } from "class-validator"

export class CreateRatingDto {
    @ApiProperty(
        {
            example: 5,
            description: "Rating from 1 to 5"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    rating:number

    @ApiProperty(
        {
            example: 1,
            description: "user id (linked by foreign key)"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    userId:number
    
    @ApiProperty(
        {
            example: 1,
            description: "product id (linked by foreign key)"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    productId:number
}
