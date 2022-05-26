import { GET_USER_LIST,SET_USER_LIST} from "../accountType";


// if (process.browser) {
//     const initialState = {
//         fullName: localStorage.getItem("user") ? localStorage.getItem("user").fullName : null,
//         id: localStorage.getItem("user") ? localStorage.getItem("user").id : null,
//         role: localStorage.getItem("user") ? localStorage.getItem("user").role : null,
//         username: sessionStorage.getItem("user") ? localStorage.getItem("user").username : null,
//         status: localStorage.getItem("user") ? localStorage.getItem("user").status : null,
//         userLogIn: localStorage.getItem("user") ? true : false
//     };
    

// }





const initialState = [
    {
        id:1,
        fullname:"Md. Mizanur Rahaman",
        phone:"01839688665",
        email:"mizanurrahaman592@gmail.com",
        avatar:"",
        balance:500.00,
        cashback:200.55,
        bonus:100.00,
        dob:"15-5-1995",
        created_at:"10 hours ago",
        createdAt:"05-02-2020 10:12 AM"

    },
    {
        id:2,
        fullname:"Md. Mizanur Rahaman",
        phone:"01839688665",
        email:"mizanurrahaman592@gmail.com",
        avatar:"",
        balance:500.00,
        cashback:200.55,
        bonus:100.00,
        dob:"15-5-1995",
        created_at:"10 hours ago",
        createdAt:"05-02-2020 10:12 AM"
    },
    {
        id:3,
        fullname:"Md. Mizanur Rahaman",
        phone:"01839688665",
        email:"mizanurrahaman592@gmail.com",
        avatar:"",
        balance:500.00,
        cashback:200.55,
        bonus:100.00,
        dob:"15-5-1995",
        created_at:"10 hours ago",
        createdAt:"05-02-2020 10:12 AM"

    },
    {
        id:4,
        fullname:"Md. Mizanur Rahaman",
        phone:"01839688665",
        email:"mizanurrahaman592@gmail.com",
        avatar:"",
        balance:500.00,
        cashback:200.55,
        bonus:100.00,
        dob:"15-5-1995",
        created_at:"10 hours ago",
        createdAt:"05-02-2020 10:12 AM"

    },
    {
        id:5,
        fullname:"Md. Mizanur Rahaman",
        phone:"01839688665",
        email:"mizanurrahaman592@gmail.com",
        avatar:"",
        balance:500.00,
        cashback:200.55,
        bonus:100.00,
        dob:"15-5-1995",
        created_at:"10 hours ago",
        createdAt:"05-02-2020 10:12 AM"

    },{
        id:6,
        fullname:"Md. Mizanur Rahaman",
        phone:"01839688665",
        email:"mizanurrahaman592@gmail.com",
        avatar:"",
        balance:500.00,
        cashback:200.55,
        bonus:100.00,
        dob:"15-5-1995",
        created_at:"10 hours ago",
        createdAt:"05-02-2020 10:12 AM"

    },{
        id:7,
        fullname:"Md. Mizanur Rahaman",
        phone:"01839688665",
        email:"mizanurrahaman592@gmail.com",
        avatar:"",
        balance:500.00,
        cashback:200.55,
        bonus:100.00,
        dob:"15-5-1995",
        created_at:"10 hours ago",
        createdAt:"05-02-2020 10:12 AM"

    },{
        id:8,
        fullname:"Md. Mizanur Rahaman",
        phone:"01839688665",
        email:"mizanurrahaman592@gmail.com",
        avatar:"",
        balance:500.00,
        cashback:200.55,
        bonus:100.00,
        dob:"15-5-1995",
        created_at:"10 hours ago",
        createdAt:"05-02-2020 10:12 AM"

    },{
        id:9,
        fullname:"Md. Mizanur Rahaman",
        phone:"01839688665",
        email:"mizanurrahaman592@gmail.com",
        avatar:"",
        balance:500.00,
        cashback:200.55,
        bonus:100.00,
        dob:"15-5-1995",
        created_at:"10 hours ago",
        createdAt:"05-02-2020 10:12 AM"

    },{
        id:10,
        fullname:"Md. Mizanur Rahaman",
        phone:"01839688665",
        email:"mizanurrahaman592@gmail.com",
        avatar:"",
        balance:500.00,
        cashback:200.55,
        bonus:100.00,
        dob:"15-5-1995",
        created_at:"10 hours ago",
        createdAt:"05-02-2020 10:12 AM"

    }
]




const userlistReducer = (state = initialState, action) => {

    const { type,payload } = action

    switch (type) {
        case GET_USER_LIST:
            return {
                userlist:state
            };
        case SET_USER_LIST:
            return {
                userlist:[...state,...payload]

            };
        default:
            return state;
    }

}


export default userlistReducer;