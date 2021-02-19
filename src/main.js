import Vue from 'vue'
import App from './App.vue'
// import HipertrofyWeekFormInline from './components/HipertrophtyWeekFormInline.vue'

Vue.config.productionTip = false

window.optin = {};

window.optin.startPopup = () => {
  const idApp = 'optInApp';

  const AppElement = document.createElement('div');
  AppElement.setAttribute('id', idApp);
  document.querySelector('body').appendChild(AppElement);

  new Vue({
    render: h => h(App),
  }).$mount('#optInApp')
};

// window.optin.startInline = () => {
//   const idApp = 'optin';

//   const AppElement = document.createElement('div');
//   AppElement.setAttribute('id', idApp);
//   document.querySelectorAll('#optin').forEach( elem =>
//     elem.appendChild(AppElement)
//   )

//   new Vue({
//     render: h => h(HipertrofyWeekFormInline),
//   }).$mount('#optin')
// };
