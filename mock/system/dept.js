import { resultSuccess, resultPageSuccess } from '../_util';

export const deptListRow = [
  {
    'searchValue': null,
    'createBy': 'admin',
    'createTime': '2021-09-09 17:25:21',
    'updateBy': null,
    'updateTime': null,
    'remark': null,
    'params': {},
    'deptId': 100,
    'parentId': 0,
    'ancestors': '0',
    'deptName': '若依科技',
    'orderNum': '0',
    'leader': '若依',
    'phone': '15888888888',
    'email': 'ry@qq.com',
    'status': '0',
    'delFlag': '0',
    'parentName': null,
    'children': []
  }, {
    'searchValue': null,
    'createBy': 'admin',
    'createTime': '2021-09-09 17:25:21',
    'updateBy': null,
    'updateTime': null,
    'remark': null,
    'params': {},
    'deptId': 101,
    'parentId': 100,
    'ancestors': '0,100',
    'deptName': '深圳总公司',
    'orderNum': '1',
    'leader': '若依',
    'phone': '15888888888',
    'email': 'ry@qq.com',
    'status': '0',
    'delFlag': '0',
    'parentName': null,
    'children': []
  }, {
    'searchValue': null,
    'createBy': 'admin',
    'createTime': '2021-09-09 17:25:22',
    'updateBy': null,
    'updateTime': null,
    'remark': null,
    'params': {},
    'deptId': 102,
    'parentId': 100,
    'ancestors': '0,100',
    'deptName': '长沙分公司',
    'orderNum': '2',
    'leader': '若依',
    'phone': '15888888888',
    'email': 'ry@qq.com',
    'status': '0',
    'delFlag': '0',
    'parentName': null,
    'children': []
  }, {
    'searchValue': null,
    'createBy': 'admin',
    'createTime': '2021-09-09 17:25:22',
    'updateBy': null,
    'updateTime': null,
    'remark': null,
    'params': {},
    'deptId': 103,
    'parentId': 101,
    'ancestors': '0,100,101',
    'deptName': '研发部门',
    'orderNum': '1',
    'leader': '若依',
    'phone': '15888888888',
    'email': 'ry@qq.com',
    'status': '0',
    'delFlag': '0',
    'parentName': null,
    'children': []
  }, {
    'searchValue': null,
    'createBy': 'admin',
    'createTime': '2021-09-09 17:25:22',
    'updateBy': null,
    'updateTime': null,
    'remark': null,
    'params': {},
    'deptId': 104,
    'parentId': 101,
    'ancestors': '0,100,101',
    'deptName': '市场部门',
    'orderNum': '2',
    'leader': '若依',
    'phone': '15888888888',
    'email': 'ry@qq.com',
    'status': '0',
    'delFlag': '0',
    'parentName': null,
    'children': []
  }, {
    'searchValue': null,
    'createBy': 'admin',
    'createTime': '2021-09-09 17:25:23',
    'updateBy': null,
    'updateTime': null,
    'remark': null,
    'params': {},
    'deptId': 105,
    'parentId': 101,
    'ancestors': '0,100,101',
    'deptName': '测试部门',
    'orderNum': '3',
    'leader': '若依',
    'phone': '15888888888',
    'email': 'ry@qq.com',
    'status': '0',
    'delFlag': '0',
    'parentName': null,
    'children': []
  }, {
    'searchValue': null,
    'createBy': 'admin',
    'createTime': '2021-09-09 17:25:24',
    'updateBy': null,
    'updateTime': null,
    'remark': null,
    'params': {},
    'deptId': 106,
    'parentId': 101,
    'ancestors': '0,100,101',
    'deptName': '财务部门',
    'orderNum': '4',
    'leader': '若依',
    'phone': '15888888888',
    'email': 'ry@qq.com',
    'status': '0',
    'delFlag': '0',
    'parentName': null,
    'children': []
  }, {
    'searchValue': null,
    'createBy': 'admin',
    'createTime': '2021-09-09 17:25:24',
    'updateBy': null,
    'updateTime': null,
    'remark': null,
    'params': {},
    'deptId': 107,
    'parentId': 101,
    'ancestors': '0,100,101',
    'deptName': '运维部门',
    'orderNum': '5',
    'leader': '若依',
    'phone': '15888888888',
    'email': 'ry@qq.com',
    'status': '0',
    'delFlag': '0',
    'parentName': null,
    'children': []
  }, {
    'searchValue': null,
    'createBy': 'admin',
    'createTime': '2021-09-09 17:25:24',
    'updateBy': null,
    'updateTime': null,
    'remark': null,
    'params': {},
    'deptId': 108,
    'parentId': 102,
    'ancestors': '0,100,102',
    'deptName': '市场部门',
    'orderNum': '1',
    'leader': '若依',
    'phone': '15888888888',
    'email': 'ry@qq.com',
    'status': '0',
    'delFlag': '0',
    'parentName': null,
    'children': []
  }, {
    'searchValue': null,
    'createBy': 'admin',
    'createTime': '2021-09-09 17:25:25',
    'updateBy': null,
    'updateTime': null,
    'remark': null,
    'params': {},
    'deptId': 109,
    'parentId': 102,
    'ancestors': '0,100,102',
    'deptName': '财务部门',
    'orderNum': '2',
    'leader': '若依',
    'phone': '15888888888',
    'email': 'ry@qq.com',
    'status': '0',
    'delFlag': '0',
    'parentName': null,
    'children': []
  }]
export const deptList = [
  {
    'id': 100,
    'label': '若依科技',
    'children': [{
      'id': 101,
      'label': '深圳总公司',
      'children': [{ 'id': 103, 'label': '研发部门' }, { 'id': 104, 'label': '市场部门' }, { 'id': 105, 'label': '测试部门' }, { 'id': 106, 'label': '财务部门' }, {
        'id': 107,
        'label': '运维部门'
      }]
    }, { 'id': 102, 'label': '长沙分公司', 'children': [{ 'id': 108, 'label': '市场部门' }, { 'id': 109, 'label': '财务部门' }] }]
  }]

export default [

  // 查询部门列表
  {
    url: '/dev-api/system/dept/list',
    method: 'get',
    response: () => {
      return resultSuccess(deptListRow)
    }
  },

  // 查询部门下拉树结构
  {
    url: '/dev-api/system/dept/treeselect',
    method: 'get',
    response: () => {
      return resultSuccess(deptList)
    }
  },

  // 查询部门列表（排除节点）
  {
    url: '/dev-api/system/dept/list/exclude/:deptId',
    method: 'get',
    response: ({ query }) => {
      const { deptId } = query;
      const data = deptListRow.find(item => item.deptId == deptId)
      return resultSuccess(data)
    }
  },



  // 查询部门详细
  {
    url: '/dev-api/system/dept/:deptId',
    method: 'get',
    response: ({ query }) => {
      const { deptId } = query;
      const data = deptListRow.find(item => item.deptId == deptId)
      return resultSuccess(data)
    }
  }

]
