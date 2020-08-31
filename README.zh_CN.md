# egg-aliyun-dysms

[阿里云短信](https://help.aliyun.com/product/44282.html)（大鱼短信）Egg.js插件。

## 安装插件

```bash
npm i @axolo/egg-aliyun-dysms --save
```

## 开启插件

```js
// config/plugin.js
exports.aliyunDysms = {
  enable: true,
  package: '@axolo/egg-aliyun-dysms',
};
```

## 详细配置

可以指定`Aliyun`参数自定义[阿里云OpenAPI SDK](https://github.com/aliyun/openapi-core-nodejs-sdk)。

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

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

访问 [阿里云短信SDK文档] (https://help.aliyun.com/document_detail/101874.html) 获取更多帮助。

访问 [阿里云OpenAPI SDK](https://github.com/aliyun/openapi-core-nodejs-sdk) 获取更多帮助。

## 提问交流

请到 [egg issues](https://github.com/axolo/egg-aliyun-dysms/issues) 异步交流。

## License

[MIT](LICENSE)
