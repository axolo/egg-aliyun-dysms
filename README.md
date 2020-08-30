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

```js
// {app_root}/config/config.default.js
exports.aliyunDysms = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

see [Aliyun SMS SDK Documents](https://help.aliyun.com/document_detail/101874.html) for more detail.

see [Aliyun OpenAPI SDK](https://github.com/aliyun/openapi-core-nodejs-sdk) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/axolo/egg-aliyun-dysms/issues).

## License

[MIT](LICENSE)
