/**
 * api接口统一管理
 */
import { get,post } from './http';


/**
 * get 请求
 * @param url 请求地址
 * @param params 请求参数
 */
export function ApiGet(url, params = {}){get(url, params)};

/**
 * post 请求
 * @param url 请求地址
 * @param params 请求参数
 */
export function ApiPost(url, params = {}){post(url, params)};
