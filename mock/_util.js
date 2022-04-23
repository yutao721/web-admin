export function resultSuccess(data, msg = '查询成功') {
  return {
    code: 200,
    data,
    msg
  }
}

export function resultPageSuccess(page, pageSize, list, msg = '查询成功') {
  return {
    code: 200,
    rows: list,
    total: list.length,
    msg
  };
}
