import { Admin } from './admin/models/admin.model';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AdminModule } from './admin/admin.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { Users } from './users/models/user.model';
import { UsersModule } from './users/users.module';
import { Roles } from './roles/models/role.model';
import { RolesModule } from './roles/roles.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { Product } from './products/models/product.models';
import { Category } from './categories/Models/category.model';
import { UserRoles } from './users/models/user-role.model';
import { WarehouseModule } from './warehouse/warehouse.module';
import { Warehouse } from './warehouse/models/warehouse.model';
import { ReviewsModule } from './reviews/reviews.module';
import { Review } from './reviews/models/review.model';
import { RatingModule } from './rating/rating.module';
import { Rating } from './rating/model/rating.model';
import { BasketModule } from './basket/basket.module';
import { Basket } from './basket/model/basket.model';
import { PaymentModule } from './payment/payment.module';
import { Payment } from './payment/models/payment.model';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/models/order.model';
import { OrderItemsModule } from './order_items/order_items.module';
import { OrderItem } from './order_items/models/order_item.model';
import { DeliverModule } from './deliver/deliver.module';
import { Deliver } from './deliver/models/deliver.model';
import { DelivererModule } from './deliverer/deliverer.module';
import { Deliverer } from './deliverer/model/deliverer.model';
import { PaymentStatusModule } from './payment_status/payment_status.module';
import { PaymentStatus } from './payment_status/models/payment_status.model';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { PaymentMethod } from './payment_method/models/payment_method.model';
import { OrderStatusModule } from './order_status/order_status.module';
import { OrderStatus } from './order_status/models/order_status.model';
import { DeliverStatusModule } from './deliver_status/deliver_status.module';
import { DeliverStatus } from './deliver_status/models/deliver_status.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: false,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Admin,
        Users,
        Roles,
        Product,
        Category,
        UserRoles,
        Warehouse,
        Review,
        Rating,
        Basket,
        Payment,
        Order,
        OrderItem,
        OrderStatus,
        Deliver,
        Deliverer,
        DeliverStatus,
        PaymentStatus,
        PaymentMethod,
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    AdminModule,
    UsersModule,
    RolesModule,
    ProductsModule,
    CategoriesModule,
    WarehouseModule,
    ReviewsModule,
    RatingModule,
    BasketModule,
    PaymentModule,
    OrdersModule,
    OrderItemsModule,
    DeliverModule,
    DelivererModule,
    PaymentStatusModule,
    PaymentMethodModule,
    OrderStatusModule,
    DeliverStatusModule,
  ],
})
export class AppModule {}
