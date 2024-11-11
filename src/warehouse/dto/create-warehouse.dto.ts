import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateWarehouseDto {
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
            example: "Los angles",
            description: "Warehuse address"
        }
    )
    @IsString()
    @IsNotEmpty()
    address:string

    @ApiProperty(
        {
            example: 144,
            description: "quantity of product in stock"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    quantity:number
}
