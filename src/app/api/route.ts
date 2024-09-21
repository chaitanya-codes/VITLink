export async function GET(request: Request) {
    const data = {id: 1, name:"x"}
    return Response.json({data})
}