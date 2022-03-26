import { ControlledAnyType, HTTPMethodsEnum } from '../constants/utilities';
import axios from 'axios';
import config from '../config';

type MethodTyps = keyof typeof HTTPMethodsEnum;

type Args = {
  method: MethodTyps;
  headers?: ControlledAnyType;
  url: string;
  isExternal?: boolean;
  query?: ControlledAnyType;
  data?: ControlledAnyType;
};

const makeRequest = async (args: Args) => {
  try {
    const BASE_URL = config.API_DEV_URL;
    const { method, headers, url, isExternal, query, data } = args;
    // let headers = undefined;
    // if (method === 'POST') {
    //   return (headers = { 'Content-Type': 'application/json' });
    // }

    const response = await axios({
      method,
      url: isExternal ? url : `${BASE_URL}${url}`,
      data,
      headers,
      withCredentials: true
    });
    return isExternal ? response.data : response.data.data;
  } catch (error: any) {
    throw error.response ? error.response.data.error : error.request;
  }
};

export default makeRequest;
