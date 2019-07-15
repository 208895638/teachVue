export default {
    namespaced: true,
    state: {
        name:"张三",
        list:[
            {
                spName:"啤酒",
                spPrice:10 , 
                spNum : 100,
                id:1
            },
            {
                spName:"白酒",
                spPrice:100 , 
                spNum : 200,
                id:2
            },
            {
                spName:"黄酒",
                spPrice:60 , 
                spNum : 100,
                id:3
            },
            {
                spName:"葡萄酒",
                spPrice:30 , 
                spNum : 150,
                id:4
            },
        ],
        carList:[
            // {
            //     num:1,
            //     id:1,
            //     info:{
            //         spName:"葡萄酒",
            //         spPrice:30 , 
            //         spNum : 150,
            //         id:1
            //     }
            // },
        ]
    },
    mutations: {
        addCar(state,id){  // home页面的添加  
            var item = state.list.find(ele => ele.id == id);
            item.spNum -- ;
            var needs = state.carList.find(ele => ele.id == id);
            if(needs){
                needs.num ++ ;
            }else{
                var obj = {
                    num:1,
                    id,
                    info:item,
                    isChecked : false
                }
                state.carList.push(obj);
            }
        },
        delCar(state,id){  // 购物车里面的方法
            var item = state.list.find(ele => ele.id == id); // 首页里面的数据
            item.spNum ++ ;
            var needs = state.carList.find(ele => ele.id == id);
            if(needs){
                needs.num -- ;
            }else{
                var obj = {
                    num:1,
                    id,
                    info:item,
                    isChecked : true
                }
                state.carList.push(obj);
            }
        },
        delItem(state,id){
            // 首页里面的数据
            var old = state.list.find(ele => ele.id == id);
            // 购物车里面的数据
            var index = state.carList.findIndex(ele => ele.id == id);
            var num = state.carList.find(ele => ele.id == id).num;
            old.spNum = old.spNum + num;
            state.carList.splice(index,1);
        },
        allCheck(state){
            console.log(222)
            if(state.carList.every(ele => ele.isChecked == true)){
                state.carList.forEach(ele => ele.isChecked = false);
            }else{
                state.carList.forEach(ele => ele.isChecked = true);
            }
        }
    },
    getters: {
        isAllChecked(state){
            return state.carList.every(ele => ele.isChecked == true);
        },
        allPrice(state){
             //  reduce
            return  state.carList.reduce(function(pre,next){ // pre带
                if(next.isChecked){
                   return  pre + next.num*next.info.spPrice
                }
                return  pre
             },0)
        }
    },
    actions: {
        
    }
}