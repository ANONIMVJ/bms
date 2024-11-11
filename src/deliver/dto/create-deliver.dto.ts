import { ApiProperty } from "@nestjs/swagger"
import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateDeliverDto {
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
            example: "Los angles",
            description: "Enter the order form here"
        }
    )
    @IsString()
    @IsNotEmpty()
    address:string

    @ApiProperty(
        {
            example: "2024-11-01",
            description: "where the deliver date is displayed"
        }
    )
    @IsDateString()
    deliver_date:Date

    @ApiProperty(
        {
            example: 1,
            description: "deliver id (linked by foreign key)"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    delivererId:number

    
    @ApiProperty(
        {
            example: 1,
            description: "deliver status id (linked by foreign key)"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    deliver_statusId:number
}
