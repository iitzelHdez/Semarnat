Semarnat.Views.predios = Backbone.View.extend({
    el: $("#contenido"),
    template: Handlebars.compile($("#prediosView").html()),
    initialize: function () {
          this.render();
    },
    render: function(modelo){
        this.$el.html(this.template());
        return this;
    }
});