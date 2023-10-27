<template>
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
<div class="signup-form">
    <h2>Sign Up</h2>
    <form @submit.prevent="signup">
      <div class="register">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="Enter Name" v-model="formData.username" required>
      </div>
      <div class="register">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div class="register">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="formData.password" required>
      </div>
      <button type="submit">Sign Up</button>
    </form>
    <p >
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  name: 'SignUp',
  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: '',
      },
    };
  },

  methods: {
    async signup() {
      let result = await axios.post("http://localhost:3000/user",{
        email:this.formData.email,
        name:this.formData.username,
        pass:this.formData.password,
      });


      console.warn(result);
      if(result.status==201)
      {
        localStorage.setItem("user-info",JSON.stringify(result.data))
        this.$router.push({name:'HomeCom'})
      }
      
    },

  },

  mounted(){
    let user = localStorage.getItem('user-info');
    if (user){
      this.$router.push({name:'HomeCom'})
    }
  }

  
};
</script>


