define(function(require, exports, module){
   function log(msg){
    if(window.console) {
        console.log(msg);
    } else {
        alert(msg);
    }
   }
   module.exports = log;
});
