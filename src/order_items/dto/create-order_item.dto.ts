import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber } from "class-validator"

export class CreateOrderItemDto {
    @ApiProperty(
        {
            example: 1,
            description: "order id (linked by foreign key)"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    orderId:number

    @ApiProperty(
        {
            example: 1,
            description: "order id (linked by foreign key)"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    productId:number

    @ApiProperty(
        {
            example: "12",
            description: "The amount of items is displayed"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    quantity:number

    @ApiProperty(
        {
            example: "1000$",
            description: "the price of the order is displayed here"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    price:number
}
