<template>
  <div class="hello">
    <h1>{{$store.getters.getName}}</h1>
    <b-form-input v-model="text" placeholder="Enter your name" v-on:change="setName() "></b-form-input>
  </div>
</template>

<script>

 export default {
    data: function() {
    return {
     text :''
      };
    },
     
    methods:{
      setName(){
        this.$store.commit('setName',this.text)
        console.log(this.text)
      }
    },
   
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
a {
  color: #42b983;
}
</style>
