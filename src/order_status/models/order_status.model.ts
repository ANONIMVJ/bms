import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Order } from "../../orders/models/order.model"

interface IOrderStatusAttr{
    name:string
}

@Table({tableName:"order_status",timestamps:false})
export class OrderStatus extends Model<OrderStatus, IOrderStatusAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "order status id number (auto increment)"
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
            example: "ordered",
            description: "Here is the status of the order"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    name:string

    @HasMany(()=> Order)
    orders: Order[]
}