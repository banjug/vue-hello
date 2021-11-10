var app = new Vue({
        el: '#root',
        data: {
            message: "Click me",
            imgSrc: "img/img.jpg",
            miaClasse: ''
        },
        methods: {
            clickBlur: function() {
                if (this.miaClasse == '') {
                    this.miaClasse = 'blur';
                } else if (this.miaClasse = 'blur') {
                    this.miaClasse = '';
                }
            }
        }
    }
);