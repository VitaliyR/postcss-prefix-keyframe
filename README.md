# PostCSS Prefix Keyframe

[PostCSS] plugin for prefixing keyframes.

[PostCSS]: https://github.com/postcss/postcss

```css
@keyframes loader {
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
}

.animation {
  animation: loader 1.2s 500ms infinite ease-in-out both;
}

.animation-2 {
  animation-name: loader;
}
```

```css
@keyframes prefixed-loader {
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
}

.animation {
  animation: prefixed-loader 1.2s 500ms infinite ease-in-out both;
}

.animation-2 {
  animation-name: prefixed-loader;
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-prefix-keyframe
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

Better to put above autoprefixer. Also, be aware, if you are using outdated version of autoprefixer,
prefixed rules, like `-webkit-keyframes` wont be processed. In this case, you just need to
update autoprefixer version.

```diff
module.exports = {
  plugins: [
+   require('postcss-prefix-keyframe')({ prefix: 'prefix-' }}),
    require('autoprefixer')
  ]
}
```

## Options
* `prefix` *String* - appends to the beginning of the at-rule and animation name

[official docs]: https://github.com/postcss/postcss#usage
