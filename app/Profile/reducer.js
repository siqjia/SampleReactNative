const initialState = {
    users: [
        {
            id: 1,
            password: "12345",
            firstName: 'Joe',
            lastName: 'Dough',
            info: 'UX Designer / Mobile developer',
            bookCount: '5',
            description: 'Hi, nice to meet you. I love to eat Joe and Dough. I think I am handsome.',
            profilePic: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        },
        {
            id: 2,
            password: "12345",
            firstName: 'Siqi',
            lastName: 'Jia',
            info: 'Full Time Angel / Part Time Glutton',
            bookCount: '3',
            description: 'Hi, nice to meet you.',
            profilePic: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        }
    ]
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_USER':
            let loadUser = state.users.map((user)=>{
                if(user.id === action.payload.id) {
                    return action.payload;
                }
            })
            return {
                ...state,
                users: loadUser
            }
        case 'EDIT_USER':
            //Array.map loop through books and find book obj with a matching id
            let modifiedUser = state.users.map((user)=>{
                //modify user in users via mapping the id
                if(user.id === action.payload.id) {
                    return action.payload;
                } else {
                    return user;
                }
            })
            return {
                ...state,
                users: modifiedUser
            }
        //sign-up ADD_USER, delete account DELETE_USER

        default:
            return state;
    }
}