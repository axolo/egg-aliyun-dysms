'use strict';

class AliyunDysms {
  constructor(config, app) {
    this.config = config;
    this.app = app;
    const { Aliyun } = this.config;
    this.aliyun = new Aliyun({
      endpoint: config.endpoint,
      apiVersion: config.apiVersion,
      accessKeyId: config.accessKeyId,
      accessKeySecret: config.accessKeySecret,
    });
  }

  request(action, params, options) {
    return this.aliyun.request(action, params, options);
  }
}

module.exports = AliyunDysms;
