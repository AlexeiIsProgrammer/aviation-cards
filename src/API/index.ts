import axios from 'axios';
import { SubjectsResponseData } from './types/interfaces';

export default class SubjectsAPI {
  private static baseGetURL = 'https://bgaa.by/test';

  private static baseSendURL = 'https://bgaa.by/test_result';

  // eslint-disable-next-line consistent-return
  public static async getSubjectsData(): Promise<
    SubjectsResponseData | undefined
  > {
    try {
      const response = await axios.get<SubjectsResponseData>(this.baseGetURL);

      return response.data;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }

  public static async sendSubjectsData(): Promise<
    SubjectsResponseData | undefined
  > {
    try {
      const response = await axios.put(this.baseSendURL);

      return response.data;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  }
}
