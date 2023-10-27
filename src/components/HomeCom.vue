<template>
<Headerc />
<h1>Hello {{ name }}, welcome on Hotel</h1>
<h3>"All the information about the hotel has been provided in the table below"</h3>
<!-- code for calling json data  -->
<table>

    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Rating out of 5</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
    </thead>

    <tbody>
        <!-- with the help of for loop show api data -->
        <tr v-for="i in restaurants" :key="i.id">
            <td>{{ i.id }}</td>
            <td>{{ i.name }}</td>
            <td>{{ i.contact }}</td>
            <td>{{ i.address }}</td>
            <td>{{ i.rating }}</td>
            <!-- its route for go to updat page -->
            <!-- : are use to send dynamick route -->
            <td><router-link :to="'/UpdateDetails/'+i.id">Update</router-link></td>
            <td><button v-on:click="deleteRes(i.id)">Delete</button></td>
        </tr>
    </tbody>

</table>
</template>

<script>
// for api call post and get request
import axios from 'axios';

import Headerc from './HeaderC.vue';
export default {
    name: "HomeCom",
    data() {
        return {
            name: '',
            restaurants: []
        }
    },
    components: {
        Headerc
    },

    // for deleting data
    methods:{

        async deleteRes(id){
            let result = await axios.delete("http://localhost:3000/restaurant/"+id);
            if(result.status==200){

              this.loadData()
            }
        },
        
       //for page reload show data after delete
        async loadData(){
        // taking data from local storage
        let user = localStorage.getItem('user-info');
        

        if (!user) {
            this.$router.push({name: 'SignUp'})
        }
        // for api get request
        let result = await axios.get("http://localhost:3000/restaurant");
        
        this.restaurants = result.data
        }

    },

    mounted() {
        this.loadData()

        

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