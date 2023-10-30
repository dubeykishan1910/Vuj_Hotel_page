<template>
    <HeaderC />
    <h1>Hello, welcome to add page</h1>
    <div class="signup-form">
        <h2>Update Detail</h2>
        <form @submit.prevent="addData">
            <div class="register">
                <label for="username">Name</label>
                <input type="text" id="username" placeholder="Enter Name" v-model="restaurant.name" required>
            </div>
            <div class="register">
                <label for="username">Contact no</label>
                <input type="number" id="username" placeholder="Enter number" v-model="restaurant.contact" required>
            </div>
    
            <div class="register">
                <label for="password">Address</label>
                <input type="text" id="password" v-model="restaurant.address" required>
            </div>
            <div class="register">
                <label for="username">Rating</label>
                <input type="text" id="username" placeholder="Out of 5" v-model="restaurant.rating" required>
            </div>
            <button type="submit">adddate</button>
        </form>
    
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    
    </div>
    </template>
    
    <script>
    import HeaderC from './HeaderC.vue';
    import axios from 'axios';
    export default {
        name: "AddC",
        components: {
            HeaderC
        },
        data() {
            return {
                restaurant: {
                    name: '',
                    contact: '',
                    address: '',
                    rating: ''
                },
            };
        },
        methods: {
    
          // hiting api for Put request means updating data
            async addData() {
                
                let result = await axios.post("http://localhost:3000/restaurant/",{
                  address: this.restaurant.address,
                    name: this.restaurant.name,
                    contact: this.restaurant.contact,
                    rating: this.restaurant.rating
                });
                if (result.status == 201) {
                    
                    this.$router.push({
                        name: 'HomeCom'
                    })
                }
    
            },
        },
    
        
    };
    </script>
    