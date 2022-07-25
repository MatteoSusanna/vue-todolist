var app = new Vue({
    el: '#app',

    data: {
        input: '',
        lista:  [],    
    },
    methods: {
        //aggiungi alle cose da fare
        inputText(){
            if(this.input.trim() == ''){
                alert('Devi scrivere qualcosa per aggiungere alla lista')
            }else{
                let newObject =     {
                    'text': this.input.trim(),
                    'done': false
                }
                this.lista.push(newObject);
                this.input= ''
            }
        },

        //rimuovi dalle cose da fare
        remove(indice){
            this.lista.splice(indice, 1);
        },


        //sbarra elemento
        strike(indice){
            if(this.lista[indice].done == false){
                this.lista[indice].done = true; 
            }else{
                this.lista[indice].done = false;
            }
        }
    }
})