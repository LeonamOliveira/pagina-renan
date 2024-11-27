// next.config.js
module.exports = {
    webpack(config, options) {
      const { isServer } = options;
      
      // Adicionando a regra para processar arquivos de áudio
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,  // Regex para os tipos de arquivos de áudio
        exclude: config.exclude,          // Exclui arquivos que já são ignorados por padrão
        use: [
          {
            loader: require.resolve('url-loader'), // Usar o url-loader para arquivos pequenos
            options: {
              limit: config.inlineImageLimit,      // Define o limite de tamanho em bytes para usar base64
              fallback: require.resolve('file-loader'),  // Para arquivos maiores, usa file-loader
              publicPath: `${config.assetPrefix}/_next/static/audio/`,  // Caminho público para os arquivos
              outputPath: `${isServer ? '../' : ''}static/audio/`,    // Caminho onde os arquivos serão armazenados
              name: '[name]-[hash].[ext]',            // Nome do arquivo gerado com hash
              esModule: config.esModule || false,     // Se deve gerar módulos ES
            },
          },
        ],
      });
  
      return config;
    },
  };
  