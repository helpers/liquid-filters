# String filters

String filters are used to manipulate outputs and variables of the [string](/en/themes/liquid/basics/types#strings) type.

## append

Appends characters to a string.

Input

```html
{{ 'sales' | append: '.jpg' }}
```

Output

```html
sales.jpg
```

## camelcase

Converts a string into CamelCase.

Input

```html
{{ 'coming-soon' | camelcase }}
```

Output

```html
ComingSoon
```

## capitalize

Capitalizes the first word in a string

Input

```html
{{ 'capitalize me' | capitalize }}
```

Output

```html
Capitalize me
```

## downcase

Converts a string into lowercase.

Input

```html
{{ 'UPPERCASE' | downcase }}
```

Output

```html
uppercase
```

## escape

Escapes a string.

Input

```html
{{ "<p>test</p>" | escape }}
```

Output

```html
&lt;p&gt;test&lt;/p&gt;
 <!-- Note: a browser will visually display this as <p>test</p> -->
```

## handle/handleize

Formats a string into a [handle](/en/themes/liquid/basics/handle) .

Input

```html
{{ '100% M & Ms!!!' | handleize }}
```

Output

```html
100-m-ms
```

## md5

Converts a string into an MD5 hash.

An example use case for this filter is showing the Gravatar image associated with the poster of a blog comment:

Input

```html
<img src="https://www.gravatar.com/avatar/{{ comment.email | remove: ' ' | strip_newlines | downcase | md5 }}" />
```

Output

```html
<img src="https://www.gravatar.com/avatar/2a95ab7c950db9693c2ceb767784c201" />
```

## sha1

Converts a string into a SHA-1 hash.

Input

```html
{% assign my_secret_string="ShopifyIsAwesome!" | sha1 %}
My encoded string is: {{ my_secret_string }}
```

Output

```html
My encoded string is: c7322e3812d3da7bc621300ca1797517c34f63b6
```

## sha256

Converts a string into a SHA-256 hash.

Input

```html
{% assign my_secret_string="ShopifyIsAwesome!" | sha256 %}
My encoded string is: {{ my_secret_string }}
```

Output

```html
My encoded string is: c29cce758876791f34b8a1543f0ec3f8e886b5271004d473cfe75ac3148463cb
```

## hmac_sha1

Converts a string into a SHA-1 hash using a hash message authentication code (HMAC). Pass the secret key for the message as a parameter to the filter.

Input

```html
{% assign my_secret_string="ShopifyIsAwesome!" | hmac_sha1:"secret_key" %}
My encoded string is: {{ my_secret_string }}
```

Output

```html
My encoded string is: 30ab3459e46e7b209b45dba8378fcbba67297304
```

## hmac_sha256

Converts a string into a SHA-256 hash using a hash message authentication code (HMAC). Pass the secret key for the message as a parameter to the filter.

Input

```html
{% assign my_secret_string="ShopifyIsAwesome!" | hmac_sha256:"secret_key" %}
My encoded string is: {{ my_secret_string }}
```

Output

```html
My encoded string is: 30ab3459e46e7b209b45dba8378fcbba67297304
```

## newline_to_br

Inserts a <br > linebreak HTML tag in front of each line break in a string.

Input

```html
{% capture var %}
One
Two
Three
{% endcapture %}
{{ var | newline_to_br }}
```

Output

```html
One <br>
Two<br>
Three<br>
```

## pluralize

Outputs the singular or plural version of a string based on the value of a number. The first parameter is the singular string and the second parameter is the plural string.

Input

```html
{{ cart.item_count }}
{{ cart.item_count | pluralize: 'item' , 'items' }}
```

Output

```html
3 items
```

## prepend

Prepends characters to a string.

Input

```html
{{ 'sale' | prepend: 'Made a great ' }}
```

Output

```html
Made a great sale
```

## remove

Removes all occurrences of a substring from a string.

Input

```html
{{ "Hello, world. Goodbye, world." | remove: "world" }}
```

Output

```html
Hello, . Goodbye, .
```

## remove_first

Removes only the first occurrence of a substring from a string.

Input

```html
{{ "Hello, world. Goodbye, world." | remove_first: "world" }}
```

Output

```html
Hello, . Goodbye, world.
```

## replace

Replaces all occurrences of a string with a substring.

Input

```html
<!-- product.title = "Awesome Shoes" -->
{{ product.title | replace: 'Awesome' , 'Mega' }}
```

Output

```html
Mega Shoes
```

## replace_first

Replaces the first occurrence of a string with a substring.

Input

```html
<!-- product.title = "Awesome Awesome Shoes" -->
{{ product.title | replace_first: 'Awesome' , 'Mega' }}
```

Output

```html
Mega Awesome Shoes
```

## slice

The `slice` filter returns a substring, starting at the specified index. An optional second parameter can be passed to specify the length of the substring. If no second parameter is given, a substring of one character will be returned.

Input

```html
{{ "hello" | slice: 0 }}
{{ "hello" | slice: 1 }}
{{ "hello" | slice: 1, 3 }}
```

Output

```html
h
e
ell
```

If the passed index is negative, it is counted from the end of the string.

Input

```html
{{ "hello" | slice: -3, 2  }}
```

Output

```html
ll
```

## split

The `split` filter takes on a substring as a parameter. The substring is used as a delimiter to divide a string into an array. You can output different parts of an array using [array filters](/en/themes/liquid/filters/array-filters) .

Input

```html
{% assign words="Hi, how are you today?" | split: ' ' %}

{% for word in words %}
{{ word }}
{% endfor %}
```

Output

```text
Hi,
how
are
you
today?
```

## strip

Strips tabs, spaces, and newlines (all whitespace) from the left and right side of a string.

Input

```html
{{ '   too many spaces      ' | strip }}
```

Output

```text
too many spaces
```

## lstrip

Strips tabs, spaces, and newlines (all whitespace) from the **left** side of a string.

Input

```html
{{ '   too many spaces           ' | lstrip }}
```

Output

```html
<!-- Highlight to see the empty spaces to the right of the string -->
too many spaces
```

## rstrip

Strips tabs, spaces, and newlines (all whitespace) from the **right** side of a string.

Input

```html
{{ '              too many spaces      ' | rstrip }}
```

Output

```html
<!-- Notice the empty spaces to the left of the string -->
              too many spaces
```

## strip_html

Strips all HTML tags from a string.

Input

```html
{{ "<h1>Hello</h1> World" | strip_html }}
```

Output

```html
Hello World
```

## strip_newlines

Removes any line breaks/newlines from a string.

```html
{{ product.description | strip_newlines }}
```

## truncate

Truncates a string down to the number of characters passed as the first parameter. An ellipsis (...) is appended to the truncated string and is included in the character count.

Input

```html
{{ "The cat came back the very next day" | truncate: 13 }}
```

Output

```text
The cat ca...
```

### Custom ellipsis

`truncate` takes an optional second parameter that specifies the sequence of characters to be appended to the truncated string. By default this is an ellipsis (...), but you can specify a different sequence.

The length of the second parameter counts against the number of characters specified by the first parameter. For example, if you want to truncate a string to exactly 10 characters, and use a 3-character ellipsis, use **13** for the first parameter of `truncate`, since the ellipsis counts as 3 characters.

Input

```html
{{ "ABCDEFGHIJKLMNOPQRSTUVWXYZ" | truncate: 18, ", and so on" }}
```

Output

```text
ABCDEFG, and so on
```

### No ellipsis

You can truncate to the exact number of characters specified by the first parameter and show no trailing characters by passing a blank string as the second parameter:

Input

```html
{{ "I'm a little teapot, short and stout." | truncate: 15, "" }}
```

Output

```text
I'm a little te
```

## truncatewords

Truncates a string down to the number of words passed as the first parameter. An ellipsis (...) is appended to the truncated string.

Input

```html
{{ "The cat came back the very next day" | truncatewords: 4 }}
```

Output

```text
The cat came back...
```

### Custom ellipsis

`truncatewords` takes an optional second parameter that specifies the sequence of characters to be appended to the truncated string. By default this is an ellipsis (...), but you can specify a different sequence.

Input

```html
{{ "The cat came back the very next day" | truncatewords: 4, "--" }}
```

Output

```text
The cat came back--
```

### No ellipsis

You can avoid showing trailing characters by passing a blank string as the second parameter:

Input

```html
{{ "The cat came back the very next day" | truncatewords: 4, "" }}
```

Output

```text
The cat came back
```

## upcase

Converts a string into uppercase.

Input

```html
{{ 'i want this to be uppercase' | upcase }}
```

Output

```html
I WANT THIS TO BE UPPERCASE
```

## url_encode

Converts any URL-unsafe characters in a string into percent-encoded characters.

Input

```html
{{ "john@liquid.com" | url_encode }}
```

Output

```html
john%40liquid.com
```

Note that `url_encode` will turn a space into a `+` sign instead of a percent-encoded character.

Input

```html
{{ "Tetsuro Takara" | url_encode }}
```

Output

```html
Tetsuro+Takara
```

## url_escape

Identifies all characters in a string that are not allowed in URLS, and replaces the characters with their escaped variants.

Input

```html
{{ "<hello> & <shopify>" | url_escape }}
```

Output

```html
%3Chello%3E%20&%20%3Cshopify%3E
```

## url_param_escape

Replaces all characters in a string that are not allowed in URLs with their escaped variants, including the ampersand (&).

Input

```html
{{ "<hello> & <shopify>" | url_param_escape }}
```

Output

```html
%3Chello%3E%20%26%20%3Cshopify%3E
```

## Reversing strings

`reverse` cannot be used directly on a string, but you can split a string into an array, reverse the array, and rejoin it by chaining together other filters:

Input

```html
{{ "Ground control to Major Tom." | split: "" | reverse | join: "" }}
```

Output

```html
.moT rojaM ot lortnoc dnuorG
```
