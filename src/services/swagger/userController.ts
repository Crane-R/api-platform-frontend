// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /user/add */
export async function userRegister(body: API.UserAddRequest, options?: { [key: string]: any }) {
  return request<API.GeneralResponseBoolean>('/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /user/current */
export async function userCurrent(options?: { [key: string]: any }) {
  return request<API.GeneralResponseUserVo>('/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/login */
export async function userLogin(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userLoginParams,
  options?: { [key: string]: any },
) {
  return request<API.GeneralResponseBoolean>('/user/login', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
