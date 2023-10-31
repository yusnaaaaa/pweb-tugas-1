// console.log('hello vue')

const app = Vue.createApp({
    // template: 'New template. Hello world'
    data(){
        return{
            url: 'https://www.youtube.com/@Ridh0',
            image: 'https://us.123rf.com/450wm/natara/natara2005/natara200500045/147291321-une-photographe-asiatique-prend-une-photo.jpg?ver=6',
            show: true,
            books: [
                {title : 'Pemrograman web', author: 'Yusna Millaturrosyidah', isFav: true},
                {title : 'Sistem Deteksi Intrusi', author: 'Salsabila Fatma', isFav: false},
                {title : 'Smart City', author: 'Melanie Sayyidina', isFav: true},
                {title : 'Internet of Things', author: 'Nadira Milha', isFav: true}
            ]
            // title: 'Pemrograman web',
            // author: 'Yusna Millaturrosyidah',
            // age: 17,
            // x: 0,
            // y: 0
        }
    },
    methods: {
        // changeTitle(title){
        //     this.title = title
        changeShow(){
            this.show = !this.show
        },
        handleEvent(e){
            console.log('event')
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toogleFav(book){
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book)=>book.isFav)
        }
    }
})
app.mount('#app')