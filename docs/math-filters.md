# Math filters

Math filters allow you to apply mathematical tasks.

Math filters can be linked and, as with any other filters, are applied in order of left to right. In the example below, `minus` is applied first, then `times`, and finally `divided_by`.

```html
You save {{ product.compare_at_price | minus: product.price | times: 100.0 | divided_by: product.compare_at_price }}%
```

## abs

Returns the absolute value of a number.

Input

```html
{{ -17 | abs }}
```

Output

```text
17
```

`abs` will also work on a string if the string only contains a number.

Input

```html
{{ "-19.86" | abs }}
```

Output

```text
19.86
```

## at_most

Limits a number to a maximum value.

Input

```html
{{ 4 | at_most:5 }}
{{ 4 | at_most:3 }}
```

Output

```
4
3
```

## at_least

Limits a number to a minimum value.

Input

```html
{{ 4 | at_least:5 }}
{{ 4 | at_least:3 }}
```

Output

```
5
4
```

## ceil

Rounds an output up to the nearest integer.

Input

```html
{{ 4.6 | ceil }}
{{ 4.3 | ceil }}
```

Output

```html
5
5
```

## divided_by

Divides an output by a number. The output is rounded down to the nearest integer.

Input

```html
<!-- product.price = 200 -->
{{ product.price | divided_by: 10 }}
```

Output

```html
20
```

## floor

Rounds an output down to the nearest integer.

Input

```html
{{ 4.6 | floor }}
{{ 4.3 | floor }}
```

Output

```html
4
4
```

## minus

Subtracts a number from an output.

Input

```html
<!-- product.price = 200 -->
{{ product.price | minus: 15 }}
```

Output

```html
185
```

## plus

Adds a number to an output.

Input

```html
<!-- product.price = 200 -->
{{ product.price | plus: 15 }}
```

Output

```html
215
```

## round

Rounds the output to the nearest integer or specified number of decimals.

Input

```html
{{ 4.6 | round }}
{{ 4.3 | round }}
{{ 4.5612 | round: 2 }}
```

Output

```html
5
4
4.56
```

## times

Multiplies an output by a number.

Input

```html
<!-- product.price = 200 -->
{{ product.price | times: 1.15 }}
```

Output

```html
230
```

## modulo

Divides an output by a number and returns the remainder.

Input

```html
{{ 12 | modulo: 5 }}
```

Output

```html
2
```
