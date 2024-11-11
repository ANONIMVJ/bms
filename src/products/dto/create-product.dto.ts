import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateProductDto {
    @ApiProperty(
        {
            example: "Deckor",
            description: "Product name"
        }
    )
    @IsString()
    @IsNotEmpty()
    name:string

    @ApiProperty(
    {
        example: "This is a great product",
        description: "Product description"
    })
    @IsString()
    description:string

    @ApiProperty(
        {
            example: "1345$",
            description: "product price"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    price:number
         
    @ApiProperty(
        {
            example: 5,
            description: "category id (linked by foreign key)"
        }
    )
    @IsNumber()
    @IsNotEmpty()
    categoryId:number

    @ApiProperty(
        {
            example: "product.jpg",
            description: "Product image"
        }
    )
    @IsString()
    image_url:string
        
    @ApiProperty(
        {
            example: "Ashan",
            description: "The name of the company that produced the product"
        }
    )
    @IsString()
    @IsNotEmpty()
    company_name:string

    @ApiProperty(
        {
            example: "True or False",
            description: "whether the product is in stock"
        }
    )
    @IsBoolean()
    has_product:boolean
}
