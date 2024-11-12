import { ApiProperty } from "@nestjs/swagger"
import { IsDateString, IsNotEmpty, IsNumber, IsString, } from "class-validator"

export class CreatePaymentDto {
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
            example: "2024-11-01",
            description: "where the payment date is displayed"
        }
    )
    payment_date:Date
    
    @ApiProperty(
        {
            example: "1000",
            description: "here the payment amount is displayed"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    amout:number

    @ApiProperty(
        {
            example: 1,
            description: "payment_method id (linked by foreign key)"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    payment_methodId:number

    @ApiProperty(
        {
            example: 1,
            description: "payment_status id (linked by foreign key)"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    payment_statusId:number
}
