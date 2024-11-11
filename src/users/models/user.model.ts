import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript"
import { UserRoles } from "./user-role.model"
import { ApiProperty } from "@nestjs/swagger"
import { Roles } from "../../roles/models/role.model"
import { Basket } from "../../basket/model/basket.model"
import { Rating } from "../../rating/model/rating.model"
import { Review } from "../../reviews/models/review.model"
import { Order } from "../../orders/models/order.model"

interface UsersCreateAttr{
    first_name:string,
    last_name:string,
    email:string,
    password:string,
    phone_number:string,
    telegram_link:string,
    role_value:string,
}

@Table({tableName:"users", timestamps:false})
export class Users extends Model<Users, UsersCreateAttr>{
    @ApiProperty(
        {
            example: 1,
            description: "User id number (auto increment)"
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
            example: 'Anna',
            description: "User last name"
        }
    )
    @Column({
        type:DataType.STRING,
        allowNull: true
    })
    first_name:string

    @ApiProperty(
        {
            example: "Maria",
            description: "User last name"
        }
    )
    @Column({
        type:DataType.STRING,
        allowNull: true
    })
    last_name:string

    @ApiProperty(
        {
            example:"user1@gmail.com",
            description:"User email"
        }
    )
    @Column({
        type:DataType.STRING,
        unique:true,
        allowNull: true
    })
    email: string

    @ApiProperty(
        {
            example:"Uzbek!$t0n",
            description:"User's password (Strong password: uppercase and lowercase letter, symbol, number)"
        }
    )
    @Column({
        type:DataType.STRING,
    })
    password:string

    @ApiProperty(
        {
            example:"+998917772233",
            description:"User phone number"
        }
    )
    @Column({
        type:DataType.STRING,
    })
    phone_number:string

    @ApiProperty(
        {
            example:"t.me/ooddiiy",
            description:"Telegram link of the user"
        }
    )
    @Column({
        type:DataType.STRING,
    })
    telegram_link:string

    @ApiProperty(
        {
            example:"Admin",
            description:"Initial role assigned to the user"
        }
    )
    @Column({
        type:DataType.STRING,
    })
    role_value:string

    @ApiProperty(
        {
            example: 1,
            description: "Is active user"
        }
    )
    @Column({
        type:DataType.BOOLEAN,
        defaultValue:false
    })
    is_active:boolean

    @BelongsToMany(()=>Roles,()=> UserRoles)
    roles:Roles[]

    @HasMany(()=> Basket)
    baskets: Basket[]

    @HasMany(()=> Rating)
    ratings: Rating[]

    @HasMany(()=> Review)
    reviews: Review[]

    @HasMany(()=> Order)
    orders: Order[]
}
