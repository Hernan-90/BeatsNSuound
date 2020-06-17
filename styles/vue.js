Vue.component('saludo',{
  template: '<h1> {{titulo}} </h1>',
  data(){
    return {titulo: 'Bienvenidos! a BNS'}
  }
})

const hola = new Vue({
  el: '#app2',
  data: {
    titulo: 'Beats N Sound'
  },
  method: {
    
  }
})
