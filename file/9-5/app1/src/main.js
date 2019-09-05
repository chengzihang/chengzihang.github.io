// require('./index.css')
import Vue from 'vue'
import app from './app.vue'
require('./index.html')
// box.innerHTML = 'helloseasfs'

new Vue({
	el:'#box',
	components:{
		app
	}
})