var app = new Vue({
    el: '#app',

    data: {
        input: '' ,
        lista:  [
                    {
                        'text': 'fare',
                        'done': false
                    },
                    {
                        'text': 'ciao',
                        'done': false
                    },
                    {
                        'text': 'casa',
                        'done': false
                    },
                    {        
                        'text': 'casa',
                        'done': false
                    }
                ]
        
    },
    methods: {
        inputText(){
            this.lista.push(this.input);
        }
    }
    
})