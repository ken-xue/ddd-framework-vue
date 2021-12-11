import request from '@/utils/request'

export function searchUser(name) {
  return request({
    url: '/dev-admin-vue/search/user',
    method: 'get',
    params: { name }
  })
}

export function transactionList(query) {
  return request({
    url: '/dev-admin-vue/transaction/list',
    method: 'get',
    params: query
  })
}
