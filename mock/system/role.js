import { resultSuccess, resultPageSuccess } from '../_util';

export const roleList = [
  {
    'searchValue': null,
    'createBy': null,
    'createTime': '2021-09-09 17:25:37',
    'updateBy': null,
    'updateTime': null,
    'remark': '超级管理员',
    'params': {},
    'roleId': 1,
    'roleName': '超级管理员',
    'roleKey': 'admin',
    'roleSort': '1',
    'dataScope': '1',
    'menuCheckStrictly': true,
    'deptCheckStrictly': true,
    'status': '0',
    'delFlag': '0',
    'flag': false,
    'menuIds': null,
    'deptIds': null,
    'admin': true
  },
  {
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
  }
]


export default [

  // 查询角色列表
  {
    url: '/dev-api/system/role/list',
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 10 } = query;
      return resultPageSuccess(page, pageSize, roleList);
    }
  },

  // 查询角色详细
  {
    url: `/dev-api/system/role/:id`,
    method: 'get',
    response: ({ query }) => {
      const { id } = query;
      const data = roleList.find(item => item.roleId == id);
      return resultSuccess(data, '操作成功')
    }
  },

  // 新增角色
  {
    url: `/dev-api/system/role`,
    method: 'post',
    response: ({ body }) => {
      let data = {
        'searchValue': null,
        'createBy': null,
        'createTime': '2021-09-09 17:25:37',
        'updateBy': null,
        'updateTime': null,
        'remark': '超级管理员',
        'params': {},
        'roleId': 3,
        'roleName': '超级管理员',
        'roleKey': 'admin',
        'roleSort': '1',
        'dataScope': '1',
        'menuCheckStrictly': true,
        'deptCheckStrictly': true,
        'status': '0',
        'delFlag': '0',
        'flag': false,
        'menuIds': null,
        'deptIds': null,
        'admin': true,
        ...body
      }
      roleList.push(data);
      return resultSuccess(data, '操作成功')
    }
  },

  // 修改角色
  {
    url: `/dev-api/system/role`,
    method: 'put',
    response: ({ body }) => {
      const { id } = body;
      const index = roleList.findIndex(item => item.roleId == id);
      roleList.splice(index, 1, body)
      return resultSuccess(body, '操作成功')
    }
  },


  // 角色状态修改
  {
    url: `/dev-api/system/role/changeStatus`,
    method: 'put',
    response: ({ body }) => {
      const { roleId, status } = body;
      const index = roleList.findIndex(item => item.roleId == roleId);
      const data = roleList.find(item => item.roleId == roleId);
      data.status = status
      roleList.splice(index, 1, data)
      return resultSuccess([], '操作成功')
    }
  },

  // 删除角色
  {
    url: `/dev-api/system/role/:id`,
    method: 'delete',
    response: ({ query }) => {
      const { id } = query;
      const index = roleList.findIndex(item => item.roleId == id);
      roleList.splice(index, 1)
      return resultSuccess([], '操作成功')
    }
  }

]
