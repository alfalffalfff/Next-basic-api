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

const blogSlug = async ({ params }) => {
    const blog = await getblog(params.slug)

    return (
        <div>
            <div className='p-5 text-bage-100 font-mono whitespace-pre'>
                <div className='p-3 bg-blue-900 border-2'>
                    <p>ID         : {params.slug}</p>
                    <p>FirstName  : {blog.firstname}</p>
                    <p>LastName   : {blog.lastname}</p>
                    <p>City       : {blog.description}</p>
                </div>
                <Link href={'/mini-project-blog/'}>
                    <BackspaceOutlinedIcon className="text-blue-900 font-black text-x text-center hover:text-red-600 hover:stroke-red-600" />
                </Link>
            </div>
        </div>

    )
}

export default blogSlug