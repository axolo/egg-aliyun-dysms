'use strict';

const AliyunDysms = require('./lib/aliyun-dysms');

function createAliyunDysms(config, app) {
  const aliyunDysms = new AliyunDysms(config, app);
  return aliyunDysms;
}

module.exports = app => {
  app.addSingleton('aliyunDysms', createAliyunDysms);
};
