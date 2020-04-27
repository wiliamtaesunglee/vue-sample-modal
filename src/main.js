import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.optin = {};

window.optin.startPopup = () => {

  const idApp = 'optInApp';

  const AppElement = document.createElement('DIV');
  AppElement.setAttribute('id', idApp);
  document.querySelector('body').appendChild(AppElement);
  // ReactDOM.render((<App />), document.getElementById(idApp));
  new Vue({
    render: h => h(App),
  }).$mount('#optInApp')
  
};

