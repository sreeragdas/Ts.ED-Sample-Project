import {Inject, Injectable} from "@tsed/di";
import { MYSQL_DATA_SOURCE } from "src/datasources/MysqlDatasource";
import { StudentModel } from "src/models/StudentModel";
import { DataSource } from "typeorm";
interface studentInfo{
    name:string,
    address:string,
    class : string,
  
  
  
    
  }
@Injectable()
export class StudentService {
    constructor(@Inject(MYSQL_DATA_SOURCE) private datasource: DataSource  ){}

    async getAll():Promise<StudentModel[]>{
        return await this.datasource.getRepository(StudentModel).find()

    }
    async save(student:studentInfo): Promise<StudentModel>{
        console.log('emp: ', student)
        return await this.datasource.getRepository(StudentModel).save(student);
    }

}
