import {Controller, Inject} from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import {Get, Post} from "@tsed/schema";
import { StudentModel } from "src/models/StudentModel";
import { StudentService } from "src/services/StudentService";
import { DataSource } from "typeorm";

interface studentInfo{
  name:string,
  address:string,
  class : string,



  
}

@Controller("/student")
export class StudentController implements studentInfo{
  constructor(@Inject(StudentService) private studentService : StudentService){}
  name: string;
  address: string;
  class: string;
  @Get("/")
  get(): Promise <StudentModel[]> {
    return this.studentService.getAll()
  }

  @Post()
  save(@BodyParams() body : studentInfo ) : Promise<StudentModel>{
   
      console.log('Entire body', body);
   return this.studentService.save(body )
 
  }
}
