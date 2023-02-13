import { DataSource, DataSourceOptions } from "typeorm";
require("dotenv").config();
const dbPort: number = parseInt(process.env.DB_PORT);

export const dataSourceOptions: DataSourceOptions = {
	type: "mysql",
	host: process.env.DB_HOST,
	port: dbPort,
	username: process.env.DB_USERNAME,
	password: "",
	database: process.env.DATABASE,
	entities: ["dist/**/*.entity.js"],
	migrations: ["dist/db/migrations/*.js"],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
