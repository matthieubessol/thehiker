var useful = {
    isMobile:function() {
        if(window.innerWidth <= 479)
            return true;
        else
            return false;
    },

    getOffset:function(el) {
        el = el.getBoundingClientRect();
        return {
          left: el.left + window.scrollX,
          top: el.top + window.scrollY
        }
    }
}

module.exports = useful;
