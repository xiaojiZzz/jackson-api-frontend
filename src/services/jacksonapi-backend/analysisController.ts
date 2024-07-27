// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** listTopInvokeInterface GET /jacksonapi/analysis/top/interface/invoke */
export async function listTopInvokeInterfaceUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListInterfaceInfoVO_>(
    '/jacksonapi/analysis/top/interface/invoke',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}
