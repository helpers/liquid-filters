# Font filters

Font filters are called on [`font` objects](/en/themes/liquid/objects/font) . You can use font filters to load fonts or to obtain font variants.

See [Shopify's font library](/en/themes/development/fonts/library) for a list of all fonts and their variants.

## font_modify

`font_modify` takes two arguments. The first indicates which property should be modified and the second is the modification to be made.

While you can access every variant of the chosen font's family by using [`font.variants`](/en/themes/liquid/objects/font#font-variants) , you can more easily access specific styles and weights by using the `font_modify` filter.

Example

```html
{% assign bold_italic=settings.body_font | font_modify: 'weight' ,'bold' | font_modify: 'style' ,'italic' %}
```

The following properties and modifications can be used:

| Property | Modification | Behavior |
Behavior | | --- | --- | --- | --- |
| `style` | `normal` | Returns the normal variant of the same weight (if it exists). |
| `italic` | Returns the italic variant of the same weight (if it exists). |
| `oblique` | Has the same behavior as `italic`. None of the font families provided by Shopify have both italic and oblique styles. |
| `weight` | `100` → `900` | Returns a variant of the same style with the given weight (if it exists). |
| `normal` | Has the same behavior as `400`. |
| `bold` | Has the same behavior as `700`. |
| `+100` → `+900` | Returns an incrementally bolder font of the same style (if it exists).
For example, if `font` has a weight of `400`, then `font | font_modify "weight", "+100"` returns the variant with a weight of `500` for the same style. |
| `-100` → `-900` | Returns an incrementally lighter font of the same style (if it exists).
For example, if `font` has a weight of `400`, then `font | font_modify "weight", "-100"` returns the variant with a weight of `300` for the same style. |
| `lighter` | Returns a lighter variant of the same style by applying the rules used by the [CSS `font-weight`property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Meaning_of_relative_weights) and browser [fallback weights](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Fallback_weights) (if it exists). |
| `bolder` | Returns a bolder variant of the same style by applying the rules used by the [CSS `font-weight`property](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Meaning_of_relative_weights) and browser [fallback weights](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight#Fallback_weights) (if it exists). |

### Handling font variants

If the `font_modify` filter tries to create a font variant that doesn't exist, then it returns `nil`. The following example shows the output when no bolder variant of settings.body_font exists:

Input

```html
{% assign bolder_font=settings.body_font | font_modify: 'weight' ,'bolder' %}
h2 {
  font-weight: {{ bolder_font.weight }};
}
```

Output

```css
h2 {
  font-weight: ;
}
```

To prevent this from happening, you can either check the value of `bolder_font` with a [control flow tag](/en/themes/liquid/tags/control-flow-tags#if) , or assign a fallback value with the [`default` filter](/en/themes/liquid/filters/additional-filters#default) :

Example

```html
{% assign bolder_font=settings.body_font | font_modify: 'weight' ,'bolder' %}
{% if bolder_font %}
h2 {
  font-weight: {{ bolder_font.weight }};
}
{% endif %}
```

## font_face

Returns a CSS [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/%40font-face) declaration to load the chosen font.

Input

```html
<style>
  {{ settings.heading_font | font_face }}
</style>
```

Output

```html
<style>
  @font-face {
    font-family: "Neue Haas Unica";
    font-weight: 400;
    font-style: normal;
    src: url("https://fonts.shopifycdn.com/neue_haas_unica/neuehaasunica_n4.8a2375506d3dfc7b1867f78ca489e62638136be6.woff2?hmac=d5feff0f2e6b37fedb3ec099688181827df4a97f98d2336515503215e8d1ff55&host=c2hvcDEubXlzaG9waWZ5Lmlv") format("woff2"),
         url("https://fonts.shopifycdn.com/neue_haas_unica/neuehaasunica_n4.06cdfe33b4db0659278e9b5837a3e8bc0a9d4025.woff?hmac=d5feff0f2e6b37fedb3ec099688181827df4a97f98d2336515503215e8d1ff55&host=c2hvcDEubXlzaG9waWZ5Lmlv") format("woff");
  }
</style>
```

### Additional properties

The `font_face` filter takes an optional `font_display` argument to customize the [`font-display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) of the `@font-face` declaration.

Input

```html
<style>
  {{ settings.heading_font | font_face: font_display: 'swap' }}
</style>
```

Output

```html
<style>
  @font-face {
    font-family: "Neue Haas Unica";
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url("https://fonts.shopifycdn.com/neue_haas_unica/neuehaasunica_n4.8a2375506d3dfc7b1867f78ca489e62638136be6.woff2?hmac=d5feff0f2e6b37fedb3ec099688181827df4a97f98d2336515503215e8d1ff55&host=c2hvcDEubXlzaG9waWZ5Lmlv") format("woff2"),
         url("https://fonts.shopifycdn.com/neue_haas_unica/neuehaasunica_n4.06cdfe33b4db0659278e9b5837a3e8bc0a9d4025.woff?hmac=d5feff0f2e6b37fedb3ec099688181827df4a97f98d2336515503215e8d1ff55&host=c2hvcDEubXlzaG9waWZ5Lmlv") format("woff");
  }
</style>
```

## font_url

Returns a CDN URL for the chosen font.

Input

```html
{{ settings.heading_font | font_url }}
```

Output

```text
https://fonts.shopifycdn.com/neue_haas_unica/neuehaasunica_n4.8a2375506d3dfc7b1867f78ca489e62638136be6.woff2?hmac=d5feff0f2e6b37fedb3ec099688181827df4a97f98d2336515503215e8d1ff55&host=c2hvcDEubXlzaG9waWZ5Lmlv
```

By default, `font_url` returns the `woff2` version, but it can also be called with an additional parameter to specify the format. Both `woff` and `woff2` are supported.

```html
{{ settings.heading_font | font_url: 'woff' }}
```
