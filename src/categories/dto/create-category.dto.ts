import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateCategoryDto {
    @ApiProperty(
        {
            example: "To make",
            description: "Category_name"
        }
    )
    @IsString()
    @IsNotEmpty()
    category_name:string

    @ApiProperty(
        {
            example: 1,
            description: "Parent category id"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    parentId:number

    @ApiProperty(
        {
            example: 2,
            description: "Warehouse id"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    warehouseId:number
}
