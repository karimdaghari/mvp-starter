module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ["./pages/*.tsx"],
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [],
  corePlugins: {
    container: false
  }
};
