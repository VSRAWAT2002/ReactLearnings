import React, { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Test from './test'
import App from './App'

function MyApp() {
    return (
        <div>
            <a src="https://gemini.google.com/app?hl=en-IN" target='_blank'>myapp .com</a>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://gemini.google.com/app?hl=en-IN',
//         target: '_blank'
//     },
//     children : 'click here to visit gemini'
// }

const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'

    },
    'click me to visit googlte'
)

createRoot(document.getElementById('root')).render(

    // anotherElement
    // reactElement
    <App/>
)

/*
 */
