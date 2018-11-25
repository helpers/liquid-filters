# Money filters

Money filters format prices based on the **Currency Formatting** found in [General settings](//www.shopify.com/admin/settings/general) .
![](/assets/themes/money_format_settings-ca355c0a6c82571aa1fbcb9e4bbc49ab0cbe276b6bbe29bfe6b48615b0dd7785.jpg)

## money

Formats the price based on the shop's **HTML without currency** setting.

Input

```html
{{ 145 | money }}
```

Output

```html
<!-- if "HTML without currency" is ${{ amount }} -->
$1.45
<!-- if "HTML without currency" is €{{ amount_no_decimals }} -->
€1
```

## money_with_currency

Formats the price based on the shop's **HTML with currency** setting.

Input

```html
{{ 145 | money_with_currency }}
```

Output

```html
<!-- if "HTML with currency" is ${{ amount }} CAD -->
$1.45 CAD
```

## money_without_trailing_zeros

Formats the price based on the shop's **HTML with currency** setting and excludes the decimal point and trailing zeros.

Input

```html
<!-- if "HTML with currency" is ${{ amount }} CAD -->
{{ 2000 | money_without_trailing_zeros }}
```

Output

```html
$20
```

**Only trailing zeros are removed, not other digits**:

Input

```html
<!-- if "HTML with currency" is ${{ amount }} CAD -->
{{ 145 | money_without_trailing_zeros }}
```

Output

```html
$1.45
```

## money_without_currency

Formats the price using a decimal.

Input

```html
{{ 145 | money_without_currency }}
```

Output

```html
1.45
```
