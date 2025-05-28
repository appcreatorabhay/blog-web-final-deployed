import React from 'react'
import Hero from '../Home/Hero'
import Trending from '../Home/Trending'
import Devotional from '../Home/Devotional'
import PopularCreator from '../Home/PopularCreator'
function Home() {
  return (
    <div>
      <Hero/>
      <Trending/>
      <Devotional/>
      <PopularCreator/>

    </div>
  )
}

export default Home
