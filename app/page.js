
import Image from "next/image";
import News from "@/components/News";

export default function Home() {


  //console.log("News API Key:", apikey);

  return (
    <>
     <News key='general' pageSize={12} country='us' category='general'/>
     </>
  
  );
}
