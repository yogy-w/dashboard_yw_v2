const silenceDeprecations = [
  "import",
  "mixed-decls",
  "color-functions",
  "global-builtin",
  "legacy-js-api",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    // --- IZIN GUDANG BACKEND ---
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/uploads/**',
      },
    ],
    // ---------------------------
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      type: "asset",
    });

    config.module.rules.forEach(rule => {
      if (Array.isArray(rule.oneOf)) {
        rule.oneOf.forEach(one => {
          if (
            one.use &&
            one.use.find &&
            one.use.find(u => u.loader && u.loader.includes("sass-loader"))
          ) {
            one.use.forEach(u => {
              if (u.loader && u.loader.includes("sass-loader")) {
                u.options = {
                  ...u.options,
                  sassOptions: {
                    ...u.options?.sassOptions,
                    silenceDeprecations,
                  },
                };
              }
            });
          }
        });
      }
    });

    return config;
  },
};

module.exports = nextConfig;