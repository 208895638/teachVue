var imgs = require("@/assets/logo.png");
console.log(imgs,222)

export default {
    namespaced: true,
    state:{
        url:require("@/assets/logo.png"),
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
                id:5
            },
        ],
        carList:[

        ]
    },
    getters: {
        all(state){
            if(state.carList.every(ele => ele.isChecked == false)){
                return 0
            }else{
                return state.carList.reduce(function(pre,next){
                    console.log(pre,next)
                    if(next.isChecked){
                        return pre = pre + next.num * next.infos.spPrice
                    }
                    return pre
                },0)
            }
        }
    },
    mutations: {
        del(state,id){
            var num = state.carList.find(ele => ele.id == id).num;
            var index = state.carList.findIndex(ele => ele.id == id);
            var ele = state.list.find(ele => ele.id == id);
            console.log(state.carList);
            ele.spNum = ele.spNum + num;
            state.carList.splice(index,1);
            
        },
        add(state,id){
            var obj = state.carList.find(ele => ele.id == id);
            var info = state.list.find(ele => ele.id == id);
            info.spNum -- ;
            if(obj){
                obj.num ++ ;
            }else{
                var lists = {
                    id,
                    num:1,
                    infos:info,
                    isChecked:false
                }
                state.carList.push(lists)
            }
        },
        inc(state,id){
            var obj = state.carList.find(ele => ele.id == id);
            var info = state.list.find(ele => ele.id == id);
            
            info.spNum ++ ;
            console.log(obj)
            if(obj){
                obj.num -- ;
            }
        },
        updateState(state){
            var all = state.carList.every(ele => ele.isChecked == true)
            if(all){
                state.carList.forEach(ele =>{
                    ele.isChecked = false
                })
            }else{
                state.carList.forEach(ele =>{
                    ele.isChecked = true
                })
            }
        }
    }
}