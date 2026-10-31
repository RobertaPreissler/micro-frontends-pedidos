
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'cardapio',
        filename: 'static/chunks/remoteEntry.js',

        exposes: {
          './Menu': './src/components/Menu.jsx',
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
