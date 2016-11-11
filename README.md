# centerOrphans

Note: Take into consideration using the CSS rule `display: inline-block` on the
children and `text-align: center` on the parent for a very simliar effect.
This component can be used in instances where that won't work for whatever
reason.

This component takes a grid of items and centers the last row. It measures the
parent container and the width of the children (marked with `data-co="item"`) and
calculates how many items can fit into each row. Then it calculates to see if
there are any "orphans" (items that don't completely fill the row). If there
are, it adds a margin-left to the first item in that row in order to center the
last row of items.

This component works under the assumption that all items are the same width.

## How to use this component

```html
<div data-component="center-orphans">
    <div data-co="item">
        <!-- Content -->
    </div>
    <div data-co="item">
        <!-- Content -->
    </div>
    <div data-co="item">
        <!-- Content -->
    </div>
    <div data-co="item">
        <!-- Content -->
    </div>
    <div data-co="item">
        <!-- Content -->
    </div>
    <div data-co="item">
        <!-- Content -->
    </div>
    <div data-co="item">
        <!-- Content -->
    </div>
</div>
```
