<template>
  <div class="hello">
    <h1>{{ msg }}
      <button @click="obtenirPelis" class="btn btn-primary">Totes</button>
      <button @click="obtenirPelis('disp')" class="btn btn-success ml-2">Disponibles</button>
      <button @click="obtenirPelis('noDisp')" class="btn btn-danger ml-2">No disponibles</button>
    </h1>
    <div class="bg-dark rounded-pill m-3 pl-5 pr-5">
    <nav class="navbar navbar-expand-lg navbar-dark m-0">
          <span class="navbar-brand">Buscador</span>
          <input v-on:keyup="cercaPelis" id="cerca" class="form-control mr-sm-2" type="text" placeholder="Titol" aria-label="Busca">
          <button @click.prevent="cercaPelis" class="btn btn-outline-warning my-2 my-sm-0" type="submit">Busca</button>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-dark m-0">
      <div cass="row" style="margin: auto">
        <input v-on:click="cercaPelis" id="dispcheck" type="checkbox" checked="true"><label for="disponbles" class="text-white mr-4">Disponibles</label>
        <input v-on:click="cercaPelis" id="nodispcheck" type="checkbox" checked="true"><label for="nodisponbles" class="text-white">No disponibles</label>
      </div>
    </nav>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div v-for="(item, index) in pelis" :key="index" class="col-xs-12 col-sm-6 col-md-4 mt-4">
          <div class="jumbotron border border-secondary h-100 pb-0 pt-4">
            <h6 class="display-6 text-primary"># {{item.id}}</h6>
            <span v-if="item.disponibilitat" class="badge badge-success">Disponible</span>
            <span v-else class="badge badge-danger">No disponible</span>
            <h3 class="display-5 text-dark">{{item.titol}}</h3>
            <hr>
            <p class="text-muted">{{item.descripcio}}</p>
          </div>
        </div>
        <div id="alert" class="container alert alert-danger mt-3 invisible">No hi ha pelis disponibles</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
import {mapMutations} from "vuex"
import {mapActions} from "vuex"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapState('pelis', ['pelis'])
  },
  methods: {
    ...mapMutations(['omplirPelis']),
    ...mapActions('pelis', ['obtenirPelis', 'cercaPelis']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
