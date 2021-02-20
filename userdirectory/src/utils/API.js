import axios from "axios";

const BASEURL = 'https://randomuser.me/api/?results=50'

export default {
    get50users: function () {
        return axios.get(BASEURL);
    },


};
