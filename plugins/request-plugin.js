// plugins/request-plugin.js
import apis from '../apis/index'
export default (ctx, inject) => {
  let apiObject = {}
  for (let i in apis) {
    apiObject[i] = apis[i](ctx.$axios)
  }
  inject('request', apiObject)
}
