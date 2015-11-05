var md = new Vue({
  el: '#editor',
  data: {
    input: '# Hello [Vue.js](https://github.com/vuejs/vue)'
  },
  filters: {
    marked: marked
  }
});