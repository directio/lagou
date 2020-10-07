// 职位组件
Vue.component('tab-position',{
    data(){
        return {
            num : 8
        }
    },
    props : {
        datalist : {
            type : Array
        }
    },
    template : '#position',
    methods : {
        loadMore : function(){
            this.num += 8;
        },
        toTop(){
            window.scrollTo(0,0);
        },
        // openPage(data){
        //     this.$root.clickid = data.id;
        //     location.href = 'position.html';
        // },
    }
})
// 搜索组件
Vue.component('tab-search',{
    template : '#search'
})
// 我的组件
Vue.component('tab-mine',{
    template : '#mine'
})
var vm = new Vue({
    el : '#app',
    data : {
        current : 'position',
        tabs : [
            {
                id : 'position',
                value : '职位',
                icon : 'iconfont icon-index'
            },
            {
                id : 'search',
                value : '搜索',
                icon : 'iconfont icon-search'
            },
            {
                id : 'mine',
                value : '我的',
                icon : 'iconfont icon-mine'
            }
        ],
        datalist : [],
        clickid : null
    },
    methods : {
        handleClick(item){
            this.current = item;
        }
    },
    computed : {
        getCurrent(){
            return 'tab-' + this.current;
        }
    },
    created(){
        fetch('../index.json').then((res) => res.json()).then((res) => {
            console.log(res);
            this.datalist = res.position;
        })
    }
})