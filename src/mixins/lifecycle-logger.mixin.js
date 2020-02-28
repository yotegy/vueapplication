export default{

    created () {
        console.log(`${this.$options.name} created `);
    },
    beforeMount (){
        console.log(`${this.$options.name} about to mount `);
    },
    mounted (){
        console.log(`${this.$options.name} mounted `);
    },
    destoryed (){
        console.log(`${this.$options.name} destroyed`);
    }

};