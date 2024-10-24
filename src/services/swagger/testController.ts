// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /getSign */
export async function returnSign(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.returnSignParams,
  options?: { [key: string]: any },
) {
  return request<string>('/getSign', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /test */
export async function test(options?: { [key: string]: any }) {
  return request<string>('/test', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /test1 */
export async function test1(options?: { [key: string]: any }) {
  return request<string>('/test1', {
    method: 'GET',
    ...(options || {}),
  });
}
