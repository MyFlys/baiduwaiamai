/**
 * 百度外卖 guild 的数据服务
 */
import {BDWMGUILDURL} from "../constants/common";
// var BDWMGUILDURLAPI = 'http://localhost:8080/guild'

export default class GuildApis {
  /**
   * 获取指南文章列表信息
   * @param cb
   */

  static getGuildArticalLists(cb){
    fetch(BDWMGUILDURL).then(response => {
      console.log(response.ok);

      if(response.ok) {
        response.json().then(function(data){
          cb(data)
          // console.log(data);
        })
      }
    })
  }
}
