import { ApiProperty } from "@nestjs/swagger"
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { Payment } from "../../payment/models/payment.model"

interface IPaymentMethodAttr{
    name:string
}

@Table({tableName:"payment_methods",timestamps:false})
export class PaymentMethod extends Model<PaymentMethod, IPaymentMethodAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "Payment method id number (auto increment)"
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
            example: "here the payment method is selected",
            description: "name payment method"
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