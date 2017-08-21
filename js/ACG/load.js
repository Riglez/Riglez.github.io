define([
    'jquery',
    'text!tpls/acgLoad.html'
], function($, acgLoad) {
    return function(){
        $(".show").html(acgLoad);
    }
});