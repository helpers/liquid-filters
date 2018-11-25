# HTML filters

HTML filters create HTML elements based on Liquid properties or a store's assets.

## img_tag

Generates an image tag.

Input

```html
{{ 'smirking_gnome.gif' | asset_url | img_tag }}
```

Output

```html
<img src="//cdn.shopify.com/s/files/1/0147/8382/t/15/assets/smirking_gnome.gif?v=1384022871" alt="" />
```

The `img_tag` filter accepts parameters to output an alt tag, class names, and a size parameter:

* The first parameter is output as the alt text.
* The second parameter is the css class, or classes to be applied to the tag.
* The last parameter is the image size parameter.

Input

```html
{{ 'smirking_gnome.gif' | asset_url | img_tag: 'Smirking Gnome' , 'cssclass1 cssclass2' }}
```

Output

```html
<img src="//cdn.shopify.com/s/files/1/0147/8382/t/15/assets/smirking_gnome.gif?v=1384022871" alt="Smirking Gnome" class="cssclass1 cssclass2" />
```

The `img_tag` filter can also be used on the following objects:

* [product](/en/themes/liquid/objects/product)
* [variant](/en/themes/liquid/objects/variant)
* [line item](/en/themes/liquid/objects/line_item)
* [collection](/en/themes/liquid/objects/collection)
* [image](/en/themes/liquid/objects/image)

Input

```html
{{ product | img_tag }}
{{ variant | img_tag: 'alternate text' }}
{{ line_item | img_tag: 'alternate text' , 'css-class' }}
{{ image | img_tag: 'alternate text' , 'css-class' , 'small' }}
{{ collection | img_tag: 'alternate text' , 'css-class' , 'large' }}
```

Output

```html
<img src="//cdn.shopify.com/s/files/1/0159/3350/products/red_shirt_small.jpg?v=1398706734" alt="Red Shirt Small" />
<img src="//cdn.shopify.com/s/files/1/0159/3350/products/red_shirt_small.jpg?v=1398706734" alt="alternate text" />
<img src="//cdn.shopify.com/s/files/1/0159/3350/products/red_shirt_small.jpg?v=1398706734" alt="alternate text" class="css-class" />
<img src="//cdn.shopify.com/s/files/1/0159/3350/products/red_shirt_small.jpg?v=1398706734" alt="alternate text" class="css-class" />
<img src="//cdn.shopify.com/s/files/1/0159/3350/products/shirts_collection_large.jpg?v=1338563745" alt="alternate text" class="css-class" />
```

## payment_button

Creates a [dynamic checkout button](/en/manual/using-themes/change-the-layout/theme-settings/dynamic-checkout) for a product. This filter must be used on the `form` object within a [product form](/en/themes/liquid/tags/theme-tags#product) .

Input

```html
{{ form | payment_button }}
```

Output

```html
<div data-shopify="payment-button" class="shopify-payment-button">
  ...
</div>
```

## script_tag

Generates a script tag.

Input

```html
{{ 'shop.js' | asset_url | script_tag }}
```

Output

```html
<script src="//cdn.shopify.com/s/files/1/0087/0462/t/394/assets/shop.js?28178" type="text/javascript"></script>
```

## stylesheet_tag

Generates a stylesheet tag.

Input

```html
{{ 'shop.css' | asset_url | stylesheet_tag }}
```

Output

```html
<link href="//cdn.shopify.com/s/files/1/0087/0462/t/394/assets/shop.css?28178" rel="stylesheet" type="text/css" media="all" />
```

## payment_type_svg_tag

Returns the `<svg>` tag of the requested payment type image for inlining purposes. Used in conjunction with the [shop.enabled_payment_types](/en/themes/liquid/objects/shop#shop.enabled_payment_types) variable. Accepts an optional `class` attribute which is applied on the `<svg>` tag to control the styling of the icon.

Input

```html
{% for type in shop.enabled_payment_types %}
  {{ type | payment_type_svg_tag,class: 'custom-class' }}
{% endfor %}
```

Output

```html
<!-- If the shop accepts Mastercard and Discover -->
<svg class="custom-class" xmlns="http://www.w3.org/2000/svg">
  <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
  <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
  ...
</svg>

<svg class="custom-class" xmlns="http://www.w3.org/2000/svg">
  <path fill="#494949" d="M9 11h20v2H9z"></path>
  ...
</svg>
```
