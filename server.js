import { serve } from "https://deno.land/std@0.125.0/http/server.ts";
import API from './api/index.ts'

const port = 8080;


const apiHandler =(API, urlPaths,data) => {
    let apiCall = API[urlPaths[1]]['index'];


    const hasFunction = urlPaths.length > 2
    //
    if(hasFunction)
        apiCall =  API[urlPaths[1]][urlPaths[2]];


    return  data ? apiCall(data) :apiCall();
}

const handler = async (request) => {
    let response;

    try{
        //need to add support for being able to handle the base path


        // for adding support for authorization
        // console.log('headers',request.headers.get('authorization'));
        let url = new URL(request.url)


        let urlPaths = url.pathname.split('/')


        if(request.method == 'GET'){

            response = Response.json(await apiHandler(API,urlPaths));
            
            // response = new Response(JSON.stringify()), {
            //     headers:{
            //         "content-type": "application/json"
            //     },
            //     status: 200 });

        }else if(request.method == 'POST'){
            const data = await request.json()
            response = Response.json(apiHandler(API,urlPaths,data))
        }

    }catch(err){
        // look into support for logging service or build own
        return Response.json({status:'error', msg:err.message},{
            status: 500 
        });
    }

    return response;
};

console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
await serve(handler, { port });