
import React from 'react'
import News from '@/components/News'

export async function generateMetadata({ params }) {
  const { newscategory } = await params;

  return {
    title: `${newscategory.charAt(0).toUpperCase() + newscategory.slice(1)}-WorldNews`,
    description: `Latest ${newscategory} news updates .`,
  };
}

const Newscategory =async ({params}) => {
    const { newscategory }=await params
    const apikey=process.env.REACT_APP_NEWS_API;
    
  return (
    <News apikey={apikey} key='general' pageSize={12} country='us' category={newscategory}/>
  )
}

export default Newscategory