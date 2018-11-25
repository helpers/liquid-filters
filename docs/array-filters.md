# Array filters

Array filters change the output of arrays.

## join

Joins the elements of an array with the character passed as the parameter. The result is a single string.

Input

```html
{{ product.tags | join: ' , ' }}
```

Output

```text
tag1, tag2, tag3
```

## first

Returns the first element of an array.

Input

```html
<!-- product.tags = "sale", "mens", "womens", "awesome" -->
{{ product.tags | first }}
```

Output

```text
sale
```

You can use `first` with dot notation when you need to use the filter inside a [tag](/en/themes/liquid/tags) .

```html
{% if product.tags.first=="sale" %}
  This product is on sale!
{% endif %}
```

## last

Returns the last element of an array.

Input

```html
<!-- product.tags = "sale", "mens", "womens", "awesome" -->
{{ product.tags | last }}
```

Output

```text
awesome
```

You can use `last` with dot notation when you need to use the filter inside a [tag](/en/themes/liquid/tags) .

```html
{% if product.tags.last=="sale" %}
  This product is on sale!
{% endif %}
```

Using `last` on a string returns the last character in the string.

Input

```html
<!-- product.title = "Awesome Shoes" -->
{{ product.title | last }}
```

Output

```text
s
```

## concat

Concatenates (combines) an array with another array. The resulting array contains all the elements of the original arrays. `concat` will not remove duplicate entries from the concatenated array unless you also use the [`uniq`](#uniq) filter.

Input

```html
{% assign fruits="apples, oranges, peaches, tomatoes" | split: ", " %}
{% assign vegetables="broccoli, carrots, lettuce, tomatoes" | split: ", " %}
{% assign plants=fruits | concat: vegetables %}

{{ plants | join: ", " }}
```

Output

```text
apples, oranges, peaches, tomatoes, broccoli, carrots, lettuce, tomatoes
```

You can string together multiple `concat` filters to combine more than two arrays:

Input

```html
{% assign fruits="apples, oranges, peaches" | split: ", " %}
{% assign vegetables="broccoli, carrots, lettuce" | split: ", " %}
{% assign animals="dogs, cats, birds" | split: ", " %}

{% assign things=fruits | concat:vegetables | concat:animals %}

{{ things | join: ", " }}
```

Output

```text
apples, oranges, peaches, broccoli, carrots, lettuce, dogs, cats, birds
```

## index

Returns the item at the specified index location in an array. Note that array numbering starts from zero, so the first item in an array is referenced with `[0]`.

Input

```html
<!-- product.tags = "sale", "mens", "womens", "awesome" -->
{{ product.tags[2] }}
```

Output

```text
womens
```

## map

Accepts an array element's attribute as a parameter and creates an array out of each array element's value.

Input

```html
<!-- collection.title = "Spring", "Summer", "Fall", "Winter" -->
{% assign collection_titles=collections | map: 'title' %}
{{ collection_titles }}
```

Output

```text
SpringSummerFallWinter
```

## reverse

Reverses the order of the items in an array.

Input

```html
{% assign my_array="apples, oranges, peaches, plums" | split: ", " %}

{{ my_array | reverse | join: ", " }}
```

Output

```text
plums, peaches, oranges, apples
```

## size

Returns the size of a string (the number of characters) or an array (the number of elements).

Input

```html
{{ 'The quick brown fox jumps over a lazy dog.' | size }}
```

Output

```text
42
```

You can use `size` with dot notation when you need to use the filter inside a [tag](/en/themes/liquid/tags) .

```html
{% if collections.frontpage.products.size > 10 %}
  There are more than 10 products in this collection!
{% endif %}
```

## sort

Sorts the elements of an array by a given attribute of an element in the array.

```html
{% assign products=collection.products | sort: 'price' %}
{% for product in products %}
  <h4>{{ product.title }}</h4>
{% endfor %}
```

The order of the sorted array is case-sensitive.

Input

```html
<!-- products = "a", "b", "A", "B" -->
{% assign products=collection.products | sort: 'title' %}
{% for product in products %}
   {{ product.title }}
{% endfor %}
```

Output

```text
A B a b
```

## uniq

Removes any duplicate instances of elements in an array.

Input

```html
{% assign fruits="orange apple banana apple orange" %}
{{ fruits | split: ' ' | uniq | join: ' ' }}
```

Output

```text
orange apple banana
```
