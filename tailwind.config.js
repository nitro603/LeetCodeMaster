module.exports = {
  mode: 'jit',
   // These paths are just examples, customize them to match your project structure
   purge: [
     './src/**/*.{js,jsx,ts,tsx}',
   ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {},
  corePlugins: {
    preflight: true,
  },
};
