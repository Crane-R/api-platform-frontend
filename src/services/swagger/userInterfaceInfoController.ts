// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /user_interface_info/add */
export async function userInterfaceInfoAdd(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userInterfaceInfoAddParams,
  options?: { [key: string]: any },
) {
  return request<API.GeneralResponseUserInterfaceInfoVo>('/user_interface_info/add', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user_interface_info/delete */
export async function userInterfaceInfoDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userInterfaceInfoDeleteParams,
  options?: { [key: string]: any },
) {
  return request<API.GeneralResponseUserInterfaceInfoVo>('/user_interface_info/delete', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /user_interface_info/list */
export async function userInterfaceInfoList(options?: { [key: string]: any }) {
  return request<API.GeneralResponseListUserInterfaceInfoVo>('/user_interface_info/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user_interface_info/update */
export async function userInterfaceInfoUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userInterfaceInfoUpdateParams,
  options?: { [key: string]: any },
) {
  return request<API.GeneralResponseUserInterfaceInfoVo>('/user_interface_info/update', {
    method: 'POST',
    params: {
      ...params,
      userInterfaceInfoVo: undefined,
      ...params['userInterfaceInfoVo'],
    },
    ...(options || {}),
  });
}
