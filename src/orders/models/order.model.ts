import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { Users } from "../../users/models/user.model"
import { OrderStatus } from "../../order_status/models/order_status.model"
import { Deliver } from "../../deliver/models/deliver.model"
import { OrderItem } from "../../order_items/models/order_item.model"

interface IOrderAttr{
    userId:number
    order_date:Date
    total_amout:number
    order_statusId:number
}

@Table({tableName:"orders",timestamps:false})
export class Order extends Model<Order, IOrderAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "order id number (auto increment)"
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
            description: "user id (linked by foreign key)"
        }
    )
    @ForeignKey(() => Users)
    @Column(
    {
        type:DataType.INTEGER,
    })
    userId:number

    @BelongsTo(()=> Users)
    user:Users

    @ApiProperty(
        {
            example: "2024-11-01",
            description: "where the order date is displayed"
        }
    )
    @Column(
        {
            type:DataType.DATE,
            defaultValue: new Date()
        })
    order_date:Date

    @ApiProperty(
        {
            example: "1000",
            description: "here the total amount is displayed"
        }
    )
    @Column(
        {
            type:DataType.INTEGER,
        })
    total_amout:number

    @ApiProperty(
        {
            example: 1,
            description: "order status id (linked by foreign key)"
        }
    )
    @ForeignKey(() => OrderStatus)
    @Column(
    {
        type:DataType.INTEGER,
    })
    order_statusId:number

    @BelongsTo(()=> OrderStatus)
    order_status:OrderStatus

    @HasMany(()=> Deliver)
    delivers: Deliver[]

    @HasMany(()=> OrderItem)
    order_items: OrderItem[]
}