import Data from "../data/data.json";


export default function Bai2() {
    let arr = [];
    let length=24;
    for (let i = 0 ; i < length ; i ++) {
      let newobj = new Object({name:Data[i],index:i})
      arr.push(newobj)
      }
    
    return (
        <>
        {arr.map((item,index)=>(
          <li key={item.index}>{item.name}</li>
        ))}
        </>
    )
}