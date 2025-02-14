const esbuild = require('esbuild')

esbuild.build({
  entryPoints: ['app/javascript/application.js'],
  bundle: true,
  outdir: 'app/assets/builds',
  publicPath: '/assets',
  plugins: [],
  external: ['@hotwired/turbo-rails', '@hotwired/stimulus'], // Add this line
}).catch(() => process.exit(1))
