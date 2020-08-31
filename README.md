# egg-aliyun-dysms

[Aliyun Dysms](https://help.aliyun.com/product/44282.html) plugin for Egg.js.

## Install

```bash
npm i @axolo/egg-aliyun-dysms --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.aliyunDysms = {
  enable: true,
  package: '@axolo/egg-aliyun-dysms',
};
```

## Configuration

Config `Aliyun` to define [Aliyun OpenAPI SDK](https://github.com/aliyun/openapi-core-nodejs-sdk).

```js
// {app_root}/config/config.default.js
exports.aliyunDysms = {
  default: {
    Aliyun: require('@alicloud/pop-core'),
    endpoint: 'https://dysmsapi.aliyuncs.com',
    apiVersion: '2017-05-25',
    accessKeyId: 'ACCESS_KEY_ID',
    accessKeySecret: 'ACCESS_KEY_SECRET',
  },
  clients: {
    auth: { // client
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
```

## Example

```js
'use strict';

const Service = require('egg').Service;

class SmsService extends Service {
  async authCode(phone, code) {
    const { app } = this;
    const sms = app.aliyunDysms.get('auth');
    const action = 'SendSms';
    const config = sms.config[action];
    const PhoneNumbers = phone;
    const TemplateParam = JSON.stringify({ code });
    const sendParams = { ...config.params, PhoneNumbers, TemplateParam };
    const sendOptions = { ...config.options };
    const send = await sms.request(action, sendParams, sendOptions);
    return send;
  }
}

module.exports = SmsService;
```

see [config/config.default.js](config/config.default.js) for more detail.

see [Aliyun SMS SDK Documents](https://help.aliyun.com/document_detail/101874.html) for more detail.

see [Aliyun OpenAPI SDK](https://github.com/aliyun/openapi-core-nodejs-sdk) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/axolo/egg-aliyun-dysms/issues).

## License

[MIT](LICENSE)
