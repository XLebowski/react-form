// import axios from 'axios';
import { makeAutoObservable } from 'mobx';
// import { useGetUsersQuery } from '../../../api/UserApi';

function FormStore() {
    return makeAutoObservable({
        value: '',
        users: [],

        updateValue(str) {
            this.value = str;
        },
        updateUsers() {
            if (this.users.length < 1) {
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then((response) => response.json())
                    .then((json) => {
                        this.users = [...this.users, ...json];
                        console.log(this.users);
                    });
            }
        },
    });
}

export default new FormStore();
