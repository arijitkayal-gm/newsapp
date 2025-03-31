
import Image from "next/image";
import News from "@/components/News";

export default function Home() {
  const apikey = process.env.NEWS_API;

  //console.log("News API Key:", apikey);

  return (
    <>
     <News apikey={apikey} key='general' pageSize={12} country='us' category='general'/>
     </>
  
  );
}
