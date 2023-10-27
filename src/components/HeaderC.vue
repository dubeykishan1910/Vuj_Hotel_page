<template>
    <header class="app-header">
      <div class="logo">
        <!-- <img src="your-logo.png" alt="Logo" class="logo-img" /> -->
        <h1 class="logo-text">Your App</h1>
      </div>
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item"><router-link to="/">Home</router-link></li>

          <li class="nav-item"><router-link to="/UpdateDetails/1">Update Details</router-link></li>
          
          <li class="nav-item"><router-link to="#">Services</router-link></li>
          <li v-on:click="logout" class="nav-item"><a href="#">Logout</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderC',

    methods:{
      // for clearling local storage
        logout(){
            localStorage.clear();
            this.$router.push({name:"LogIn"});
        }
    }
  };
  </script>
  
  <style scoped>
  .app-header {
    background-color: #007BFF;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo-img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
  
  .logo-text {
    font-size: 24px;
  }
  
  .nav-list {
    list-style: none;
    display: flex;
  }
  
  .nav-item {
    margin-right: 20px;
  }
  
  .nav-item:last-child {
    margin-right: 0;
  }
  
  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>