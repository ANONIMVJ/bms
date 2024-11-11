import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Product } from "../../products/models/product.models"
import { Users } from "../../users/models/user.model"

interface IBasketAttr{
    productId:number,
    userId:number,
}

@Table({tableName:"basket",timestamps:false})
export class Basket extends Model<Basket, IBasketAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "review id number (auto increment)"
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
            example: 1,
            description: "user id (linked by foreign key)"
        }
    )
    @ForeignKey(()=>Users)
    @Column(
        {
            type:DataType.INTEGER,
        })
    userId:number

    @BelongsTo(() => Users)
    user:Users

}
