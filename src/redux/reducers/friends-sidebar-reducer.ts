const DO_SOME = 'social-network/friendsSideBar/DO_SOME';

let initialState = {
    friendsData: [
        {
            id: '1',
            name: 'Aleksey',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgR91HZCgbauSwSmi3VG05-UzK8mlA6Q2aQ&usqp=CAU"
        },
        {
            id: '2',
            name: 'Alyona',
            img: 'https://image.shutterstock.com/image-photo/photo-positive-excited-people-man-260nw-1146012125.jpg'
        },
        {
            id: '3',
            name: 'Ivan',
            img: 'https://png.pngitem.com/pimgs/s/163-1635349_businessperson-illustration-happy-people-happy-business-people-clipart.png'
        }
    ]
}


export const friendsSidebarReducer = (state: FriendsSideBarType = initialState, action: doSomeType): FriendsSideBarType => {
    switch (action.type) {
        case DO_SOME:
            return state
        default:
            return state;
    }
}

export const doSomeAC = () => ({type: DO_SOME} as const)

//types
export type doSomeType = ReturnType<typeof doSomeAC>
export type FriendsSideBarType = typeof initialState