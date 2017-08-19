require.config({
    baseUrl:"js",
    paths:{
        jquery:"lib/jquery-2.1.4",
        bootstrap:"../assets/bootstrap/js/bootstrap.min",
        text:"lib/text",
        template:"lib/template-web",
        tpls:"../tpls"
    },
    shim:{
        bootstrap:{
            deps:["jquery"]
        }
    }
})

require(["jquery","bootstrap"],function($){

})