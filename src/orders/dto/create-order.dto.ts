import { ApiProperty } from "@nestjs/swagger"
import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateOrderDto {
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
            example: "2024-11-01",
            description: "where the order date is displayed"
        }
    )
    @IsDateString()
    order_date:Date

    @ApiProperty(
        {
            example: "1000",
            description: "here the total amount is displayed"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    total_amout:number

    @ApiProperty(
        {
            example: 1,
            description: "order status id (linked by foreign key)"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    order_statusId:number
}
