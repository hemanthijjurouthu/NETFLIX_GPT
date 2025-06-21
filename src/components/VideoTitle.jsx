import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video absolute pt-36 px-12 text-white bg-gradient-to-r from-black">
        <h1 className="text-4xl font-bold w-1/4">{title}</h1>
        <p className="py-6 text-lg w-1/4 font-bold">{overview}</p>
        <div>
            <button className="bg-gray-500 text-white rounded-lg p-3 px-8 opacity-50 hover:opacity-100">▶️ Play</button>
            <button className="mx-2 bg-gray-500 text-white transparent opacity-50 p-3 px-8 hover:opacity-100 rounded-lg">&#x2139; More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle