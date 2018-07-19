/**
 * 百度外卖 guild 的数据服务
 */
 //guild
import {BDWMGUILDURL} from "../constants/common";
import {GUILDURLSWIPER} from "../constants/common";
// var BDWMGUILDURLAPI = 'http://localhost:8080/guild'

//shop
// var BDWMGUILDURLAPI = 'http://localhost:8080/guild'
var BDWMSHOPURLAPI = 'http://localhost:8080/shop'

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
  /**
   * 获取swiper信息
   * @param cb
   */

  static getGuildSwiperLists(id,cb){
    fetch(`http://localhost:8081/api/guildSwiper?id=${id}`).then(response => {

      if(response.ok) {
        response.json().then(function(data){
          cb(data)
          // console.log(data);
        })
      }
    })
  }
  /**
   * 获取店铺信息
   * @param cb
   */

   static getshopNews(cb){
    fetch(BDWMSHOPURLAPI).then(response => {
      if(response.ok) {
        response.json().then(data => {
          cb(data)
        })
      }
    })
  }
}
