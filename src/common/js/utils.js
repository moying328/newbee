export const getLocal=(name)=>{
  return localStorage.getItem(name)
}
export const setLocal=(name,value)=>{
  localStorage.setItem(name,value)
}
// 图片前缀方法
export const prefix = (url) => {
  if (url && url.startsWith('http')) {
    return url
  } else {
    url = `http://47.99.134.126:28019${url}`
    return url
  }
}