import axios from 'axios'


export default async function signUpService(email){
    await axios({
        url: 'https://safetynet-server.herokuapp.com/signup',
        //url: 'http://localhost:8080/signup',
        method: 'post',
        data: {
            'email': email
        },
    })
}