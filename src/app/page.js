import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import TagA from "./component/tagA";

export default function Home() {
  return (
    <div className="flex">
      <div className='flex-1 p-7 text-2xl font-semibold h-screen text-blue-900'>
        <h1>HOME_PAGE</h1>
        <TagA
          link="/testlayout"
          head="Test Button"
          des="i just want to test this and i hope it work."
          icon={<PostAddOutlinedIcon />}
        />
      </div>
    </div>
  );
}
