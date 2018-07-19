/**
 * shopcarts的数据服务
 */
import {MYSHOPCARTSURL} from "../constants/common"


export default class MyCartsApis {


    /**
     * 获取购物车商品列表信息
     * @param cb
     */
    static getMyCartsList(cb){
        fetch(MYSHOPCARTSURL).then(response=>{
            if(response.ok){
                response.json().then(data=>{
                    cb(data);
                })
            }
        })
    }
}
