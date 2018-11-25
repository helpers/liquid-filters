# Color filters

Color filters change or extract properties from CSS color strings. These filters are commonly used with color theme settings.

## color_to_rgb

Converts a CSS color string to CSS `rgb()` format.

Input

```html
{{ '#7ab55c' | color_to_rgb }}
```

Output

```text
rgb(122, 181, 92)
```

If the input color has an alpha component, then the output will be in CSS `rgba()` format.

```html
{{ 'hsla(100, 38%, 54%, 0.5)' | color_to_rgb }}
```

Output

```text
rgba(122, 181, 92, 0.5)
```

## color_to_hsl

Converts a CSS color string to CSS `hsl()` format.

Input

```html
{{ '#7ab55c' | color_to_hsl }}
```

Output

```text
hsl(100, 38%, 54%)
```

If the input color has an alpha component, then the output will be in CSS `rgba()` format.

```html
{{ 'rgba(122, 181, 92, 0.5)' | color_to_hsl }}
```

Output

```text
hsla(100, 38%, 54%, 0.5)
```

## color_to_hex

Converts a CSS color string to hex6 format.

Input

```html
{{ 'rgb(122, 181, 92)' | color_to_hex }}
```

Output

```text
#7ab55c
```

Hex output is always in hex6 format. If there is an alpha channel in the input color, it will not appear in the output.

```html
{{ 'rgba(122, 181, 92, 0.5)' | color_to_hex }}
```

Output

```text
#7ab55c
```

## color_extract

Extracts a component from the color. Valid components are alpha, red, green, blue, hue, saturation and lightness.

Input

```html
{{ '#7ab55c' | color_extract: 'red' }}
```

Output

```text
122
```

## color_brightness

Calculates the perceived brightness of the given color. Uses [W3C recommendations for calculating perceived brightness](https://www.w3.org/TR/AERT#color-contrast) , for the purpose of ensuring adequate contrast.

Input

```html
{{ '#7ab55c' | color_brightness }}
```

Output

```text
153.21
```

## color_modify

Modifies the given component of a color.

* Red, green and blue values should be a number between 0 and 255
* Alpha should be a decimal number between 0 and 1
* Hue should be between 0 and 360 degrees
* Saturation and lightness should be a value between 0 and 100 percent.

Input

```html
{{ '#7ab55c' | color_modify: 'red', 255 }}
```

Output

```text
#ffb55c
```

The filter will return a color type that includes the modified format — for example, if you modify the alpha channel, the filter will return the color in `rgba()` format, even if your input color was in hex format.

Input

```html
{{ '#7ab55c' | color_modify: 'alpha', 0.85 }}
```

Output

```text
rgba(122, 181, 92, 0.85)
```

## color_lighten

Lightens the input color. Takes a value between 0 and 100 percent.

Input

```html
{{ '#7ab55c' | color_lighten: 30 }}
```

Output

```text
#d0e5c5
```

## color_darken

Darkens the input color. Takes a value between 0 and 100 percent.

Input

```html
{{ '#7ab55c' | color_darken: 30 }}
```

Output

```text
#355325
```

## color_saturate

Saturates the input color. Takes a value between 0 and 100 percent.

Input

```html
{{ '#7ab55c' | color_saturate: 30 }}
```

Output

```text
#6ed938
```

## color_desaturate

Desaturates the input color. Takes a value between 0 and 100 percent.

Input

```html
{{ '#7ab55c' | color_desaturate: 30 }}
```

Output

```text
#869180
```

## color_mix

Blends together two colors. Blend factor should be a value value between 0 and 100 percent.

Input

```html
{{ '#7ab55c' | color_mix: '#ffc0cb', 50 }}
```

Output

```text
#bdbb94
```

If one input has an alpha component, but the other does not, an alpha component of 1 will be assumed for the input without an alpha component.

Input

```html
{{ 'rgba(122, 181, 92, 0.75)' | color_mix: '#ffc0cb', 50 }}
```

Output

```text
rgba(189, 187, 148, 0.875)
```

## color_contrast

Calculates the contrast ratio between two colors. Returns the numerator part of the ratio, which has a denominator of 1. For example, for a contrast ratio of 3.5:1, the filter returns 3.5.

With regards to accessibility, [WCAG 2.0 level AA](https://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast-contrast) requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. [Level AAA](https://www.w3.org/WAI/WCAG20/quickref/#qr-visual-audio-contrast7) requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text.

The order in which you specify the colors does not matter. The filter will automatically detect the lighter and darker colors.

Input

```html
{{ '#495859' | color_contrast: '#fffffb' }}
```

Output

```text
7.4
```

## color_difference

Calculates the [color difference](https://en.wikipedia.org/wiki/Color_difference) or distance between two colors. With regards to accessibility, the W3C [suggests](https://www.w3.org/WAI/ER/WD-AERT/#color-contrast) that the color difference should be greater than 500.

Input

```html
{{ '#ff0000' | color_difference: '#abcdef' }}
```

Output

```text
528
```

## brightness_difference

Calculates the perceived brightness difference between two colors. With regards to accessibility, the W3C [suggests](https://www.w3.org/WAI/ER/WD-AERT/#color-contrast) that the brightness difference should be greater than 125.

Input

```html
{{ '#fff00f' | brightness_difference: '#0b72ab' }}
```

Output

```text
129
```
