
const index =() => {
    return {hello: 'index test'}
}

const get = () => {

    return {hello:'test'}
}

const post = (req: JSON) => {

    return req
}
export default {index, get,post};


