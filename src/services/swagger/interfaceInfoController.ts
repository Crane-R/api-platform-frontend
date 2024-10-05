// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /interface/add */
export async function interfaceAdd(
  body: API.InterfaceAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.GeneralResponseBoolean>('/interface/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interface/delete */
export async function interfaceDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.interfaceDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.GeneralResponseBoolean>('/interface/delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /interface/list */
export async function interfaceList(options?: { [key: string]: any }) {
  return request<API.GeneralResponseListInterfaceInfoVo>('/interface/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interface/update */
export async function interfaceUpdate(body: API.InterfaceInfoVo, options?: { [key: string]: any }) {
  return request<API.GeneralResponseBoolean>('/interface/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
