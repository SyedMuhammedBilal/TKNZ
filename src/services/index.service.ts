import { productionEnvironmentConfig } from "../config/environment.live";
import axios from 'axios'
import { DataModel } from "../types/DataModel";

export class IndexService {
  public getItemsDetails = async (
    id: string
  ): Promise<{
    data: DataModel
  }> => {
    try {
      const { serverUrl } = productionEnvironmentConfig;
      const response = await axios.get(
        serverUrl + `${id}`
      )

      return response.data
    } catch (error) {
      return error
    }
  }
}