new Vue({
    /*Vur作用範圍*/
    el: ".lo.root",
    /*參數傳遞 */
    data: {
        slider: false,
        finishTitle:'已完成',
        todo: [
            {
                sn: 1,
                caption: '繳電話費',
                time: '2021/04/20',
                done: false
            },
            {
                sn: 2,
                caption: '繳水費',
                time: '2021/04/25',
                done: true
            },
            {
                sn: 3,
                caption: '電費',
                time: '2021/04/27',
                done: true
            },
            {
                sn: 4,
                caption: '瓦斯費費',
                time: '2021/04/30',
                done: false
            },
        ]
    },
    /*計算 */
    computed: {
        notYet:()=> {
            return this.todo.filter(item => !item.done);
        },
        done: ()=>  {
            return this.todo.filter(item => item.done);
        },

    },
    /*方法 */
    methods: {
        toggle: function () {
            this.slider = !this.slider
        },

        removeFunc: function (item) {
            $todo = this.todo
            let _index = $todo.indexOf(item);
            $todo.splice(_index, 1);
        }


    },
});