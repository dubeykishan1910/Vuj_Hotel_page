<template>
<section class="containerr forms">
    <div class="form login">
        <div class="form-content">
            <header>Sign Up</header>

            <form @submit.prevent="signup" class="mainn">
                <div class="field input-field">
                    <input type="text" placeholder="Enter Name" class="input" v-model="formData.username" required>

                </div>
                <div class="field input-field">
                    <input type="email" placeholder="Email" class="input" v-model="formData.email" required>

                </div>
                <div class="field input-field">
                    <input type="password" placeholder="Password" class="password" v-model="formData.password" required>
                </div>

                <div class="field button-field">
                    <button type="submit">Sign Up</button>
                </div>

            </form>
            <div class="et form-link">
                <span>Already have an account</span>
                <router-link to="/login" class="a signup-link">login</router-link>
            </div>

        </div>

        <div class="line"></div>
    </div>
</section>
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
            let result = await axios.post("http://localhost:3000/user", {
                email: this.formData.email,
                name: this.formData.username,
                pass: this.formData.password,
            });

            console.warn(result);
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({
                    name: 'ComC'
                })
            }

        },

    },

    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({
                name: 'ComC'
            })
        }
    }

};
</script>
