
<template>
  <div class="signup-form">
    <h2>Login</h2>
    <form @submit.prevent="login">
      
      <div class="register">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div class="register">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="formData.password" required>
      </div>
      <button type="submit">Login</button>
    </form>
    <p >
      <router-link to="/signup">Sign-Up</router-link>
    </p>
  </div>
</template>

  <script>
  import axios from 'axios';
  export default {
    name: 'LogIn',
    data() {
      return {
        formData: {
          email: '',
          password: '',
        },
      };
    },
    methods: {
    async login() {
      let result = await axios.get(
      `http://localhost:3000/user?email=${this.formData.email}&password=${this.formData.password}`
        );

      console.warn(result);
      if(result.status==200 && result.data.length > 0)
      {
        localStorage.setItem("user-info",JSON.stringify(result.data));
        this.$router.push({name:'HomeCom'})
      }
      else{
        console.log("error");
        
      }
      
    },

  },
  //dont allow to login again if user allready login
  mounted(){
    let user = localStorage.getItem('user-info');
    if (user){
      this.$router.push({name:'HomeCom'})
    }
  }


  };
  </script>
  
  