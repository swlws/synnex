import { RESPONSE_SDK_LIST } from './sdk_data';

/**
 * 后台返回的SDK的定义
 */
export type Sdk = {
  client_name: string;
  board_name: string;
  tags: string;
  requester: string;
  sdk_script: string;
};

/**
 * 获取SDK列表
 * @returns
 */
export function getSdkList(): Promise<Sdk[]> {
  const res = RESPONSE_SDK_LIST;

  if (res.r0 === 0) {
    return Promise.resolve(res.res);
  } else {
    return Promise.resolve([]);
  }
}

/**
 * 新建一条SDk
 *
 * @returns true
 */
export function addOneSdk(): Promise<boolean> {
  return Promise.resolve(true);
}

/**
 * 删除一条数据
 *
 * @returns true/false
 */
export function rmOneSdk() {
  const flag = Math.random() > 0.5 ? true : false;
  return Promise.resolve(flag);
}
