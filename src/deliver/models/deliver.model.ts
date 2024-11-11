import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript"
import { Order } from "../../orders/models/order.model"
import { Deliverer } from "../../deliverer/model/deliverer.model"
import { DeliverStatus } from "../../deliver_status/models/deliver_status.model"

interface IDeliverAttr{
    orderId:number
    address:string
    deliver_date:Date
    delivererId:number
    deliver_statusId:number
}

@Table({tableName:"delivers",timestamps:false})
export class Deliver extends Model<Deliver, IDeliverAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "deliver id number (auto increment)"
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
            example: "Los angles",
            description: "Enter the order form here"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    address:string

    @ApiProperty(
        {
            example: "2024-11-01",
            description: "where the deliver date is displayed"
        }
    )
    @Column(
        {
            type:DataType.DATE,
            defaultValue: new Date()
        })
    deliver_date:Date

    @ApiProperty(
        {
            example: 1,
            description: "deliver id (linked by foreign key)"
        }
    )
    @ForeignKey(() => Deliverer)
    @Column(
    {
        type:DataType.INTEGER,
    })
    delivererId:number

    @BelongsTo(()=> Deliverer)
    deliverer:Deliverer

    @ApiProperty(
        {
            example: 1,
            description: "deliver status id (linked by foreign key)"
        }
    )
    @ForeignKey(() => DeliverStatus)
    @Column(
    {
        type:DataType.INTEGER,
    })
    deliver_statusId:number

    @BelongsTo(()=> DeliverStatus)
    deliver_status:DeliverStatus
}