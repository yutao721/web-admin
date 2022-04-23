import Cookies from 'js-cookie'
import cache from '@/plugins/cache';

const TokenKey = 'Admin-Token'
const projectKey = 'projectId'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}


export function getProject() {
  console.log(cache.local.get(projectKey));
  return cache.local.get(projectKey)
}

export function setProject(project) {
  return cache.local.set(projectKey, project)
}
