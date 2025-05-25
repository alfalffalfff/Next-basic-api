async function getBlogs() {
    const response = await fetch('https://66f38f8971c84d8058791836.mockapi.io/blog/bblog', {
        cache: 'no-store'
    });

    if (!response.ok) {
        throw new Error('cannot feth api')
    }

    return response.json()
}

const apiServer = async () => {
    const blogs = await getBlogs()
    //console.log('blog', blogs)

    return (
        <div className='m-5 p-5 font-mono border-2 border-blue-900 rounded-md whitespace-pre'>
            <h1 className='text-blue-900 font-black text-3xl text-center'>API SERVER COMPONENT</h1>
            <h2 className='text-blue-900 text-l text-left my-3'>
                async function getblog() &rarr; async ApiServer (function) &rarr;<br />const blogs = await getBlogs() &rarr; Answer = blogs.map
            </h2>
            <h2 className='text-blue-900 text-l text-left my-3 flex'>
                Next server = <p className='text-red-500'>didn't</p> use useState and useEffect
            </h2>
            <div>
                {blogs.map((blog, index) => (
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

export default apiServer