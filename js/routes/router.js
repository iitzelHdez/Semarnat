Semarnat.SemRouter = Backbone.Router.extend({
    routes:{
        ""             	: "incioR",
        "Arboles"  		: "arbolesR", 
        "Predios"		: "prediosR",
        "Arb_Pre"    	: "arbpreR",
    },

    initialize: function(){
        
        var carga = new Semarnat.Views.inicio();  
        $("#contenido").append(carga.render().el);
        Backbone.history.start();
        console.log("cargo inicio");
    },

    incioR: function(){
        $("#contenido").html("");
        var inicioRu = new Semarnat.Views.inicio();
        $("#contenido").append(inicioRu.render().el);
        console.log("cargo home");
    },
    arbolesR: function(){
        $("#contenido").html("");
        var arbolesRu = new Semarnat.Views.arboles();
        $("#contenido").append(arbolesRu.render().el);
        console.log("cargo arboles");
    },
    prediosR: function(){
        $("#contenido").html("");
        var prediosRu = new Semarnat.Views.predios();
        $("#contenido").append(prediosRu.render().el);
        console.log("cargo predios");
    },
    arbpreR: function(){
        $("#contenido").html("");
        var arbpreRu = new Semarnat.Views.arbpre();
        $("#contenido").append(arbpreRu.render().el);
        console.log("cargo arb_pre");
    }
});


Semarnat.application = new Semarnat.SemRouter();