import axios from 'axios'
import { apiUrl } from './urls';

export function requestApi() {

    const request = axios.create({
        baseURL: apiUrl,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken') ? localStorage.getItem('accessToken') : null}`
        },
        responseType: 'json',
        socketPath: null,
    })


    request.interceptors.response.use(
        (response) => response,
        (error) => {
            console.log("error ==>", error);
            if (error.response) {
                console.log("error ==>", error.response.data);

                if (error.response.status == 401 || error.response.status == 403) {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("user");
                    window.location.replace('/login');
                }

                // console.log(error.response.headers);
            }
        }
    );

    return request;
}

// function createAxiosResponseInterceptor(axiosInstance) {
//    const interceptor = axiosInstance.interceptors.response.use(
//        response => {
//           console.log('==================response==================');
//           console.log(response);
//           console.log('=================response===================');
//        },
//        error => {



//          console.log("===============error=============");
//          console.log(error);
//          console.log(error.status);

//            // Reject promise if usual error
//          //   if (errorResponse.status !== 401) {
//          //       return Promise.reject(error);
//          //   }

//            /*
//             * When response code is 401, try to refresh the token.
//             * Eject the interceptor so it doesn't loop in case
//             * token refresh causes the 401 response
//             */
//          //   axiosInstance.interceptors.response.eject(interceptor);

//          //   return axiosInstance.post('/api/refresh_token', {
//          //       'refresh_token': this._getToken('refresh_token')
//          //   }).then(response => {
//          //       saveToken();
//          //       error.response.config.headers['Authorization'] = 'Bearer ' + response.data.access_token;
//          //       return axiosInstance(error.response.config);
//          //   }).catch(error => {
//          //       destroyToken();
//          //       this.router.push('/login');
//          //       return Promise.reject(error);
//          //   }).finally(createAxiosResponseInterceptor);
//        }
//    );
// }


// import axios from 'axios';
// import { apiUrl } from './urls';
// // const axios = require('axios');





// export function requestApi() {
//    // Step-1: Create a new Axios instance with a custom config.
//    // The timeout is set to 10s. If the request takes longer than
//    // that then the request will be aborted.
//    const customAxios = axios.create({
//       baseURL: apiUrl,
//       timeout: 10000,
//       headers: { 'api-key': 'eyJz-CI6Ikp-4pWY-lhdCI6' }
//    });


//    // Step-3: Configure/make use of request & response interceptors from Axios
//    // Note: You can create one method say configureInterceptors, add below in that,
//    // export and call it in an init function of the application/page.
//    customAxios.interceptors.request.use(
//       (request) => requestHandler(request),
//       (error) => errorHandler(error)
//    );

//    customAxios.interceptors.response.use(
//       (response) => responseHandler(response),
//       (error) => errorHandler(error)
//    );


//    return customAxios;

// }


// // Step-2: Create request, response & error handlers
// const requestHandler = request => {
//    // Token will be dynamic so we can use any app-specific way to always
//    // fetch the new token before making the call
//    request.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMTIzNDU2Nzg5IiwibmFtZSI6IlNhbXBsZSIsImlhdCI6MTUxNjIzODIzfQ.ZEBwz4pWYGqgFJc6DIi7HdTN0z5Pfs4Lcv4ZNwMr1rs';

//    return request;
// };

// const responseHandler = response => {

//    console.log("==");
//    console.log(response);
//    if (response.status === 401) {
//       window.location = '/login';
//    }

//    return response;
// };

// const errorHandler = error => {
//    console.log("====");
//    console.log(error);

//    if (error.response) {
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//    }

//    return Promise.reject(error);
// };


// // Step-4: Export the newly created Axios instance to be used in different locations.