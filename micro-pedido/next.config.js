
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'pedido',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Pedido': './src/components/Pedido.jsx',
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
