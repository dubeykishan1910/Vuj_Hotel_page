<template>
<HeaderC />
<h1>Hello, welcome to update page</h1>
<div class="signup-form">
    <h2>Update Detail</h2>
    <form @submit.prevent="update">
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
        <button type="submit">Update</button>
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
    name: "UpdateDetails",
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
        async update() {
            
            let result = await axios.put("http://localhost:3000/restaurant/" + this.$route.params.id, {
              address: this.restaurant.address,
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                rating: this.restaurant.rating
            });
            if (result.status == 200) {
                
                this.$router.push({
                    name: 'HomeCom'
                })
            }

        },
    },

    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }

        // taking selected data on basis of :id from api                    ||select dynamic routes :id  it will give current route value like 1 or 2 example=locl..../UpdateDetails/1  it will return 1 
        const result = await axios.get("http://localhost:3000/restaurant/" + this.$route.params.id);

        // auto fill the form
        this.restaurant = result.data
    }
};
</script>
