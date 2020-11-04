const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.tsx"],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds'
],
presets: ["@storybook/preset-scss"],
webpackFinal: async (config, { configType }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@themes": path.resolve(__dirname, "../themes/default")
  }
  config.module.rules.push(
  {
    test: /\.md$/,
    use: [
      {
        loader: 'markdown-loader',
      }
    ]
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'static/assets/',
          publicPath: 'static/assets/'
        }
      },
    ],
  },
  {
    test: /\.module.scss|scss$/,
    use: [
      require.resolve('style-loader'), 
      {
        loader: 'css-modules-typescript-loader',
        options: {
          mode: process.env.CI ? 'verify' : 'emit'
        }
      },
      { 
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules: {
            localIdentName: 'c-[hash:base64:5]__[folder]--[local]'
          }
        }
        },
        {
          loader: require.resolve('sass-loader'),
          options: {
          // Prefer `dart-sass`
          implementation: require('sass'),
          sourceMap: false,
          additionalData: `
            @use '@themes/vars' as vars;
            @use '@themes/breakpoints' as bp;
          `,
          sassOptions: {
            outputStyle: 'expanded',
            indentWidth: 4,
          },
        }
      }
    ],
    include: path.resolve(__dirname, '../'),
  }
  );
  config.resolve.extensions.push('.ts', '.tsx', '.md');
  return config;
},
  // Add nextjs preset
  presets: [path.resolve(__dirname, "./next-preset.js")],
};
