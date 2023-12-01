import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'ep-white-boat-06468699.ap-southeast-1.aws.neon.tech', // Use environment variable or fallback to localhost
  port: 5432, // Assuming the default PostgreSQL port
  username: 'koyeb-adm', // Use environment variable or fallback to postgres
  password: 'ELWa4Up1gKuc', // Use environment variable or fallback to your password
  database: 'koyebdb', // Use environment variable or fallback to your database name
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true, // Caution: `synchronize: true` in production might lead to data loss, consider migrations instead
  ssl: true,
};

// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'Password',
//   database: 'bnp_awami',
//   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//   synchronize: true,
// };
