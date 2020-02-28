Vue.directive('focus',{
    inserted:function(el){
        console.log(" I am in focus ");
        el.focus();
    }
});