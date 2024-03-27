const { createApp } = Vue;

createApp({
    data(){
        return{
            message: 'Ciao a tutti! Con Vue'
        }
    }
}).mount('#message')