new Vue({
    el: '#desafio',
    data: {
        nome:'Rafael',
        idade: '39',
        img: 'https://files.tecnoblog.net/wp-content/uploads/2021/07/jogos-sobre-rock-007.jpg',
        
    },
    methods: {
        randomico: function(){
            return Math.random()
        }
    }
})