// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 GET /analysis/top/interface/invoke */
export async function listTopInvokeInterfaceInfo(options?: { [key: string]: any }) {
  return request<API.GeneralResponseListInterfaceInfoVo>('/analysis/top/interface/invoke', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PUT /analysis/top/interface/invoke */
export async function listTopInvokeInterfaceInfo3(options?: { [key: string]: any }) {
  return request<API.GeneralResponseListInterfaceInfoVo>('/analysis/top/interface/invoke', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /analysis/top/interface/invoke */
export async function listTopInvokeInterfaceInfo2(options?: { [key: string]: any }) {
  return request<API.GeneralResponseListInterfaceInfoVo>('/analysis/top/interface/invoke', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /analysis/top/interface/invoke */
export async function listTopInvokeInterfaceInfo5(options?: { [key: string]: any }) {
  return request<API.GeneralResponseListInterfaceInfoVo>('/analysis/top/interface/invoke', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /analysis/top/interface/invoke */
export async function listTopInvokeInterfaceInfo4(options?: { [key: string]: any }) {
  return request<API.GeneralResponseListInterfaceInfoVo>('/analysis/top/interface/invoke', {
    method: 'PATCH',
    ...(options || {}),
  });
}
