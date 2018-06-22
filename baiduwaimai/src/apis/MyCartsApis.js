/**
 * shopcarts的数据服务
 */
import {SHOPCARTSURL} from "../constants/commons"


export default class MyCartsApis {


    /**
     * 获取购物车商品列表信息
     * @param cb
     */
    static getMyCartsList(cb){
        fetch(SHOPCARTSURL).then(response=>{
            if(response.ok){
                response.json().then(data=>{
                    cb(data);
                })
            }
        })
    }
}