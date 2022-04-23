export default [
  // 生成路由
  {
    url: '/dev-api/script/list',
    method: 'get',
    response: (config) => {

      return {
        'total': 4,
        'rows': [
          {
            name: '拉去Git',
            language: 'Sheel',
            version: 'V0.0.1',
            quote: '2',
            script: [
              {
                name: '客户端热更新',
                version: 'V1.0.0',
                status: '历史版本'
              },
              {
                name: '客户端热更新2',
                version: 'V2.0.0',
                status: '已上线'
              },
              {
                name: '停服更新',
                version: 'V0.1.0',
                status: '历史版本'
              }
            ],
            updater: '张三',
            updateTime: '2021-11-17 10:10'
          },
          {
            name: '上传CDN',
            language: 'Python',
            version: 'V0.2.1',
            quote: '7',
            script: [
              {
                name: '客户端热更新2',
                version: 'V2.0.0',
                status: '已上线'
              },
              {
                name: '停服更新',
                version: 'V0.1.0',
                status: '历史版本'
              }
            ],
            updater: '张三',
            updateTime: '2021-11-17 10:10'
          }
        ],
        'code': 200,
        'msg': '查询成功'
      }
    }
  },
  {
    url: '/dev-api/script/detail',
    method: 'get',
    response: (config) => {
      console.log(config)
      return {
        data: {
          name: '拉去Git',
          language: 'Sheel',
          version: 'V0.0.1',
          quote: '2',
          script: [
            {
              name: '客户端热更新',
              version: 'V1.0.0',
              statu: '历史版本'
            },
            {
              name: '客户端热更新2',
              version: 'V2.0.0',
              statu: '已上线'
            },
            {
              name: '停服更新',
              version: 'V0.1.0',
              statu: '历史版本'
            }
          ],
          updater: '张三',
          updateTime: '2021-11-17 10:10'
        },
        'code': 200,
        'msg': '查询成功'
      }
    }
  }
]
