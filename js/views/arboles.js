Semarnat.Views.arboles = Backbone.View.extend({
    el: $("#contenido"),
    template: Handlebars.compile($("#arbolesView").html()),
    initialize: function () {
          this.render();
    },
    render: function(modelo){
        this.$el.html(this.template());
        return this;
    }
});