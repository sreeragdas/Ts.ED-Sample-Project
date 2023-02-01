import {Inject, Injectable} from "@tsed/di";
import { MYSQL_DATA_SOURCE } from "src/datasources/MysqlDatasource";
import { DataSource } from "typeorm";

@Injectable()
export class StudentService {
    constructor(@Inject(MYSQL_DATA_SOURCE) private datasource: DataSource  ){}

}
