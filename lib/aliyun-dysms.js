'use strict';

const Core = require('@alicloud/pop-core');

class AliyunDysms {

  constructor(config, app) {
    this.config = config;
    this.app = app;
    this.client = new Core({
      accessKeyId: config.accessKeyId,
      accessKeySecret: config.accessKeySecret,
      endpoint: config.endpoint,
      apiVersion: config.apiVersion,
    });
  }

  async request(action, params, options) {
    const mergeOptions = Object.assign({}, this.config[action], options);
    return await this.client.request(action, params, mergeOptions);
  }

}

module.exports = AliyunDysms;
