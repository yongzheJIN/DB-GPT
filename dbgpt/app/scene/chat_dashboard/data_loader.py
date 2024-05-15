import logging
from decimal import Decimal
from typing import List

from dbgpt._private.config import Config
from dbgpt.app.scene.chat_dashboard.data_preparation.report_schma import ValueItem

CFG = Config()
logger = logging.getLogger(__name__)


class DashboardDataLoader:
    def get_sql_value(self, db_conn, chart_sql: str):
        return db_conn.query_ex(chart_sql)

    def get_chart_values_by_conn(self, db_conn, chart_sql: str):
        field_names, datas = db_conn.query_ex(chart_sql)
        return self.get_chart_values_by_data(field_names, datas, chart_sql)

    def get_chart_values_by_data(self, field_names, datas, chart_sql: str):
        logger.info(f"get_chart_values_by_conn:{chart_sql}")
        try:
            values: List[ValueItem] = []
            data_map = {}
            field_map = {}
            index = 0
            for field_name in field_names:
                data_map.update({f"{field_name}": [row[index] for row in datas]})
                index += 1
                if not data_map[field_name]:
                    field_map.update({f"{field_name}": False})
                else:
                    field_map.update(
                        {
                            f"{field_name}": all(
                                isinstance(item, (int, float, Decimal))
                                for item in data_map[field_name]
                            )
                        }
                    )
            # if the data is not all None run else just return
            if len(datas)!=0:
                # Based analysis string Value in most Case is key otherwise where column value use id 
                str_index = next((index for index, value in enumerate(datas[0]) if isinstance(value, str)), -2)
                if str_index == -2:
                    str_index = next((index for index, value in enumerate(list(field_names.keys())) if "id" in value, -2)
                # in our hypothesis there is no id:for example the result is data[3000,4000],field("female","male")
                if str_index !=-2:
                    tempFieldName = field_names[:str_index]
                    tempFieldName.extend(field_names[str_index+1:])
                    for field_name in tempFieldName:
                        for data in datas:
                            # judge there are no None data in the value
                            if not any(item is None for item in data):
                                value_item = ValueItem(
                                    name=data[str_index],
                                    type=field_name,
                                    value=str(data[field_names.index(field_name)]),
                                )
                                values.append(value_item)
                # then to handle data[3000,4000],field("female","male")
                else:
                    result = [sum(values) for values in zip(*datas)]
                        for index,field_name in enumerate(field_names):
                            value_item = ValueItem(
                                name=field_name,
                                type=f"count{index}",
                                value=str(result[index]),
                            )
                            values.append(value_item)
                return field_names, values
            else:
                return field_names,[ValueItem(name='{field_name}',type=f"NoneData{index}",value='0' for index,field_name in enumerate(field_names)]
                
                
        except Exception as e:
            logger.debug("Prepare Chart Data Failed!" + str(e))
            raise ValueError("Prepare Chart Data Failed!")

    def get_chart_values_by_db(self, db_name: str, chart_sql: str):
        logger.info(f"get_chart_values_by_db:{db_name},{chart_sql}")
        db_conn = CFG.local_db_manager.get_connector(db_name)
        return self.get_chart_values_by_conn(db_conn, chart_sql)
