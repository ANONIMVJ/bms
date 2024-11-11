import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Order } from "../../orders/models/order.model"
import { Product } from "../../products/models/product.models"

interface IOrderItemAttr{
    orderId:number
    productId:number
    quantity:number
    price:number
}

@Table({tableName:"order_items",timestamps:false})
export class OrderItem extends Model<OrderItem, IOrderItemAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "order items id number (auto increment)"
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
            description: "order id (linked by foreign key)"
        }
    )
    @ForeignKey(() => Order)
    @Column(
    {
        type:DataType.INTEGER,
    })
    orderId:number

    @BelongsTo(()=> Order)
    order:Order

    @ApiProperty(
        {
            example: 1,
            description: "order id (linked by foreign key)"
        }
    )
    @ForeignKey(() => Product)
    @Column(
    {
        type:DataType.INTEGER,
    })
    productId:number

    @BelongsTo(()=> Product)
    product:Product

    @ApiProperty(
        {
            example: "12",
            description: "The amount of items is displayed"
        }
    )
    @Column(
        {
            type:DataType.INTEGER,
        })
    quantity:number
 
    @ApiProperty(
        {
            example: "1000$",
            description: "the price of the order is displayed here"
        }
    )
    @Column(
        {
            type:DataType.INTEGER,
        })
    price:number
}