import Link from 'next/link';

const TagA = ({ link, head, des, icon }) => {
    return (
        <Link href={link} className="my-4 group font-mono block w-screen mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-blue-900">
            <div className="flex items-center space-x-3 group-hover:text-bage-100 text-blue-950">
                {icon}
                <h3 className="text-blue-950 text-xl group-hover:text-bage-100 font-black">{head}</h3>
            </div>
            <p className="text-blue-950 group-hover:text-bage-100 text-sm">{des}</p>
        </Link>
    )
}

export default TagA