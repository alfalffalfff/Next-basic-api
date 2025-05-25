'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';


const getblog = async (slug) => {
    const response = await fetch(`https://66f38f8971c84d8058791836.mockapi.io/blog/bblog/${slug}`, {
        cache: 'no-store'
    });

    if (!response.ok) {
        throw new Error('cannot feth api')
    }

    return response.json()
}

const blogSlug = ({ params }) => {
    const [blogState, setBlogState] = useState({
        firstname: '',
        lastname: '',
        description: ''
    })

    const initBlog = async () => {
        try {
            const result = await getblog(params.slug)
            setBlogState(result)
        } catch (error) {
            console.log('error', error)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setBlogState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('Form Submitted', blogState)
        try {
            const response = await fetch(`https://66f38f8971c84d8058791836.mockapi.io/blog/bblog/${params.slug}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(blogState)
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const responseData = await response.json()
            console.log('Form submitted successfully', responseData)
        } catch (error) {
            console.error('feth operation problem', error)
        }
    }

    useEffect(() => {
        initBlog()
    }, [])

    return (
        <div>
            <div className='p-5 text-bage-100 font-mono whitespace-pre'>
                <div className='p-3 bg-blue-900 border-2'>
                    <h1 className='text-2xl'>EDIT PAGE</h1>
                    <div className='flex justify-between'>
                        <div>
                            <p className='my-0.5'>ID         :  {params.slug}</p>
                            <p className='my-0.5'>FirstName  :  {blogState.firstname}</p>
                            <p className='my-0.5'>LastName   :  {blogState.lastname}</p>
                            <p className='my-0.5'>City       :  {blogState.description}</p>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className='flex justify-end'>
                                        <button className='m-0.5 px-5 rounded-md text-blue-950 bg-bage-100'>
                                            Edit
                                        </button>
                                    </div>
                                    <div className='m-0.5'>
                                        <input
                                            className='rounded-md text-blue-950 bg-bage-50'
                                            name="firstname"
                                            type="text"
                                            value={blogState.firstname}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='m-0.5'>
                                        <input
                                            className='rounded-md text-blue-950 bg-bage-50'
                                            name="lastname"
                                            type="text"
                                            value={blogState.lastname}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='m-0.5'>
                                        <input
                                            className='rounded-md text-blue-950 bg-bage-50'
                                            name="description"
                                            type="text"
                                            value={blogState.description}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <Link href={'/mini-project-blog/manage/blog/'}>
                    <BackspaceOutlinedIcon className="text-blue-900 font-black text-x text-center hover:text-red-600 hover:stroke-red-600" />
                </Link>
            </div>
        </div>

    )
}

export default blogSlug