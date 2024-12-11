// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Post } from '../database/entities/post.entity';  // Add entities that you want to manage

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',           // PostgreSQL type
//       host: process.env.DB_HOST,  // Database host (e.g., localhost)
//       port: parseInt(process.env.DB_PORT) || 5432, // Database port (default 5432)
//       username: process.env.DB_USER, // Database username
//       password: process.env.DB_PASSWORD, // Database password
//       database: process.env.DB_NAME, // Database name
//       entities: [Post],     // Add all the entities you want to use with TypeORM
//       synchronize: true,          // Synchronize schema (set to false in production)
//     }),
//   ],
// })
// export class DatabaseModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '../database/entities/post.entity';  // Add entities that you want to manage

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',           // PostgreSQL type
      host: 'localhost',  // Database host (e.g., localhost)
      port: 5432, // Database port (default 5432)
      username: 'postgres', // Database username
      password: 'abc', // Database password
      database: 'blogapp', // Database name
      entities: [Post],     // Add all the entities you want to use with TypeORM
      synchronize: true,          // Synchronize schema (set to false in production)
    }),
  ],
})
export class DatabaseModule {}
