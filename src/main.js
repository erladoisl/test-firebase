// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Uimini from 'uimini/dist/css/uimini.css'

import App from './App'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

Vue.use(
  Vuelidate,
  Uimini
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    var firebaseConfig = {
      apiKey: 'AIzaSyBHvVSPmzUNuh9i4TLwW21a7BsgEi8F7Ws',
      authDomain: 'rakhinas-time-library.firebaseapp.com',
      databaseURL: 'https://rakhinas-time-library.firebaseio.com',
      projectId: 'rakhinas-time-library',
      storageBucket: 'rakhinas-time-library.appspot.com',
      messagingSenderId: '399047844910',
      appId: '1:399047844910:web:4491960a6e8f01f9db6bbf',
      measurementId: 'G-CTK2SLLD86'
    }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('loggedUser', user)
      }
      this.$store.dispatch('loadTasks')
    })
  }
})
