<template>
<section class="containerr forms">
    <div class="form login">
        <div class="form-content">
            <header>Login</header>

            <form @submit.prevent="login" class="mainn">
                <div class="field input-field">
                    <input type="email" placeholder="Email" class="input" v-model="formData.email" required>

                </div>
                <div class="field input-field">
                    <input type="password" placeholder="Password" class="password" v-model="formData.password" required>
                </div>

                <div class="field button-field">
                    <button type="submit">Login</button>
                </div>

            </form>
            <div class="et form-link">
                <span>Create an account</span>
                <router-link to="/signup" class="a signup-link">Signup</router-link>
            </div>

        </div>

        <div class="line"></div>
    </div>
</section>
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
            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({
                    name: 'ComC'
                })
            } else {
                console.log("error");

            }

        },

    },
    //dont allow to login again if user allready login
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

<style scoped>
.et{margin-top: 1em;}
.containerr {
    /* max-width: 1200px; */
    /* width: 95%; */
    height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    background-color: #4070f4;
    font-size: 0.938rem;

}

.form {
    max-width: 430px;
    width: 100%;
    padding: 2em;
    border-radius: 1em;
    background: #FFF;

}

header {
    font-size: 1.5rem;
    font-weight: 700;
    color: #232836;
    text-align: center;
}

form {
    margin-top: 1em;
}

form .field {
    height: 45px;
    width: 100%;
    margin-top: 1em;
}

.field input,
.field button {
    height: 100%;
    width: 100%;
    padding: 1em;
    border-radius: 1em;
    border: 2px solid #CACACA;
}

.field button:hover {
    background: #4070f4;
}

.field-input {
    font-size: 16px;
    font-weight: 400;
}

.form-link span,
.form-link .a {
    font-size: 1rem;
    font-weight: 400;
    margin-right: .3em;
    

}

.form .a:hover {
    text-decoration: underline;
    color: #4070f4;
}

.line {
    margin-top: 2em;
    height: 1px;
    width: 100%;
    background-color: #d4d4d4;
}

@media (max-width: 400px) {
    .form {
        margin-inline: 2em;

    }

}
</style>
