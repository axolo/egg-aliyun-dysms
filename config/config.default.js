'use strict';

/**
 * **egg-aliyun-dysms default config**
 *
 * Usage: `this.app.aliyunDysms.get(client)(action, params, options)`
 *
 * @see https://help.aliyun.com/document_detail/101874.html
 * @member Config#aliyunDysms
 */
exports.aliyunDysms = {
  default: {
    Aliyun: require('@alicloud/pop-core'),
    endpoint: 'https://dysmsapi.aliyuncs.com',
    apiVersion: '2017-05-25',
    accessKeyId: 'ACCESS_KEY_ID',
    accessKeySecret: 'ACCESS_KEY_SECRET',
  },
  clients: {
    sms: { // client
      SendSms: { // action
        params: { // action params
          RegionId: 'cn-hangzhou',
          SignName: 'SIGN_NAME',
          TemplateCode: 'TEMPLATE_CODE',
        },
        options: { // request options
          method: 'POST',
        },
      },
    },
  },
};
