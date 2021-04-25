import * as Vue from 'vue';

const items = [
  {
    name: 'apple',
    price: 133,
    quantity: 13
  },
  {
    name: 'orange',
    price: 34,
    quantity: 6
  },
  {
    name: 'grape',
    price: 198,
    quantity: 6
  }
]

const vm = new Vue({
  el: '#app',
  data: {
    items: items,
  },
  filters: {
    numberWithDelimiter: function (val) {
      if (!val) {
        return '0';
      }
      return val.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    }
  }
});

// vm.$mount(el)
