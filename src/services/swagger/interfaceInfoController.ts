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

/** 此处后端没有提供注释 POST /interface/addBatch */
export async function interfaceAddBatch(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.interfaceAddBatchParams,
  options?: { [key: string]: any },
) {
  return request<API.GeneralResponseListInterfaceInfoVo>('/interface/addBatch', {
    method: 'POST',
    params: {
      ...params,
    },
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

/** 此处后端没有提供注释 POST /interface/interfaceIsExistByInt */
export async function interfaceIsExist(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.interfaceIsExistParams,
  options?: { [key: string]: any },
) {
  return request<API.GeneralResponseBoolean>('/interface/interfaceIsExistByInt', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interface/invoke */
export async function interfaceInvoke(
  body: API.InterfaceInvokeRequest,
  options?: { [key: string]: any },
) {
  return request<API.GeneralResponseObject>('/interface/invoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interface/list */
export async function interfaceList(
  body: API.InterfaceSelectRequest,
  options?: { [key: string]: any },
) {
  return request<API.GeneralResponseListInterfaceInfoVo>('/interface/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interface/offline */
export async function interfaceOffline(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.interfaceOfflineParams,
  options?: { [key: string]: any },
) {
  return request<API.GeneralResponseBoolean>('/interface/offline', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interface/online */
export async function interfaceOnLine(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.interfaceOnLineParams,
  options?: { [key: string]: any },
) {
  return request<API.GeneralResponseBoolean>('/interface/online', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /interface/page */
export async function interfacePage(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.interfacePageParams,
  options?: { [key: string]: any },
) {
  return request<API.GeneralResponsePageInterfaceInfoVo>('/interface/page', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /interface/selectOne */
export async function interfaceSelectOne(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.interfaceSelectOneParams,
  options?: { [key: string]: any },
) {
  return request<API.GeneralResponseInterfaceInfoVo>('/interface/selectOne', {
    method: 'GET',
    params: {
      ...params,
    },
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
