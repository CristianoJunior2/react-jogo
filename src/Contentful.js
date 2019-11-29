import {createClient} from 'contentful'

export default createClient({
    space:process.env.REACT_APP_LOGIN,
    accessToken:process.env.RECAT_APP_KEYCODE
})