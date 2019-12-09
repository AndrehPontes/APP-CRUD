
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('modal', {
  template: '#modal-template'
})

var app = new Vue({
  el: '#vue-wrapper',

  data: {
    items: [],
    hasError: true,
    hasDeleted: true,
    hasAgeError: true,
    showModal: false,
    e_name: '',
    e_cpf:'',
    e_data:'',
    e_email:'',
    e_fone:'',
    e_age: '',
    e_id: '',
    e_profession: '',
    e_cep:'',
    e_endereco:'',
    e_cidade:'',
    e_estado:'',
    newItem: { 'name': '','cpf': '','data': '','email': '','fone': '','age': '','profession': '','cep': '','endereco': '','cidade': '','estado': '' },
   },
  mounted: function mounted() {
    this.getVueItems();
  },
  methods: {
    getVueItems: function getVueItems() {
      var _this = this;

      axios.get('/vueitems').then(function (response) {
        _this.items = response.data;
      });
    },
    setVal(val_id, val_name, val_cpf, val_data, val_email, val_fone, val_age, val_profession, val_cep, val_endereco, val_cidade, val_estado) {
        this.e_id = val_id;
        this.e_name = val_name;
        this.e_cpf = val_cpf;
        this.e_data = val_data;
        this.e_email = val_email;
        this.e_fone = val_fone;
        this.e_age = val_age;
        this.e_profession = val_profession;
        this.e_cep = val_cep;
        this.e_endereco = val_endereco;
        this.e_cidade = val_cidade;
        this.e_estado = val_estado;
    },

    createItem: function createItem() {
      var _this = this;
      var input = this.newItem;
      
      if (input['name'] == '' || input['cpf'] == '' || input['data'] == '' || input['email'] == '' || input['fone'] == '' || input['age'] == '' || input['profession'] == '' || input['cep'] == '' || input['endereco'] == '' || input['cidade'] == '' || input['estado'] == '' ) {
        this.hasError = false;
      } else {
        this.hasError = true;
        axios.post('/vueitems', input).then(function (response) {
          _this.newItem = { 'name': '', 'cpf': '', 'data': '', 'email': '', 'fone': '', 'age': '', 'profession': '', 'cep': '', 'endereco': '','cidade': '','estado': '', };
          _this.getVueItems();
        });
        this.hasDeleted = true;
      }
    },
    editItem: function(){

    /*   var i_val_1 = document.getElementById('e_id');
         var n_val_1 = document.getElementById('e_name');
         var c_val_1= document.getElementById('e_cpf');
         var a_val_1 = document.getElementById('e_age');
         var p_val_1 = document.getElementById('e_profession');*/

         var i_val_1 = document.getElementById('e_id');
         var n_val_1 = document.getElementById('e_name');
         var c_val_1 = document.getElementById('e_cpf');
         var d_val_1 = document.getElementById('e_data');
         var m_val_1 = document.getElementById('e_email');
         var f_val_1 = document.getElementById('e_fone')
         var a_val_1 = document.getElementById('e_age');
         var p_val_1 = document.getElementById('e_profession');
         var ce_val_1 = document.getElementById('e_cep');
         var en_val_1 = document.getElementById('e_endereco');
         var ci_val_1 = document.getElementById('e_cidade');
         var es_val_1 = document.getElementById('e_estado');

         /* axios.post('/edititems/' + i_val_1.value, {val_1: n_val_1.value, val_2: a_val_1.value,val_3: p_val_1.value })*/
          axios.post('/edititems/' + i_val_1.value, {val_1: n_val_1.value, val_4: c_val_1.value, val_5: d_val_1.value, val_6: m_val_1.value, val_7: f_val_1.value, val_2: a_val_1.value,val_3: p_val_1.value, val_8: ce_val_1.value, val_9: en_val_1.value, val_10: ci_val_1.value, val_11: es_val_1.value  })
          
          .then(response => {
              this.getVueItems();
              this.showModal=false
            });
          this.hasDeleted = true;
        
  },
    deleteItem: function deleteItem(item) {
      var _this = this;
      axios.post('/vueitems/' + item.id).then(function (response) {
        _this.getVueItems();
        _this.hasError = true, 
        _this.hasDeleted = false
        
      });
    }
  }
});