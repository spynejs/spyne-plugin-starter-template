const {expect, assert} = require('chai');
const {SpyneApp, SpyneAppProperties} = require('spyne');
const {SpynePluginStarterTemplate} = require('../app/spyne-plugin-starter-template');

describe('spyne plugin test', () => {
  SpyneApp.init({debug:true})

  const pluginConfig = {
    text: "Ciao Mundo"
  }

  const spynePluginHelloWorld = new SpynePluginStarterTemplate(pluginConfig);

  it('spyne plugin initialize test', () => {
    expect(spynePluginHelloWorld).to.be.a('object');
  });

  it('should render the correct text', ()=>{
    const h2 = document.querySelector('#spyne-plugin-hello-world h2');
    expect(h2.innerHTML).to.equal(pluginConfig.text);
  })

  it('plugin config should match', ()=>{
    const renderedConfig = SpyneAppProperties.getPluginConfigByPluginName('SpynePluginStarterTemplate');
    expect(renderedConfig.name).to.equal("SpynePluginStarterTemplate");
    expect(renderedConfig.text).to.equal("Ciao Mundo");
  })

});
