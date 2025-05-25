
export default function Layout({ children }) {
    return (
        <>
            <div>
                <div className="whitespace-nowrap w-auto font-mono m-5 p-8 bg-blue-900 rounded-md text-bage-100 text-center">
                    <h1 className=" text-6xl font-black">
                        THIS IS LAYOUT
                    </h1>
                    <h2 className="text-3xl mt-3">
                        From '/testlayout/layout.js'
                    </h2>
                </div>
                <main className="container mx-auto">{children}</main>
            </div>
        </>
    )
}