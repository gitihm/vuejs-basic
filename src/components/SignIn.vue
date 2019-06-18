<template>
  <div class=" container setCenter">
    <b-card title="SignIn" style="max-width: 20rem;"  >
        <b-form-input v-model="email" placeholder="Enter your username" v-on:change="setEmail() "></b-form-input><br/>
        <b-form-input v-model="pass" placeholder="Enter your password" v-on:change="setEmail() " type="password"></b-form-input><br/>
        <b-button variant="primary">Login</b-button>
        <hr/>
        
        <b-button variant="primary">Register</b-button> <br/>
        
    </b-card>
  </div>
  
</template>

<script>

 export default {
    data: function() {
    return {
     email :''
      };
    },
     watch: {
     email :{
      handler: function () {
        // console.log('Old User : ', oldUser)
        // console.log('New User : ', newUser)
        this.$store.commit('setEmail',this.email)
      },
      deep: true
     }
  },
    methods:{
      setName(){
        this.$store.commit('setEmail',this.email)
        console.log(this.email)
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
.setCenter{
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
}
</style>
