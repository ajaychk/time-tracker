<template>
  <div id="app">
    <div id="wrapper">
      <nav class="navbar navbar-default">
        <div class="container">
          <a class="navbar-brand" href="#">
            <i class="glyphicon glyphicon-time"/>
            Vue Time Tracker
          </a>
          <ul class="navbar navbar-nav">
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/time-entries">Time Entries</router-link></li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <div class="col-sm-3">
          <sidebar :time="totalTime"/>
        </div>
        <div class="col-sm-9">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import store from "./store"

export default {
  name: 'App',
  components: {
    'sidebar': Sidebar
  },
  computed: {
    totalTime () {
      return store.state.totalTime
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
