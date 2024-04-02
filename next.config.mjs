/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Add a rule for audio files using the file-loader
      config.module.rules.push({
        test: /\.(mp3|wav|ogg|flac)$/, // Supported audio formats
        use: 'file-loader',
      })
    }

    return config
  },
}

export default nextConfig
