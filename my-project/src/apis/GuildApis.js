/**
 * 百度外卖 guild 的数据服务
 */
// import {BDWMGUILDURL} from "../constants/common";
// var BDWMGUILDURLAPI = 'http://localhost:8080/guild'

// export default class GuildApis {
//   /**
//    * 获取指南文章列表信息
//    * @param cb
//    */
//   static getGuildArticalLists(cb){
//     fetch(BDWMGUILDURLAPI).then(response => {
//       if(response.ok) {
//         response.json().then(data => {
//           cb(data)
//         })
//       }
//     })
//   }
// }
// import {BDWMGUILDURL} from "../constants/common"
// const BDWMGUILDURL = require("../constants/common")

// export default class GuildApis {
//   static getGuildArticalLists(cb){
//     fetch(BDWMGUILDURL).then(function(response){
//       if(response.ok){
//         response.json().then(function(data){
//           cb(data)
//         })
//       }
//     })
//   }
// }

fetch("https://api.github.com/users/chrissycoyier/repos")
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      return Promise.reject('something went wrong!')
    }
  })
  .then(data => console.log('data is', data))
  .catch(error => console.log('error is', error));
