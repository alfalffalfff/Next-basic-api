import React from 'react'

const MiddlewarePass = () => {
    return (
        <div className='whitespace-nowrap w-auto font-mono m-5 p-8 bg-blue-900 rounded-md text-bage-100 text-center'
        >
            <h1 className='mb-3'>You come from "/middleware-test/page.js"</h1>
            <h2>You Pass [ Middleware ] !</h2>

        </div>
    )
}

export default MiddlewarePass