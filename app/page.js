
import Image from "next/image";
import News from "@/components/News";

export default function Home() {

  return (
    <>
     <News key='general' pageSize={12} country='us' category='general'/>
     </>
  
  );
}
