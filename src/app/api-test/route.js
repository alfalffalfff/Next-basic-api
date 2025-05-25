export async function GET() {
    console.log('test')
    return Response.json({
        name: 'This is API test'
    })
}