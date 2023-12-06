<template>
  
  <router-view />
  
</template>

<script>
export default {
  name: 'App',
}
</script>



<style>

@import "./style.css";

.containerr {

max-width: 100%;
height: 100vh;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
color: black;
background-color: #4070f4;
font-size: 0.938rem;

}

.form{
    max-width: 430px;
    width: 100%;
    padding: 2em;
    border-radius: 1em;
    background: #FFF;
    
}
header{
    font-size: 1.5rem;
    font-weight: 700;
    color: #232836;
    /* text-align: center; */
}
form{
    margin-top: 1em;
}

form .field{
    height: 45px;
    width: 100%;
    margin-top: 1em;
}
.field input,
.field button{
    height: 100%;
    width: 100%;
    padding: 1em;
    border-radius: 1em;
    border: 2px solid #CACACA;
}
.field button:hover{
    background: #4070f4;
}
.field-input{
    font-size: 16px;
    font-weight: 400;
}
.form-link span,
.form-link .a{
    font-size: 1rem;
    font-weight: 400;
    margin-right: .5em;
    
}
</style>
