'use strict';

/**
 * egg-aliyun-dysms default config
 * @see https://help.aliyun.com/document_detail/101874.html
 * @member Config#aliyunDysms
 */
exports.aliyunDysms = {
  default: {
    endpoint: 'https://dysmsapi.aliyuncs.com',
    apiVersion: '2017-05-25',
    SendSms: { method: 'POST' },
  },
  // client: {
  //   accessKeyId: '',
  //   accessKeySecret: '',
  // },
};
