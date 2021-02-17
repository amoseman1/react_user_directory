import axios from "axios";

const BASEURL = 'https://randomuser.me/api/?results=20'
// const GENDERURL = 'https://randomuser.me/api/?gender=female'
// const NATURL = 'https://randomuser.me/api/?nat=US'

export default {
    get20users: function () { //is there no query for the initial page load fetch?
        return axios.get(BASEURL);
    },

    // getGendusers: function () { //is there no query for the initial page load fetch?
    //     return axios.get(GENDERURL);
    // },

    // getNatusers: function (query) { //is there no query for the initial page load fetch?
    //     return axios.get(NATURL + query);
    // },
};
