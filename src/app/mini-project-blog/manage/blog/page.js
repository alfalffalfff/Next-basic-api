import Link from "next/link";
import { headers } from "next/headers"

async function getBlogs() {
    const response = await fetch('https://66f38f8971c84d8058791836.mockapi.io/blog/bblog', {
        cache: 'no-store'
    });

    if (!response.ok) {
        throw new Error('cannot feth api')
    }

    return response.json()
}

const manageBlog = async () => {
    const headerRequest = headers()
    const user = JSON.parse(headerRequest.get('user'))

    const blogs = await getBlogs(

    )

    return (
        <div>
            <div className='m-5 p-5 font-mono border-2 border-blue-900 rounded-md whitespace-pre'>
                <h1 className='mb-5 text-blue-900 font-black text-3xl text-center'>Manage Blog</h1>
                <h1 className='mb-5 text-blue-900 text-xl text-center'>User email : {user.email}</h1>
                <div>
                    {blogs.map((blog, index) => (
                        <div key={index} className='p-1 text-bage-100'>
                            <Link href={`/mini-project-blog/manage/blog/${blog.id}`}>
                                <div className='p-2 bg-blue-900 rounded-md
                             hover:bg-bage-100 hover:text-blue-900 hover:border-blue-900
                              hover:border-2  hover:font-black hover:stroke-blue-900'>
                                    <div className="flex justify-between">
                                        <p>ID : {blog.id}  </p>
                                        <p className="justify-self-center">{blog.firstname}  </p>
                                        <p className="justify-self-end">Edit</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default manageBlog