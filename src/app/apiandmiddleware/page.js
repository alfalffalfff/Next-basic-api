import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import TagA from "../component/tagA"

const ApiandMiddleware = () => {
    return (
        <div>
            <div className="whitespace-nowrap w-auto font-mono m-5 -mb-3 p-5 bg-blue-900 rounded-md text-bage-100 text-center">
                <h1 className=" text-2xl font-black">
                    API TEST
                </h1>
            </div>
            <div className='flex m-5 gap-x-5 w-auto'>
                <TagA
                    link="/api-test"
                    head="API-TEST"
                    des="GET => '/api-test/route.js'"
                    icon={<PostAddOutlinedIcon />}
                />
                <TagA
                    link="/api-test/test/1126"
                    head="API-TEST / ID : 1126"
                    des="GET => '/api-test/test/[id]'"
                    icon={<PostAddOutlinedIcon />}
                />
            </div>
            <div className="whitespace-nowrap w-auto font-mono m-5 -mb-3 p-5 bg-blue-900 rounded-md text-bage-100 text-center">
                <h1 className=" text-2xl font-black">
                    MIDDLEWARE TEST
                </h1>
            </div>
            <div className='flex m-5 gap-x-5 w-auto'>
                <TagA
                    link="/middleware-test"
                    head="Test Middleware"
                    des="To => '/middleware-test' BUT YOU GO '/middlewarepass'"
                    icon={<PostAddOutlinedIcon />}
                />
            </div>

        </div>
    )
}

export default ApiandMiddleware