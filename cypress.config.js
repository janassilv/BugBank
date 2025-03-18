const { defineConfig } = require("cypress");
const webpack = require('@cypress/webpack-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configuração do pre-processador Cucumber
      addCucumberPreprocessorPlugin(on, config);

      // Configuração do webpack para processar arquivos .feature
      const options = {
        webpackOptions: {
          module: {
            rules: [
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: 'gherkin-loader', // Loader específico para arquivos .feature
                  },
                ],
              },
            ],
          },
        },
      };

      on('file:preprocessor', webpack(options));

      return config;
    },
    specPattern: '**/*.feature',
    excludeSpecPattern: ['*.js', '*.md'],
  },
});
