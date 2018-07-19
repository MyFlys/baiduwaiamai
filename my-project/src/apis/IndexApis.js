import { NAV } from "../constants/common"
import { RECOMMEND } from "../constants/common"
import { NEARBY } from "../constants/common"
import { HOT } from "../constants/common"



export default class IndexApis {


    /**
     * 获取导航栏信息
     * @param cb
     */
    static getIndexSectionNav(cb) {
        fetch(NAV).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    cb(data)
                    // console.log(data)
                })
            }
        })
    }
    //获取为你甄选 部分数据
    static getIndexSectionRecommend(cb) {
        fetch(RECOMMEND).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    cb(data)
                })
            }
        })
    }
    // 获取 附近商户 信息
    static getIndexSectionMerchantNearby(cb) {
        fetch(NEARBY).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    cb(data)
                })
            }
        })
    }
    // 获取火热商户信息
    static getIndexSectionMerchantHot(cb) {
        fetch(HOT).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    cb(data)
                })
            }
        })
    }
}