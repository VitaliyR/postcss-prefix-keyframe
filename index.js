const parseAnimationShorthand = require('./lib/animationShorthand');

const DEFAULTS = {
  prefix: ''
};

module.exports = (opts = {}) => {
  const options = Object.assign({}, DEFAULTS, opts);

  return {
    postcssPlugin: 'postcss-prefix-keyframe',

    AtRule: {
      keyframes: (atRule) => {
        if (!atRule.params.startsWith(options.prefix)) {
          atRule.params = `${options.prefix}${atRule.params}`;
        }
      }
    },

    Declaration: {
      ['animation-name']: (decl) => {
        if (!decl.value.startsWith(options.prefix)) {
          decl.value = `${options.prefix}${decl.value}`;
        }
      },

      animation: (decl, { result }) => {
        const parsed = parseAnimationShorthand(decl.value);
        if (parsed.name) {
          if (!parsed.name.startsWith(options.prefix)) {
            decl.value = decl.value.replace(parsed.name, `${options.prefix}${parsed.name}`);
          }
        } else {
          decl.warn(result, `Can't get animation name from shorthand property`);
        }
      }
    }
  }
}

module.exports.postcss = true
