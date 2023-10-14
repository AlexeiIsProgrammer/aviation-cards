import axios from 'axios';
import { SubjectsResponseData } from './types/interfaces';

export default class SubjectsAPI {
  private static baseURL = 'https://bgaa.by/test';

  // eslint-disable-next-line consistent-return
  public static async getSubjectsData(): Promise<
    SubjectsResponseData | undefined
  > {
    try {
      const response = await axios.get<SubjectsResponseData>(this.baseURL);

      return response.data;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }
}
