import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber } from "class-validator"

export class CreateBasketDto {
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
}
