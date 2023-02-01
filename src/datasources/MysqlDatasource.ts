import {registerProvider} from "@tsed/di";
import {DataSource} from "typeorm";
import {Logger} from "@tsed/logger";
import { StudentModel } from "src/models/StudentModel";

export const MYSQL_DATA_SOURCE = Symbol.for("MysqlDataSource");
export const MysqlDataSource = new DataSource({
  type: "mysql",
  entities: [StudentModel],
  host:"54.205.81.137",
  port: 3306,
  username: "sreerag",
  password: "M8NHNvfVhMZgj7bP*&z!Ujwcr",
  database: "sreerag_db",
  synchronize:true,
  logging:false
});

registerProvider<DataSource>({
  provide: MYSQL_DATA_SOURCE,
  type: "typeorm:datasource",
  deps: [Logger],
  async useAsyncFactory(logger: Logger) {
    await MysqlDataSource.initialize();

    logger.info("Connected with typeorm to database: Mysql");

    return MysqlDataSource;
  },
  hooks: {
    $onDestroy(dataSource) {
      return dataSource.isInitialized && dataSource.close();
    }
  }
});
