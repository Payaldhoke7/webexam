import { useState }from "react";
export default function App()
{
  const [message,setmessage]=userState("");
  const [messageList,setmessageList]=useState([]);
  const processmessage=(e)=>{
    setmessage(e.target.value);

  }
  const handlesend=()=>{
    const newList= [message,...messageList];
    setmessageList(newList);
    setmessage("");
    }

    return <div>
      <header className="bg-dark text-light p-3">
        MyChatApp by Payal Dhoke 079_kharghar
      </header>
      <div>
        <input className="forms-control mt-2" type="text" value={message} placeholder="chat here..."onChaange={processmessage}/>
        < input className="bg btm-primary w-100 mt-2" type="button" value="send" onClick={handlesend}/>

      </div>
      {messageList.map((item,index)=>(
        <div className="bg-secondary bg-opacity-50 mt-1" key={index}>
          
          {item}
          
          </div>
>      ))}
    </div>
}
