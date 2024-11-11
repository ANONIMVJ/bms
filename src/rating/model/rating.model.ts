import { ApiProperty } from "@nestjs/swagger"
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { Product } from "../../products/models/product.models"
import { Users } from "../../users/models/user.model"

interface IRatingAttr{
    rating:number,
    userId:number,
    productId:number,
}

@Table({tableName:"ratings",timestamps:false})
export class Rating extends Model<Rating, IRatingAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "rating id number (auto increment)"
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
            example: 5,
            description: "Rating from 1 to 5"
        }
    )
    @Column(
    {
        type:DataType.INTEGER,
    })
    rating:number

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
}