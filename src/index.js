const css =  require('./scss/main.scss');

const {SpyneApp} = require('spyne');
import {SpynePluginStarterTemplate} from './app/spyne-plugin-starter-template';

// initialize spyne app
SpyneApp.init({debug:true});

// create instance of plugin and add config
const starterPluginConfig = {
  text: "Hello World"
}
new SpynePluginStarterTemplate(starterPluginConfig);