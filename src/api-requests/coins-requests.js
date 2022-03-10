import { APIURL } from "../../App";

export default async function getCoins(){
    const request = await fetch(APIURL);
    const cryptosData = await request.json();
    return cryptosData;
}