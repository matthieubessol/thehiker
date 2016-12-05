var animation = {
    elmts: {},

    bindUi: function() {
        this.elmts.mainArticle = document.getElementsByClassName('main-article')[0];
    },

    bindEvents: function() {
        var self = this;
        if(this.elmts.mainArticle){
            this.elmts.mainArticle.addEventListener('click', function() {
                self.animMainArticle(self)
            });
        }
    },

    init: function() {
        this.bindUi();
        this.bindEvents();
    },

    animMainArticle: function(ctx) {
        ctx.elmts.mainArticle.classList.add('animate');
        ctx.unbindEvents(ctx);
    },

    unbindEvents:function(ctx) {
        ctx.elmts.mainArticle.addEventListener('click', function() {
            ctx.animMainArticle(ctx)
        });
    }
}

module.exports = animation;
