import React from 'react'

const page = ({ params }) => {
    return (
        <div className='text-blue-900 font-mono text-2xl m-5 mt-8 p-5 border-solid border-2 border-indigo-900 rounded-md text-center'>
            Slug + ID : {params.slug} Id : {params.id}
        </div>
    )
}

export default page