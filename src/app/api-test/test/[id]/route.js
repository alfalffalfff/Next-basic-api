export async function GET(request, { params }) {
    console.log('test')
    return Response.json({
        name: 'This is API test with ID',
        id: params.id
    })
}