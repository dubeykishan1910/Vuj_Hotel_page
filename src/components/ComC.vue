<template>
<div>
    <Headerc />
  
    <h1>API data</h1>
  </div>
    <table>

        <thead>
            <tr>

                <th>ID</th>
                <th>Name</th>
                <th>Contact</th>

            </tr>
        </thead>

        <tbody>
        <!-- with the help of for loop show api data -->
        
        <tr v-for="i in list" :key="i">
            
            
            <td>{{ i.id }}</td>
            <td>{{ i.title }}</td>
            <td>{{ i.body }}</td>
            
            
        </tr>
    </tbody>
    </table>


</template>

<script>
import Headerc from './HeaderC.vue';
import axios from 'axios';
export default {
    name: 'ComC',
    components: {
        Headerc
    },
    data() {
        return {
            name:"",
            list: []
        }
    },
    async mounted() {

        // taking data from local storage
        let user = localStorage.getItem('user-info');
        
        
        if (!user) {
            this.$router.push({name: 'SignUp'})
        }


        let result = await axios.get("https://jsonplaceholder.typicode.com/posts");
        this.list = result.data
        
    }

};
</script>



<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
,