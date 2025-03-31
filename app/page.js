
import Image from "next/image";
import News from "@/components/News";

export default function Home() {
  const apikey=process.env.REACT_APP_NEWS_API;

  return (
    <>
     <News apikey={apikey} key='general' pageSize={12} country='us' category='general'/>
     </>
  
  );
}
