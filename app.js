var items = [
    {
        name: '鉛筆',
        price:300,
        quantity:0
    },
    {
    name: 'ノート',
    price:500,
    quantity:0
    },
    {
    name: '消しゴム',
    price:500,
    quantity:0
    }
]

var vm = new Vue({
    el: '#app',
    data: {
        //dataproperty
        items: items
    }
})

//JSFiddleでコンソールからvmにアクセスするための対応
window.vm = vm