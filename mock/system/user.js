import { resultSuccess, resultPageSuccess } from '../_util';

export const userList = [
  {
    'searchValue': null,
    'createBy': 'admin',
    'createTime': '2021-09-09 17:25:28',
    'updateBy': null,
    'updateTime': null,
    'remark': '管理员',
    'params': {},
    'userId': 1,
    'deptId': 103,
    'userName': 'admin',
    'nickName': 'admin',
    'email': 'admin@163.com',
    'phonenumber': '15888888888',
    'sex': '1',
    'avatar': '',
    'status': '0',
    'delFlag': '0',
    'loginIp': '223.84.91.51',
    'loginDate': '2022-02-21T10:57:15.000+08:00',
    'dept': {
      'searchValue': null,
      'createBy': null,
      'createTime': null,
      'updateBy': null,
      'updateTime': null,
      'remark': null,
      'params': {},
      'deptId': 103,
      'parentId': null,
      'ancestors': null,
      'deptName': '研发部门',
      'orderNum': null,
      'leader': 'admin',
      'phone': null,
      'email': null,
      'status': null,
      'delFlag': null,
      'parentName': null,
      'children': []
    },
    'roles': [],
    'roleIds': null,
    'postIds': null,
    'roleId': null,
    'admin': true
  },
  {
    'searchValue': null,
    'createBy': 'admin',
    'createTime': '2021-09-09 17:25:29',
    'updateBy': null,
    'updateTime': null,
    'remark': '测试员',
    'params': {},
    'userId': 2,
    'deptId': 105,
    'userName': 'jock',
    'nickName': 'jock',
    'email': 'jock@qq.com',
    'phonenumber': '15666666666',
    'sex': '1',
    'avatar': '',
    'status': '0',
    'delFlag': '0',
    'loginIp': '183.156.115.88',
    'loginDate': '2022-02-21T10:50:15.000+08:00',
    'dept': {
      'searchValue': null,
      'createBy': null,
      'createTime': null,
      'updateBy': null,
      'updateTime': null,
      'remark': null,
      'params': {},
      'deptId': 105,
      'parentId': null,
      'ancestors': null,
      'deptName': '测试部门',
      'orderNum': null,
      'leader': 'admin',
      'phone': null,
      'email': null,
      'status': null,
      'delFlag': null,
      'parentName': null,
      'children': []
    },
    'roles': [],
    'roleIds': null,
    'postIds': null,
    'roleId': null,
    'admin': false
  }
]
export default [

  // 查询用户列表
  {
    url: '/dev-api/system/user/list',
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 10 } = query;
      return resultPageSuccess(page, pageSize, userList);
    }
  },

  // 查询用户详情
  {
    url: '/dev-api/system/user/:id',
    method: 'get',
    response: () => {
      return {
        'msg': '操作成功',
        'code': 200,
        'roleIds': [2],
        'data': {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2021-09-09 17:25:29',
          'updateBy': null,
          'updateTime': null,
          'remark': '测试员',
          'params': {},
          'userId': 2,
          'deptId': 105,
          'userName': 'ry',
          'nickName': '若依',
          'email': 'ry@qq.com',
          'phonenumber': '15666666666',
          'sex': '1',
          'avatar': '',
          'status': '0',
          'delFlag': '0',
          'loginIp': '175.152.140.73',
          'loginDate': '2022-04-22T16:14:31.000+08:00',
          'dept': {
            'searchValue': null,
            'createBy': null,
            'createTime': null,
            'updateBy': null,
            'updateTime': null,
            'remark': null,
            'params': {},
            'deptId': 105,
            'parentId': 101,
            'ancestors': null,
            'deptName': '测试部门',
            'orderNum': '3',
            'leader': '若依',
            'phone': null,
            'email': null,
            'status': '0',
            'delFlag': null,
            'parentName': null,
            'children': []
          },
          'roles': [{
            'searchValue': null,
            'createBy': null,
            'createTime': null,
            'updateBy': null,
            'updateTime': null,
            'remark': null,
            'params': {},
            'roleId': 2,
            'roleName': '普通角色',
            'roleKey': 'common',
            'roleSort': '2',
            'dataScope': '2',
            'menuCheckStrictly': false,
            'deptCheckStrictly': false,
            'status': '0',
            'delFlag': null,
            'flag': false,
            'menuIds': null,
            'deptIds': null,
            'admin': false
          }],
          'roleIds': null,
          'postIds': null,
          'roleId': null,
          'admin': false
        },
        'postIds': [2],
        'roles': [{
          'searchValue': null,
          'createBy': null,
          'createTime': '2021-09-09 17:25:37',
          'updateBy': null,
          'updateTime': null,
          'remark': '普通角色',
          'params': {},
          'roleId': 2,
          'roleName': '普通角色',
          'roleKey': 'common',
          'roleSort': '2',
          'dataScope': '2',
          'menuCheckStrictly': true,
          'deptCheckStrictly': true,
          'status': '0',
          'delFlag': '0',
          'flag': false,
          'menuIds': null,
          'deptIds': null,
          'admin': false
        }],
        'posts': [{
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2021-09-09 17:25:33',
          'updateBy': null,
          'updateTime': null,
          'remark': '',
          'params': {},
          'postId': 1,
          'postCode': 'ceo',
          'postName': '董事长',
          'postSort': '1',
          'status': '0',
          'flag': false
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2021-09-09 17:25:33',
          'updateBy': null,
          'updateTime': null,
          'remark': '',
          'params': {},
          'postId': 2,
          'postCode': 'se',
          'postName': '项目经理',
          'postSort': '2',
          'status': '0',
          'flag': false
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2021-09-09 17:25:34',
          'updateBy': null,
          'updateTime': null,
          'remark': '',
          'params': {},
          'postId': 3,
          'postCode': 'hr',
          'postName': '人力资源',
          'postSort': '3',
          'status': '0',
          'flag': false
        }, {
          'searchValue': null,
          'createBy': 'admin',
          'createTime': '2021-09-09 17:25:34',
          'updateBy': null,
          'updateTime': null,
          'remark': '',
          'params': {},
          'postId': 4,
          'postCode': 'user',
          'postName': '普通员工',
          'postSort': '4',
          'status': '0',
          'flag': false
        }]
      }
    }
  }


]