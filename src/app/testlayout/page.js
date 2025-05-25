import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import TagA from '../component/tagA'

const Testlayout = () => {
    return (
        <div className='text-blue-900 font-mono'>
            <div
                className='m-5 mt-8 p-5 border-solid border-2 border-indigo-900 rounded-md text-center'
            >
                <h1 className=' text-2xl font-black'>This is Test Layout</h1>
                <h1 className=' text-xl'>From '/testlayout/page.js'</h1>
            </div>
            <div className='flex m-5 gap-x-5 w-auto'>
                <TagA
                    link="/testlayout/TestSlug"
                    head="Test Layout Only Slug"
                    des="To => '/testlayout/[slug]'"
                    icon={<PostAddOutlinedIcon />}
                />
                <TagA
                    link="/testlayout/TestSlug/1126"
                    head="Test Layout Slug and ID"
                    des="To => '/testlayout/[slug]/[id]'"
                    icon={<PostAddOutlinedIcon />}
                />
            </div>
        </div>
    )
}

export default Testlayout