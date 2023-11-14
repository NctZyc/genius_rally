/**
 * 描述：axios的封装
 * 安装模块：npm install axios
*/
import axios from 'axios';

// 创建新的axios实例
const service = axios.create({
    // 环境变量，需要在.env文件中配置
    //baseURL: process.env.VUE_APP_BASE_API,
    // 超时时间暂定5s
    timeout: 5000,
  });

  // 拦截请求前的处理
  service.interceptors.request.use(
    config => {
        // 此处添加Loading
        //config.headers['Access-Control-Allow-Origin'] = '*';
        //config.headers['Content-Type'] = 'text/plain';
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  // 拦截请求响应后的处理
  service.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      // 处理异常情况，根据项目实际情况处理或不处理
      if (error && error.response) {
        // 根据约定的响应码处理
        switch (error.response.status) {
          case 403:
            error.message = '拒绝访问';
            break;
          case 502:
            error.message = '服务器端出错';
            break;
          default:
            error.message = `连接错误${error.response.status}`;
        }
      } else {
        // 超时处理
        error.message = '服务器响应超时，请刷新当前页';
      }
      console.log(error.message);
      return Promise.resolve(error.response);
    }
  );


  //封装成请求函数然后导出
  const Request = (url, options = {}) => {
    let method = options.method || 'get';
    let params = options.params || {};
    
    if (method === 'get' || method === 'GET') {
      return new Promise((resolve, reject) => {
        service
          .get(url, {
            params: params,
          })
          .then(res => {
            if (res && res.data) {
              resolve(res.data);
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    } else {
      return new Promise((resolve, reject) => {
        service
          .post(url, params)
          .then(res => {
            if (res && res.data) {
              resolve(res.data);
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  };

  export default Request;