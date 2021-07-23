import axios from 'axios';


export const getDataAction = (data) => ({
    type: 'getdata',
    data
})

export const componentWillMountAction = () => {
    return (dispatch) => {
        axios
        .post('http://localhost:3001/user')
        .then((res) => {
            const data = res.data;
            const action = getDataAction(data);
            dispatch(action);
        })
    }
}