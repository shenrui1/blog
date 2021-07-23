import axios from 'axios';


export const getDataAction = (data) => ({
    type: 'getdata',
    data
})

export const componentDidMountActionUsers = () => {
    return (dispatch) => {
        axios
        .post('http://localhost:3001/admin/users')
        .then((res) => {
            const data = res.data;
            const action = getDataAction(data);
            dispatch(action);
        })
    }
}

export const componentDidMountActionBlogs = () => {
    return (dispatch) => {
        axios
        .post('http://localhost:3001/admin/blogs')
        .then((res) => {
            const data = res.data;
            const action = getDataAction(data);
            dispatch(action);
        })
    }
}