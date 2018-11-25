# Additional filters

General filters serve many different purposes including formatting, converting, and applying CSS classes.

## date

Converts a timestamp into another date format.

Input

```html
{{ article.published_at | date: "%a, %b %d, %y" }}
```

Output

```text
Tue, Apr 22, 14
```

`date` accepts the same parameters as Ruby's `strftime` method. You can find a [list of the shorthand formats](http://www.ruby-doc.org/core/Time.html#method-i-strftime) in Ruby's documentation or use a site like [strfti.me](http://www.strfti.me/) .

The output of `date` cannot be translated into other languages. You can use numbered dates, such as `2018-08-14` instead of `14 August 2018`, to account for this.

## time_tag

The `time_tag` filter converts a timestamp into an [HTML `<time>` tag](https://developer.mozilla.org/en/docs/Web/HTML/Element/time) :

Input

```html
{{ article.published_at | time_tag }}
```

Output

```html
<time datetime="2016-02-24T14:47:51Z">Wed, 24 Feb 2016 09:47:51 -0500</time>
```

To customize the time output, you can pass [date parameters](#date) to the `time_tag` filter. This doesn't affect the value of the `datetime` attribute set in the `<time>` tag:

Input

```html
{{ article.published_at | time_tag: '%b %d, %Y' }}
```

Output

```html
<time datetime="2016-02-24T14:47:51Z">Feb 24, 2016</time>
```

### Custom `datetime`

You can pass a `datetime` parameter with [date parameters](#date) to use a custom format for the `datetime` attribute of the output `time` tag:

Input

```html
{{ article.published_at | time_tag:datetime: '%b %d, %Y' }}
```

Output

```html
<time datetime="Feb 24, 2016">Wed, 24 Feb 2016 09:47:51 -0500</time>
```

### Localized date format

You can pass a `format` parameter to the filter to use a [date format defined in your theme's locale settings](/en/themes/development/theme-store-requirements/internationalizing/locale-files#date-localization) :

In theme / locales / en.json

```json
"date_formats": { "month_day_year": "%B %d, %Y" }
```

Input

```html
{{ article.published_at | time_tag:format: 'month_day_year' }}
```

Output

```html
<time datetime="2016-02-24T14:47:51Z">February 24, 2016</time>
```

## default

Sets a default value for any variable with no assigned value. Can be used with strings, arrays, and hashes.

The default value is returned if the variable resolves to `nil` or an empty string `""`. A string containing whitespace characters will not resolve to the default value.

Input

```html
Dear {{ customer.name | default: "customer" }}
```

Output

```html
<!-- If customer.name is nil -->
Dear customer

<!-- If customer.name is "" -->
Dear customer

<!-- If customer.name is "   " -->
Dear
```

## default_errors

Outputs default error messages for the [form.errors](/en/themes/liquid/objects/form#form.errors) variable. The messages returned are dependent on the strings returned by `form.errors`.

Input

```html
{% if form.errors %}
  {{ form.errors | default_errors }}
{% endif %}
```

Output

```html
<!-- if form.errors returned "email" -->
Please enter a valid email address.
```

## default_pagination

Creates a set of links for paginated results. Used in conjunction with the [paginate](/en/themes/liquid/objects/paginate) variable.

Input

```html
{{ paginate | default_pagination }}
```

Output

```html
<span class="page current">1</span>
<span class="page"><a href="/collections/all?page=2" title="">2</a></span>
<span class="page"><a href="/collections/all?page=3" title="">3</a></span>
<span class="deco">...</span>
<span class="page"><a href="/collections/all?page=17" title="">10</a></span>
<span class="next"><a href="/collections/all?page=2" title="">Next >></a></span>
```

Default pagination uses the labels `Next &#xBB;` and `&#xAB; Previous` for links to the next and previous pages. You can override these labels by passing new words to the `default_pagination` filter:

Input

```html
{{ paginate | default_pagination: next: 'Older', previous: 'Newer' }}
```

Output

```html
<span class="page current">1</span>
<span class="page"><a href="/collections/all?page=2" title="">2</a></span>
<span class="page"><a href="/collections/all?page=3" title="">3</a></span>
<span class="next"><a href="/collections/all?page=2" title="">Older</a></span>
```

## format_address

Use the `format_address` filter on an address to print the elements of the address in order according to their locale. The filter will only print the parts of the address that have been provided. This filter works on the addresses page for customers who have accounts in your store, or on your store's address:

Input

```html
{{ address | format_address }}
```

Output

```html
<p>
  Elizabeth Gonzalez<br>
  1507 Wayside Lane<br>
  San Francisco<br>
  CA<br>
  94103<br>
  United States
</p>
```

Input

```html
{{ address | format_address }}
```

Output

```html
<p>
  Feng Sun<br>
  No. 2094, 1006, Hui Dong Xin Cun<br>
  Nanhui District<br>
  201300, Shanghai<br>
  China
</p>
```

## highlight

Wraps words inside search results with an HTML `<strong>` tag with the class `highlight` if it matches the submitted [search.terms](/en/themes/liquid/objects/search#search.terms) .

Input

```html
{{ item.content | highlight: search.terms }}
```

Output

```html
<!-- If the search term was "Yellow" -->
<strong class="highlight">Yellow</strong> shirts are the best!
```

## highlight_active_tag

Wraps a tag link in a `<span>` with the class `active` if that tag is being used to filter a collection.

Input

```html
<!-- collection.tags = ["Cotton", "Crew Neck", "Jersey"] -->
{% for tag in collection.tags %}
    {{ tag | highlight_active | link_to_tag: tag }}
{% endfor %}
```

Output

```html
<a title="Show products matching tag Cotton" href="/collections/all/cotton"><span class="active">Cotton</span></a>
<a title="Show products matching tag Crew Neck" href="/collections/all/crew-neck">Crew Neck</a>
<a title="Show products matching tag Jersey" href="/collections/all/jersey">Jersey</a>
```

## json

Converts a string into JSON format.

Input

```html
var content = {{ pages.page-handle.content | json }};
```

Output

```html
var content = "\u003Cp\u003E\u003Cstrong\u003EYou made it! Congratulations on starting your own e-commerce store!\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003EThis is your shop\u0026#8217;s \u003Cstrong\u003Efrontpage\u003C/strong\u003E, and it\u0026#8217;s the first thing your customers will see when they arrive. You\u0026#8217;ll be able to organize and style this page however you like.\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003ETo get started adding products to your shop, head over to the \u003Ca href=\"/admin\"\u003EAdmin Area\u003C/a\u003E.\u003C/strong\u003E\u003C/p\u003E\n\u003Cp\u003EEnjoy the software,  \u003Cbr /\u003E\nYour Shopify Team.\u003C/p\u003E";
```

The `json` filter can also used to make Liquid objects readable by JavaScript:

```html
var json_product = {{ collections.featured.products.first | json }};
var json_cart = {{ cart | json }};
```

### Product inventory and the JSON filter

The JSON filter doesn't output values for the `inventory_quantity` and `inventory_policy` fields for any Shopify stores created after December 5, 2017. These fields are deprecated to help eliminate bots and crawlers from retrieving inventory quantities for stores to which they aren't granted access.

Instead of using the JSON filter, you can use [`variant.inventory_quantity`](/en/themes/liquid/objects/variant#variant-inventory_quantity) and [`variant.inventory_policy`](/en/themes/liquid/objects/variant#variant-inventory_policy) to access inventory information.

## weight_with_unit

Formats the product variant's weight. The weight unit is set in [General settings](//www.shopify.com/admin/settings/general) .

Input

```html
{{ product.variants.first.weight | weight_with_unit }}
```

Output

```html
24.0 kg
```

The unit can be overridden by passing it into the filter. This is useful in the case of product variants which can each have their own unit.

Input

```html
{{ variant.weight | weight_with_unit: variant.weight_unit }}
```

Output

```html
52.9 lb
```

## placeholder_svg_tag

Takes a placeholder name and outputs a placeholder SVG illustration. An optional argument can be supplied to include a custom class attribute on the SVG tag.

Input

```html
{{ 'collection-1' | placeholder_svg_tag }}
```

Output

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5">...omitted for brevity...</svg>
```

### Custom class attribute

You can pass a class paramater to include a custom class attribute for the SVG tag:

Input

```html
{{ 'collection-1' | placeholder_svg_tag: 'custom' }}
```

Output

```html
<svg class="custom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5">...omitted for brevity...</svg>
```

| Placeholder name | Preview |
| --- | --- |
 |

```
collection-1
```  | ![](/assets/themes/placeholders/collection-1-5f43e429920b69ef45d3a1951be5a833c693707f6f48ce0c579630e49d38aace.svg) |
 |

```
collection-2
```  | ![](/assets/themes/placeholders/collection-2-d231777573272505272babec0e5477850c5717390f009fb56019a8f90590cafd.svg) |
 |

```
collection-3
```  | ![](/assets/themes/placeholders/collection-3-868481a006eab48fa728eddc2ae8f5b5833a41293b1d385f6a4ca7a04b4c7f62.svg) |
 |

```
collection-4
```  | ![](/assets/themes/placeholders/collection-4-6590c546e8235c53683a36d626e400a1e69323a7a1f38f0c50f1c8a1d8d26e86.svg) |
 |

```
collection-5
```  | ![](/assets/themes/placeholders/collection-5-ac465d5ff3f190a413882b6c2e0b56ef650f14011e1a2c8e568c2d091c80a044.svg) |
 |

```
collection-6
```  | ![](/assets/themes/placeholders/collection-6-0e93cb17d4c5871bcbe537b95b180c4cd6df29e13e4f56d81f7546eb2ba70758.svg) |
 |

```
image
```  | ![](/assets/themes/placeholders/image-5af95a247b2a93def40b1208d09ac9607805c0da0fb2fdf972ffeda938a310bd.svg) |
 |

```
lifestyle-1
```  | ![](/assets/themes/placeholders/lifestyle-1-c2c4831947fd434d8e020ca2cb77d3a9c76e3242ba7fa369f289d97c9168bab5.svg) |
 |

```
lifestyle-2
```  | ![](/assets/themes/placeholders/lifestyle-2-38f614bc3d4f678f75b0984e5465ef24f5f041d276ae673d238b8dc3168ee68c.svg) |
 |

```
product-1
```  | ![](/assets/themes/placeholders/product-1-e5ccc159ef45e0fabd6326f70c83b8426a2e02f790da83c6ce3da979d060e62b.svg) |
 |

```
product-2
```  | ![](/assets/themes/placeholders/product-2-0c5a29572a8c2284cb18164c96d264aa172549bf1f55748b5f1e2e41d24e3261.svg) |
 |

```
product-3
```  | ![](/assets/themes/placeholders/product-3-f23dd6ce0e7b02cbbd9b604a8a1a565e63352d67c1ecd210f3b1f0da0ec269f0.svg) |
 |

```
product-4
```  | ![](/assets/themes/placeholders/product-4-abe5903c14e44278d016dc35472de97717137b458507840b3f82df3711c3431d.svg) |
 |

```
product-5
```  | ![](/assets/themes/placeholders/product-5-fba6646226b8cf1bfd50ad17f062485cc9ac3c74d15985f3426db6a49d2094b7.svg) |
 |

```
product-6
```  | ![](/assets/themes/placeholders/product-6-866fc29f1b2a039bbcc45f0e4f5f746807ffe3407011f2306de40668cb0e2fa9.svg) |
