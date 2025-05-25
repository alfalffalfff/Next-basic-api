'use client'

import { useState, useEffect } from 'react'

async function getBlogs() {
    const response = await fetch('https://66f38f8971c84d8058791836.mockapi.io/blog/bblog')

    if (!response.ok) {
        throw new Error('cannot feth api')
    }

    return response.json()
}

const apiClient = () => {
    const [blogstate, setBlogstate] = useState([])

    const initBlog = async () => {
        try {
            const result = await getBlogs()
            setBlogstate(result)
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        initBlog()
    }, [])

    console.log(blogstate)

    return (
        <div className='m-5 p-5 font-mono border-2 border-blue-900 rounded-md whitespace-pre'>
            <h1 className='text-blue-900 font-black text-3xl text-center'>API CLIENT COMPONENT</h1>
            <h2 className='text-blue-900 text-l text-left my-3'>
                initblog &rarr; getBlogs() return res.json() &rarr;<br />setBlogstate [by React-Hook] &rarr; useEffect() initBlog() &rarr;<br />Answer = blogstate in [useState]
            </h2>
            <h2 className='text-blue-900 text-l text-left my-3'>
                "use client" = use for useState and useEffect
            </h2>
            <div>
                {blogstate.map((blog, index) => (
                    <div key={index} className='p-5 text-bage-100'>
                        <div className='p-3 bg-blue-900 rounded-md'>
                            <p>ID         : {blog.id}</p>
                            <p>FirstName  : {blog.firstname}</p>
                            <p>LastName   : {blog.lastname}</p>
                            <p>City       : {blog.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default apiClient