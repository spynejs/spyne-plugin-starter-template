import {SpynePlugin, SpyneApp, Channel} from 'spyne';

import {MainView} from './components/main-view';


class SpynePluginStarterTemplate extends SpynePlugin{

    constructor(props={}) {
      props['name'] = "SpynePluginStarterTemplate";
      super(props);
    }

    defaultConfig(){
      return  {
        text: "Hola Mundo"
      }
    }

    updateConfig(){

    }

    onRegistered() {
      const channelName = "CHANNEL_SPYNE_PLUGIN_HELLO_WORLD";
      const {text} = this.props.config;
      const data = {
          text
      }
      SpyneApp.registerChannel(new Channel(channelName, {data}));
    }




    onRender() {
      this.props.mainEl = new MainView().appendToDom(this.props.parentEl);
    }

}

export{SpynePluginStarterTemplate}
