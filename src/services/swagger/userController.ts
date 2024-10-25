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

/** 此处后端没有提供注释 POST /user/getSign */
export async function getSign(body: API.SignDto, options?: { [key: string]: any }) {
  return request<API.GeneralResponseString>('/user/getSign', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/login */
export async function userLogin(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.userLoginParams,
  options?: { [key: string]: any },
) {
  return request<API.GeneralResponseUserVo>('/user/login', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /user/logout */
export async function logout(options?: { [key: string]: any }) {
  return request<API.GeneralResponseBoolean>('/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /user/userAk */
export async function userAccessKey(options?: { [key: string]: any }) {
  return request<API.GeneralResponseString>('/user/userAk', {
    method: 'GET',
    ...(options || {}),
  });
}
