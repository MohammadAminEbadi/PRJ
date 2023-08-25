// const axios = require("../axios")

document.addEventListener('alpine:init', () => {
    Alpine.data('usersData', () => ({


        users: [],
        isLoading: false,
        getUsers(){
            this.isLoading = true;
            axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>{
                this.users = res.data;
                this.isLoading = false;
                // console.log(res);
            })
        }


    }))
})