import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateReviewDto {
    @ApiProperty(
        {
            example: 1,
            description: "product id (linked by foreign key)"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    productId:number

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
            example: "Best product",
            description: "Here is a review for the product"
        }
    )
    @IsString()
    @IsNotEmpty()
    comment:string
}
