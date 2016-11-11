jQuery(document).ready(function() {
    jQuery('[data-component="center-orphans"]').each(function() {
        var orphans = new components.centerOrphans(this);
    });
});

var components = components || {};

components.centerOrphans = function(el) {
    this.el = jQuery(el);
    this.children = this.el.find('[data-co="item"]');
    this.init();
};
components.centerOrphans.prototype = {
    init: function() {
        // Assume all children are same width
        var itemWidth = jQuery(this.children[0]).outerWidth();
        var gutter = (this.children.length > 1) ?
            parseInt(jQuery(this.children[1]).css('margin-left')) :
            0;
        var itemsPerRow = Math.floor(this.el.width() / itemWidth);
        var numItems = this.children.length;
        var numFullRows = Math.floor(numItems / itemsPerRow);
        var numOrphans = numItems - (itemsPerRow * numFullRows);
        if(numOrphans > 0) {
            var itemWidthWithGutters = (itemWidth * numOrphans) + (gutter * (numOrphans - 1));
            var buffer = (this.el.width() - (itemWidthWithGutters)) / 2;
            var itemThatGetsBuffer = jQuery(this.children[numItems - numOrphans]);
            itemThatGetsBuffer.css('margin-left', buffer);
        }
    }
};

