import React from 'react'

const About = () => {
  return (
    <div className="pt-24 px-6 min-h-screen text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-6">About WorldNews</h1>
      
      <p className="text-lg text-center max-w-2xl leading-relaxed">
        Welcome to <span className="font-semibold">WorldNews</span> – your one-stop destination for the latest and most reliable global news. 
        Our platform is designed to keep you informed with real-time updates across various categories, 
        including politics, technology, business, sports, and entertainment.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Our Mission</h2>
      <p className="text-lg text-center max-w-2xl leading-relaxed mt-2">
        At WorldNews, we aim to provide fast, accurate, and unbiased news coverage. 
        We believe in the power of journalism to educate and empower people worldwide.
      </p>

      <h2 className="text-2xl font-semibold mt-8">Why Choose Us?</h2>
      <ul className="text-lg max-w-2xl text-center list-disc list-inside mt-2">
        <li>🔹 Trusted sources and verified news</li>
        <li>🔹 Up-to-the-minute updates</li>
        <li>🔹 Clean and user-friendly interface</li>
      </ul>

      <p className="text-lg text-center max-w-2xl leading-relaxed mt-6">
        Stay informed. Stay ahead. Explore the world with <span className="font-semibold">WorldNews</span>.
      </p>
    </div>
  )
}

export default About