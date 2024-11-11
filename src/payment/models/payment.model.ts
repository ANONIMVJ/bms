import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Order } from "../../orders/models/order.model"
import { PaymentMethod } from "../../payment_method/models/payment_method.model"
import { PaymentStatus } from "../../payment_status/models/payment_status.model"

interface IPaymentAttr{
    orderId:number
    payment_date:Date
    amout:number
    payment_methodId:number
    payment_statusId:number
}

@Table({tableName:"payments",timestamps:false})
export class Payment extends Model<Payment, IPaymentAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "payment id number (auto increment)"
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
            example: "2024-11-01",
            description: "where the payment date is displayed"
        }
    )
    @Column(
        {
            type:DataType.DATE,
            defaultValue: new Date()
        })
    payment_date:Date

    @ApiProperty(
        {
            example: "1000",
            description: "here the payment amount is displayed"
        }
    )
    @Column(
        {
            type:DataType.INTEGER,
        })
    amout:number

    @ApiProperty(
        {
            example: 1,
            description: "payment_method id (linked by foreign key)"
        }
    )
    @ForeignKey(() => PaymentMethod)
    @Column(
    {
        type:DataType.INTEGER,
    })
    payment_methodId:number

    @BelongsTo(()=> PaymentMethod)
    payment_method:PaymentMethod

    @ApiProperty(
        {
            example: 1,
            description: "payment_status id (linked by foreign key)"
        }
    )
    @ForeignKey(() => PaymentStatus)
    @Column(
    {
        type:DataType.INTEGER,
    })
    payment_statusId:number

    @BelongsTo(()=> PaymentStatus)
    payment_status:PaymentStatus
}