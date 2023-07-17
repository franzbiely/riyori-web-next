/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'url-loader',
        },
      });
  
      return config;
    },
    images: {
      domains: ['ryoriimg.s3.amazonaws.com'],
    },
}

module.exports = nextConfig
