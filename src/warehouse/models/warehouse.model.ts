import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Product } from "../../products/models/product.models"

interface IWarehouseAttr{
    productId:number,
    address:string,
    quantity:number
}

@Table({tableName:"warehouse",timestamps:false})
export class Warehouse extends Model<Warehouse, IWarehouseAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "warehouse id number (auto increment)"
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
            example: 1,
            description: "product id (linked by foreign key)"
        }
    )
    @ForeignKey(() => Product)
    @Column(
        {
            type:DataType.INTEGER,
        })
    productId:number

    @BelongsTo(() => Product)
    product:Product

    @ApiProperty(
        {
            example: "Los angles",
            description: "Warehuse address"
        }
    )
    @Column(
    {
        type:DataType.STRING(100),
    })
    address:string

    @ApiProperty(
        {
            example: 144,
            description: "quantity of product in stock"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
    })
    quantity:number
}