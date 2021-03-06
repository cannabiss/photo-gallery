module.exports = {

  /**
   * Overview of the side and all
   * the necessary components for it
   */
  src: 'src',
  build_dir: 'build',
  compile_dir: 'dist',
  vendor_dir: 'vendor',

  /**
   * build files js
   */
  build_files_js: {
    "index": './js/app',
    "styles": './js/styles'
  },

  /**
   * settings for outpout directory
   */
  css_file: 'styles/styles.css',
  js_file: 'js/bundle.js',

  /**
   * Mode of the system:
   * development - Working in development mode
   * production - Work in combat mode
   */
  node_env: 'production',
  node_modules: 'node_modules',
  bower_components: 'vendor'
};

