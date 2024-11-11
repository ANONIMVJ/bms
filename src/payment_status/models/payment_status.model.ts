import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Payment } from "../../payment/models/payment.model"

interface IPaymentStatusAttr{
    name:string
}

@Table({tableName:"payment_status",timestamps:false})
export class PaymentStatus  extends Model<PaymentStatus, IPaymentStatusAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Payment status id number (auto increment)"
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
            example: "payment has been made",
            description: "name payment status"
        }
    )
    @Column(
    {
        type:DataType.STRING,
    })
    name:string

    @HasMany(()=> Payment)
    payments: Payment[]
}