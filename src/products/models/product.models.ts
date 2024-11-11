import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { Category } from "../../categories/Models/category.model"
import { Basket } from "../../basket/model/basket.model"
import { Rating } from "../../rating/model/rating.model"
import { Review } from "../../reviews/models/review.model"
import { Warehouse } from "../../warehouse/models/warehouse.model"
import { OrderItem } from "../../order_items/models/order_item.model"

interface ProductAttr{
    name:string,
    description:string,
    price:number,
    categoryId:number,
    image_url:string,
    company_name:string,
    has_product:boolean
}

@Table({tableName:"products",timestamps:false})
export class Product extends Model<Product, ProductAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "product id number (auto increment)"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id?: number

    @ApiProperty(
        {
            example: "Deckor",
            description: "Product name"
        }
    )
    @Column(
    {
        type:DataType.STRING(100),
        allowNull: false,
    })
    name:string
    
    @ApiProperty(
        {
            example: "This is a great product",
            description: "Product description"
        }
    )
    @Column(
    {
        type:DataType.STRING(100),
    })
    description:string

        
    @ApiProperty(
        {
            example: "1345$",
            description: "product price"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
    })
    price:number

        
    @ApiProperty(
        {
            example: 5,
            description: "category id (linked by foreign key)"
        }
    )
    @ForeignKey(() => Category)
    @Column(
    {
        type:DataType.INTEGER,
    })
    categoryId:number

    @BelongsTo(() => Category)
    product:Category

    @ApiProperty(
        {
            example: "product.jpg",
            description: "Product image"
        }
    )
    @Column(
    {
        type:DataType.STRING(100),
    })
    image_url:string

        
    @ApiProperty(
        {
            example: "Ashan",
            description: "The name of the company that produced the product"
        }
    )
    @Column(
    {
        type:DataType.STRING(50),
    })
    company_name:string

        
    @ApiProperty(
        {
            example: "True or False",
            description: "whether the product is in stock"
        }
    )
    @Column(
    {
        type:DataType.BOOLEAN,
        defaultValue: false
    })
    has_product:boolean

    @HasMany(()=> Basket)
    baskets: Basket[]

    @HasMany(()=> Rating)
    ratings: Rating[]

    @HasMany(()=> Review)
    bookings: Review[]

    @HasMany(()=> Warehouse)
    warehouses: Warehouse[]

    @HasMany(()=> OrderItem)
    order_items: OrderItem[]
}