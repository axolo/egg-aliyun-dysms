'use strict';

const mock = require('egg-mock');

describe('test/aliyun-dysms.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/aliyun-dysms-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, aliyun-dysms')
      .expect(200);
  });
});
