import Link from 'next/link';
import AddchartIcon from '@mui/icons-material/Addchart';

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
            <h1 className='mb-5 text-blue-900 font-black text-3xl text-center'>Mini Project Blog</h1>

            <div>
                {blogs.map((blog, index) => (
                    <div key={index} className='p-1 text-bage-100'>
                        <Link href={`/mini-project-blog/blog/${blog.id}`}>
                            <div className='p-2 bg-blue-900 rounded-md flex justify-start
                             hover:bg-bage-100 hover:text-blue-900 hover:border-blue-900
                              hover:border-2  hover:font-black hover:stroke-blue-900'>
                                <div>
                                    <p>ID  :  {blog.id}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default apiServer