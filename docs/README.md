# Liquid filters

These filters are based on the filters listed in the [Shopify filters documentation](https://help.shopify.com/en/themes/liquid/filters).

* [Array filters](/en/themes/liquid/filters/array-filters)
* [Color filters](/en/themes/liquid/filters/color-filters)
* [Font filters](/en/themes/liquid/filters/font-filters)
* [HTML filters](/en/themes/liquid/filters/html-filters)
* [Math filters](/en/themes/liquid/filters/math-filters)
* [Money filters](/en/themes/liquid/filters/money-filters)
* [String filters](/en/themes/liquid/filters/string-filters)
* [URL filters](/en/themes/liquid/filters/url-filters)
* [Additional filters](/en/themes/liquid/filters/additional-filters)
* [Deprecated filters](/en/themes/liquid/filters/deprecated-filters)

Filters are simple methods that modify the output of numbers, strings, variables and objects. They are placed within an output tag `{{ ` ` }}` and are denoted by a pipe character ` | `.

Input

```html
<!-- product.title = "Awesome Shoes" -->
{{ product.title | upcase }}
```

Output

```html
AWESOME SHOES
```

In the example above, `product` is the object, `title` is its attribute, and `upcase` is the filter being applied.

Some filters require a parameter to be passed.

Input

```html
{{ product.title | remove: "Awesome" }}
```

Output

```html
Shoes
```

Multiple filters can be used on one output. They are applied from left to right.

Input

```html
<!-- product.title = "Awesome Shoes" -->
{{ product.title | upcase | remove: "AWESOME"  }}
```

Output

```html
SHOES
```
