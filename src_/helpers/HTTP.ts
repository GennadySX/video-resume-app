/*
 * GennadySX @2020
 */

import {API, Bearer} from "../constants/API";
import {Storage} from "./Storage";

const httpGET = (controller: string): Promise<any> => request(controller, 'get');
const httpPOST = (controller: string, data: any): Promise<any> => request(controller, 'post', data);
const httpUPDATE = (controller: string, data?: any): Promise<any> => request(controller, 'update', data);
const httpDELETE = (controller: string): Promise<any> => request(controller, 'delete');


const request = (controller: string, method: string, data?: object | any, additional_options?: any) => {
    return new Promise((resolve, reject) => {
        const options = {
            method: method,
            headers: new Headers({
                'Content-type': 'application/json',
                Accept: 'application/json',
                Authentication: Bearer + Storage.get('token')
            }),
            body: data,
            ...additional_options
        };
        //console.log('url ', controller);
        fetch(API.is + controller, options)
            .then((res: Response) => {
                return res.json();
            })
            .then((res: any) => {
                resolve(res);
            })
            .catch((error: Error) => {
                reject(error);
                //error ? setTimeout(request(controller, method), 1000) : reject(error);
            });
    });
};


const http = {
    get: httpGET,
    post: httpPOST,
    update: httpUPDATE,
    delete: httpDELETE,
}

export {
    http,
    httpGET,
    httpPOST,
    httpUPDATE,
    httpDELETE
}

