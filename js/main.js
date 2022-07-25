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
                    },
                ],

        pushList:   {
                        'text': this.input,
                        'done': false
                    },
    },
    methods: {
        //aggiungi alle cose da fare
        inputText(){
            this.lista.push(this.pushList);
        },

        //rimuovi dalle cose da fare
        remove(indice){
            this.lista.splice(indice, 1);
        }
    }
    
})