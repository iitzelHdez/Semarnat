Semarnat.Views.arbpre = Backbone.View.extend({
    el: $("#contenido"),
    template: Handlebars.compile($("#arbpreView").html()),
    initialize: function () {
          this.render();
    },
    render: function(modelo){
        this.$el.html(this.template());
        return this;
    }
});