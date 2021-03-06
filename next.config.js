const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });  // 빌드 메모리 분석
  
  module.exports = withBundleAnalyzer({
    compress: true,
    images: {
      domains: ["lh3.googleusercontent.com","localhost", "shopping-back-s3.s3.ap-northeast-2.amazonaws.com","lookapi.cf","github.com"]
    },
    webpack(config, { webpack }) {
      const prod = process.env.NODE_ENV === 'production';
      
      return {
        ...config,
        mode: prod ? 'production' : 'development',
        // devtool: prod && 'hidden-source-map' : 'eval',
        plugins: [...config.plugins, ],
        
      };
    },
  },);

 
