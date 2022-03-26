export const API_EMPTY_OBJECT = {};

export type ControlledAnyType = any;

export enum HTTPMethodsEnum {
  GET = 'GET',
  POST = 'POST'
}

export enum ApiErrorStatusCodeEnum {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404
}

export enum ApiSuccessStatusCodeEnum {
  NO_CONTENT = 204
}
