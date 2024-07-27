// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addUserInterfaceInvoke POST /jacksonapi/userInterfaceInvoke/add */
export async function addUserInterfaceInvokeUsingPost(
  body: API.UserInterfaceInvokeAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/jacksonapi/userInterfaceInvoke/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUserInterfaceInvoke POST /jacksonapi/userInterfaceInvoke/delete */
export async function deleteUserInterfaceInvokeUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/jacksonapi/userInterfaceInvoke/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserInterfaceInvokeById GET /jacksonapi/userInterfaceInvoke/get */
export async function getUserInterfaceInvokeByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserInterfaceInvokeByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserInterfaceInvoke_>('/jacksonapi/userInterfaceInvoke/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserInterfaceInvoke GET /jacksonapi/userInterfaceInvoke/list */
export async function listUserInterfaceInvokeUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUserInterfaceInvokeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUserInterfaceInvoke_>('/jacksonapi/userInterfaceInvoke/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserInterfaceInvokeByPage GET /jacksonapi/userInterfaceInvoke/list/page */
export async function listUserInterfaceInvokeByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUserInterfaceInvokeByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserInterfaceInvoke_>(
    '/jacksonapi/userInterfaceInvoke/list/page',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** updateUserInterfaceInvoke POST /jacksonapi/userInterfaceInvoke/update */
export async function updateUserInterfaceInvokeUsingPost(
  body: API.UserInterfaceInvokeUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/jacksonapi/userInterfaceInvoke/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
