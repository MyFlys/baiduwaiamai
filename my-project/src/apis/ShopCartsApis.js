
import  {SHOPCARTSURL} from "../constants/common";
import  {SPURL} from "../constants/common";


export default class ShopCartsApis{

  static getShopCartsList(cb){
      fetch(SHOPCARTSURL).then(response=>{
        if(response.ok){
          response.json().then(data =>{
            cb(data);
            // console.log(data);
          })
        }
      })
  }
  static getSP(cb){
    fetch(SPURL).then(response=>{
      if(response.ok){
        response.json().then(data =>{
          cb(data);

          // console.log(data);
        })
      }
    })
  }
}

