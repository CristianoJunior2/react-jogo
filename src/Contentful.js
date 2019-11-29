import {createClient} from 'contentful'

export default createClient({
    space:process.env.REACT_APP_LOGIN,
    accessToken:process.env.REACT_APP_KEYCODE
   /* space:"hx3tqtdghre7",
    accessToken:"ikgpeFNSb3kCXF6qtdRCFIqurDDF27E0RzwZH63oxR8"*/
})