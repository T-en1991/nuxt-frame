// //主模块
//
// //state
// export const state = () => ({
//   bNav: false,
//   bLoading: false
// });
//
// //mutations
// export const mutations = {
//   M_UPDATE_NAV(state, payload) {
//     state.bNav = payl// //主模块
// //
// // //state
// // export const state = () => ({
// //   bNav: false,
// //   bLoading: false
// // });
// //
// // //mutations
// // export const mutations = {
// //   M_UPDATE_NAV(state, payload) {
// //     state.bNav = payload;
// //   },
// //   M_UPDATE_LOADING(state, payload) {
// //     state.bLoading = payload;
// //   }
// // }
// //
// // //actions
// // export const actions = {
// //   // nuxtServerInit(store, {app:{$cookies}}) {
// //   //   //初始化token东西到store当中
// //   //   let user = $cookies.get('user') ? $cookies.get('user') : {err:2,msg:'未登录',token:''};
// //   //   store.commit('user/M_UPDATE_USER',user)
// //   // }
// // }oad;
//   },
//   M_UPDATE_LOADING(state, payload) {
//     state.bLoading = payload;
//   }
// }
//
// //actions
// export const actions = {
//   // nuxtServerInit(store, {app:{$cookies}}) {
//   //   //初始化token东西到store当中
//   //   let user = $cookies.get('user') ? $cookies.get('user') : {err:2,msg:'未登录',token:''};
//   //   store.commit('user/M_UPDATE_USER',user)
//   // }
// }

//getters
export const getters = {
  getNav(state){
    return state.bNav ? '显示' : '隐藏'
  }
}
