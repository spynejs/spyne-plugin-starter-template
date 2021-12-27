import {ViewStream, DomElement} from 'spyne';


export class MainView extends ViewStream {

  constructor(props = {}) {
    props.id='spyne-plugin-hello-world';
    super(props);
  }

  addActionListeners() {
    // return nexted array(s)
    return [
     ["CHANNEL_SPYNE_PLUGIN_HELLO_WORLD.*", "onHelloWorld"]
    ];
  }

  onHelloWorld(e){
    const {text} = e.payload;
    const helloWorldView = new ViewStream({
      tagName: 'h2',
      "style": "color:#1F2933; padding: 2rem; font-family:sans-serif;",
      data: text
    });

    this.appendView(helloWorldView);
  }


  broadcastEvents() {
    // return nexted array(s)
    return [
    ];
  }

  onRendered() {
    this.addChannel("CHANNEL_SPYNE_PLUGIN_HELLO_WORLD");

  }

}
