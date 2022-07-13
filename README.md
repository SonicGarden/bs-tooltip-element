# &lt;bs-tooltip&gt; element

## Installation

```
$ npm install @sonicgarden/bs-tooltip-element
```

## Usage

```js
import '@sonicgarden/bs-tooltip-element'
```

### Default

```html
<bs-tooltip content="Default tooltip">
  <button type="button">Tooltip</button>
</bs-tooltip>
```

### Manual

```html
<bs-tooltip content="Default tooltip" manual show>
  <button type="button">Tooltip</button>
</bs-tooltip>
```

### Disabled

```html
<bs-tooltip content="Default tooltip" disabled>
  <button type="button">Tooltip</button>
</bs-tooltip>
```

### HTML

```html
<bs-tooltip>
  <button type="button">Tooltip</button>
  <template>
    This is a <strong>tooltip.</strong><br>
    This is a <strong>tooltip.</strong>
  </template>
</bs-tooltip>
```

### Placement

```html
<bs-tooltip content="Bottom tooltip" placement="bottom">
  <button type="button">Tooltip</button>
</bs-tooltip>
```

## Browser support

Browsers without native [custom element support][support] require a [polyfill][].

- Chrome
- Firefox
- Safari
- Microsoft Edge

[support]: https://caniuse.com/#feat=custom-elementsv1
[polyfill]: https://github.com/webcomponents/custom-elements

## Development

```
pnpm i
pnpm dev
```

## License

Distributed under the MIT license. See LICENSE for details.
