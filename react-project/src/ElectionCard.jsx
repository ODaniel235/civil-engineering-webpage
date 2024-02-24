import { ElectionBackend } from "./FakeBackendApi";
import { v4 as uuidv4 } from "uuid";

export function ElectionPeeps(){
    return(
        <>
    {ElectionBackend.map((cand)=>(
        <div key={uuidv4()} className="p-3 flex h-fit w-fit flex-shrink"></div>
    ))}</>);
}