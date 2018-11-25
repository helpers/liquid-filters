# URL filters

URL filters output links to assets on Shopify's Content Delivery Network (CDN). They are also used to create links for filtering collections and blogs.

In many URL filter outputs, you will see a question mark (?) with a number appended to the asset's file path. This is the file's version number. For example, the version number in this URL is **28253**:

```
//cdn.shopify.com/s/files/1/0087/0462/t/394/assets/shop.css?28253
```

URL filters will always load the latest version of an asset.

## asset_url

Returns the URL of a file in the "assets" folder of a theme.

Input

```html
{{ 'shop.css' | asset_url }}
```

Output

```text
//cdn.shopify.com/s/files/1/0087/0462/t/394/assets/shop.css?28253
```

## asset_img_url

Returns the asset URL of an image in the "assets" folder of a theme. `asset_img_url` accepts an [image size parameter](/en/themes/liquid/filters/url-filters#size-parameters) .

Input

```html
{{ 'logo.png' | asset_img_url: '300x' }}
```

Output

```text
//cdn.shopify.com/s/files/1/0000/0001/t/1/assets/logo_300x.png?42
```

## file_url

Returns the URL of a file in the [Files](//www.shopify.com/admin/settings/files) page of the admin.

Input

```html
{{ 'size-chart.pdf' | file_url }}
```

Output

```text
//cdn.shopify.com/s/files/1/0087/0462/files/size-chart.pdf?28261
```

## file_img_url

Returns the asset URL of an image in the [Files](//www.shopify.com/admin/settings/files) page of the admin. `file_img_url` accepts an [image size parameter](/en/themes/liquid/filters/url-filters#size-parameters) .

Input

```html
{{ 'logo.png' | file_img_url: '1024x768' }}
```

Output

```text
//cdn.shopify.com/s/files/1/0246/0527/files/logo_1024x768.png?42
```

## customer_login_link

Generates a link to the customer login page.

Input

```html
{{ 'Log in' | customer_login_link }}
```

Output

```html
<a href="/account/login" id="customer_login_link">Log in</a>
```

## global_asset_url

Returns the URL of a global asset. Global assets are kept in a directory on Shopify's servers. Using global assets can improve the load times of your pages.

Input

```html
{{ 'prototype.js' | global_asset_url | script_tag }}
```

Output

```html
<script src="//cdn.shopify.com/s/global/prototype.js?1" type="text/javascript"></script>
```

The following global assets are available:

```html
{{ 'prototype.js' | global_asset_url | script_tag }}
{{ 'controls.js' | global_asset_url | script_tag }}
{{ 'dragdrop.js' | global_asset_url | script_tag }}
{{ 'effects.js' | global_asset_url | script_tag }}
```

```html
{{ 'prototype/1.5/prototype.js' | global_asset_url | script_tag }}
{{ 'prototype/1.6/prototype.js' | global_asset_url | script_tag }}
```

```html
{{ 'scriptaculous/1.8.2/scriptaculous.js' | global_asset_url | script_tag }}
{{ 'scriptaculous/1.8.2/builder.js' | global_asset_url | script_tag }}
{{ 'scriptaculous/1.8.2/controls.js' | global_asset_url | script_tag }}
{{ 'scriptaculous/1.8.2/dragdrop.js' | global_asset_url | script_tag }}
{{ 'scriptaculous/1.8.2/effects.js' | global_asset_url | script_tag }}
{{ 'scriptaculous/1.8.2/slider.js' | global_asset_url | script_tag }}
{{ 'scriptaculous/1.8.2/sound.js' | global_asset_url | script_tag }}
{{ 'scriptaculous/1.8.2/unittest.js' | global_asset_url | script_tag }}
```

```html
{{ 'ga.js' | global_asset_url | script_tag }}
```

```html
{{ 'mootools.js' | global_asset_url | script_tag }}
```

```html
{{ 'lightbox.css' | global_asset_url | stylesheet_tag }}
{{ 'lightbox.js' | global_asset_url | script_tag }}
```

```html
{{ 'lightbox/v1/lightbox.css' | global_asset_url | stylesheet_tag }}
{{ 'lightbox/v1/lightbox.js' | global_asset_url | script_tag }}
```

```html
{{ 'lightbox/v2/lightbox.css' | global_asset_url | stylesheet_tag }}
{{ 'lightbox/v2/lightbox.js' | global_asset_url | script_tag }}
{{ 'lightbox/v2/loading.gif' | global_asset_url }}
{{ 'lightbox/v2/close.gif' | global_asset_url }}
{{ 'lightbox/v2/overlay.png' | global_asset_url }}
{{ 'lightbox/v2/zoom-lg.gif' | global_asset_url }}
```

```html
{{ 'lightbox/v204/lightbox.css' | global_asset_url | stylesheet_tag }}
{{ 'lightbox/v204/lightbox.js' | global_asset_url | script_tag }}
{{ 'lightbox/v204/bullet.gif' | global_asset_url }}
{{ 'lightbox/v204/close.gif' | global_asset_url }}
{{ 'lightbox/v204/closelabel.gif' | global_asset_url }}
{{ 'lightbox/v204/donatebutton.gif' | global_asset_url }}
{{ 'lightbox/v204/downloadicon.gif' | global_asset_url }}
{{ 'lightbox/v204/loading.gif' | global_asset_url }}
{{ 'lightbox/v204/nextlabel.gif' | global_asset_url }}
{{ 'lightbox/v204/prevlabel.gif' | global_asset_url }}
```

```html
{{ 'list_collection.css' | global_asset_url | stylesheet_tag }}
{{ 'search.css' | global_asset_url | stylesheet_tag }}
{{ 'textile.css' | global_asset_url | stylesheet_tag }}
```

```html
{{ 'firebug/firebug.css' | global_asset_url | stylesheet_tag }}
{{ 'firebug/firebug.js' | global_asset_url | script_tag }}
{{ 'firebug/firebugx.js' | global_asset_url | script_tag }}
{{ 'firebug/firebug.html' | global_asset_url }}
{{ 'firebug/errorIcon.png' | global_asset_url }}
{{ 'firebug/infoIcon.png' | global_asset_url }}
{{ 'firebug/warningIcon.png' | global_asset_url }}
```

## img_url

Returns the URL of an image. Accepts [image size parameters](#size-parameters) . You can use `img_url` on the following objects:

* [product](/en/themes/liquid/objects/product)
* [variant](/en/themes/liquid/objects/variant)
* [line item](/en/themes/liquid/objects/line_item)
* [collection](/en/themes/liquid/objects/collection)
* [article](/en/themes/liquid/objects/article)
* [image](/en/themes/liquid/objects/image)

The `img_url` filter should be followed by the image size that you want to use. If you request a size smaller than your original image's dimensions, Shopify will scale the image for you.

If you don't include an image size, the filter returns a small (100x100) image.

Input

```html
{{ product | img_url: '100x100' }}
{{ variant | img_url: '720x720' }}
{{ line_item | img_url: '1024x' }}
{{ product | img_url }}
```

Output

```text
https://cdn.shopify.com/s/files/1/1183/1048/products/boat-shoes_100x100.jpeg?v=1459175177
https://cdn.shopify.com/s/files/1/1183/1048/products/boat-shoes_720x720.jpeg?v=1459175177
https://cdn.shopify.com/s/files/1/1183/1048/products/boat-shoes_1024x.jpeg?v=1459175177
https://cdn.shopify.com/s/files/1/1183/1048/products/boat-shoes_small.jpeg?v=1459175177
```

You can also use `img_url` on the `image` or `src` attributes of an object.

Input

```html
{{ variant.image | img_url: '300x300' }}
{{ variant.image.src | img_url: '240x' }}
```

Output

```text
https://cdn.shopify.com/s/files/1/0159/3350/products/red_shirt_100x100.jpg?v=1398706734
https://cdn.shopify.com/s/files/1/0159/3350/products/red_shirt_240x.jpg?v=1398706734
```

`img_url` can't transform icon files (`.ico`). If you specify a size or format for an icon file, `img_url` will return the original file.

Input

```html
{{ settings.favicon | img_url: '300x300' }}
{{ settings.favicon | img_url: '240x', scale: 2, format: 'pjpg' }}
```

Output

```text
https://cdn.shopify.com/s/files/1/0159/3350/files/icon.ico?v=1398706734
https://cdn.shopify.com/s/files/1/0159/3350/files/icon.ico?v=1398706734
```

### Size parameters

You can specify exact dimensions in pixels for an image's width and height, up to a maximum of 5760 x 5760 px. The image's original aspect ratio will be preserved unless you [crop](#crop) the image.

No matter what size you specify, an image can never be resized to be larger than its original dimensions.

For example:

```html
{{ product | img_url: '450x450' }}
```

You can specify only a width or only a height and Shopify will calculate the other dimension based on the original image size, keeping the original image's aspect ratio:

Width only

```html
{{ product | img_url: '125x' }}
```

Height only

```html
{{ product | img_url: 'x500' }}
```

### Other image URL parameters

#### crop

You can specify a `crop` parameter to make sure that the resulting image's dimensions match the requested dimensions. If the entire image won't fit in your requested dimensions, the `crop` parameter specifies what part of the image to show. Valid options are:

* `top`
* `center`
* `bottom`
* `left`
* `right`

```html
{{ product | img_url: '400x400', crop: 'bottom' }}
```

If you don't use `crop`, Shopify will use the largest image that fits in your specified dimensions, which might not take up the whole space.

#### scale

The `scale` parameter lets you specify the pixel density of the image. Valid options are:

* `2`
* `3`

```html
{{ product | img_url: '400x400', scale:2 }}
```

#### format

The `format` parameter lets you specify what file format to use for the displayed image. Valid options are:

* `jpg`
* `pjpg`

```html
{{ product | img_url: '400x400', format: 'pjpg' }}
```

`pjpg` is [progressive JPEG](https://en.wikipedia.org/wiki/JPEG#JPEG_compression) . A browser loads a full-sized progressive JPEG with gradually increasing quality, instead of loading the full-quality image from top to bottom like a traditional JPEG.

## link_to

Generates an HTML link. The first parameter is the URL of the link, and the optional second parameter is the title of the link.

Input

```html
{{ 'Shopify' | link_to: 'https://www.shopify.com' ,'A link to Shopify' }}
```

Output

```html
<a href="https://www.shopify.com" title="A link to Shopify">Shopify</a>
```

## link_to_vendor

Creates an HTML link to a collection page that lists all products belonging to a vendor.

Input

```html
{{ "Shopify" | link_to_vendor }}
```

Output

```html
<a href="/collections/vendors?q=Shopify" title="Shopify">Shopify</a>
```

## link_to_type

Creates an HTML link to a collection page that lists all products belonging to a product type.

Input

```html
{{ "jeans" | link_to_type }}
```

Output

```html
<a href="/collections/types?q=jeans" title="jeans">jeans</a>
```

## link_to_tag

Creates a link to all products in a collection that have a given tag.

Input

```html
<!-- collection.tags = ["Mens", "Womens", "Sale"] -->
{% for tagincollection.tags %}
  {{ tag | link_to_tag:tag }}
{% endfor %}
```

Output

```html
<a title="Show products matching tag Mens" href="/collections/frontpage/mens">Mens</a>
<a title="Show products matching tag Womens" href="/collections/frontpage/womens">Womens</a>
<a title="Show products matching tag Sale" href="/collections/frontpage/sale">Sale</a>
```

## link_to_add_tag

Creates a link to all products in a collection that have a given tag as well as any tags that have been already selected.

Input

```html
<!-- collection.tags = ["Mens", "Womens", "Sale"] -->
{% for tagincollection.tags %}
  {{ tag | link_to_add_tag:tag }}
{% endfor %}
```

Output

```html
<!-- If you're on "/collections/frontpage/mens": -->
<a title="Show products matching tag Mens" href="/collections/frontpage/mens">Mens</a>
<a title="Show products matching tag Womens" href="/collections/frontpage/womens+mens">Womens</a>
<a title="Show products matching tag Sale" href="/collections/frontpage/sale+mens">Sale</a>
```

## link_to_remove_tag

Generates a link to all products in a collection that have the given tag and all the previous tags that might have been added already.

Input

```html
<!-- collection.tags = ["Mens", "Womens", "Sale"] -->
{% for tagincollection.tags %}
  {{ tag | link_to_remove_tag:tag }}
{% endfor %}
```

Output

```html
<!-- If you're on "/collections/frontpage/mens": -->
<a title="Remove tag Mens" href="/collections/frontpage">Mens</a>
```

## payment_type_img_url

Returns the URL of the payment type's SVG image. Used in conjunction with the [shop.enabled_payment_types](/en/themes/liquid/objects/shop#shop.enabled_payment_types) variable.

Input

```html
{% for typeinshop.enabled_payment_types %}
  <img src="{{ type | payment_type_img_url }}" />
{% endfor %}
```

Output

```html
<!-- If shop accepts American Express, Mastercard and Visa -->
<img src="//cdn.shopify.com/s/global/payment_types/creditcards_american_express.svg?3cdcd185ab8e442b12edc11c2cd13655f56b0bb1">
<img src="//cdn.shopify.com/s/global/payment_types/creditcards_master.svg?3cdcd185ab8e442b12edc11c2cd13655f56b0bb1">
<img src="//cdn.shopify.com/s/global/payment_types/creditcards_visa.svg?3cdcd185ab8e442b12edc11c2cd13655f56b0bb1">
```

## shopify_asset_url

Returns the URL of a global assets that are found on Shopify's servers. Globally-hosted assets include:

* option_selection.js
* api.jquery.js
* shopify_common.js
* customer_area.js
* currencies.js
* customer.css

Input

```html
{{ 'option_selection.js' | shopify_asset_url | script_tag }}
```

Output

```html
<script src="//cdn.shopify.com/s/shopify/option_selection.js?20cf2ffc74856c1f49a46f6e0abc4acf6ae5bb34" type="text/javascript"></script>
```

## sort_by

Creates a URL to a collection page with the provided `sort_by` parameter. This filter must be applied to a collection URL.

Input

```html
{{ collection.url | sort_by: 'best-selling' }}
```

Output

```html
/collections/widgets?sort_by=best-selling
```

## url_for_type

Creates a URL that links to a collection page containing products with a specific product type.

Input

```html
{{ "T-shirt" | url_for_type }}
```

Output

```text
/collections/types?q=T-shirt
```

## url_for_vendor

Creates a URL that links to a collection page containing products with a specific product vendor.

Input

```html
{{ "Shopify" | url_for_vendor }}
```

Output

```text
/collections/vendors?q=Shopify
```

## within

Creates a _collection-aware_ product URL by prepending `/collections/collection-handle` to a product URL, where `collection-handle` is the [handle](/en/themes/liquid/basics/handle) of the collection that is currently being viewed.

Input

```html
<a href="{{ product.url | within:collection }}">{{ product.title }}</a>
```

Output

```html
<a href="/collections/frontpage/products/alien-poster">Alien Poster</a>
```

When a product is collection-aware, its product template can access the [collection](/en/themes/liquid/objects/collection) output of the collection that it belongs to. This allows you to add in collection-related content, such as [related products](/en/themes/customization/products/features/recommend-related-products) .
