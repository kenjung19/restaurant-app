// pages/index.js
import { useState, useEffect } from 'react'
import Link from 'next/link';
import TopBar from './components/TopBar';
import Body from './components/Body';
import Footer from './components/Footer';
import axios from 'axios'

const Home = () => {

  const [place, setPlace] = useState('')
  const [resdata, setResdata] = useState([])
  const [mockuse, setMockuse] = useState(true)

  const searchApi = async () => {
    const res = await axios.get(`http://localhost:4000/places?query=${place}`, {
      headers: {
        'api-key': 'AIzaSyAuUj-2rfFOQxhMPVKQSe-xI-gt3-Hrpws'
      }
    });
    setResdata(res.data)
    setMockuse(false)
  }

  return (
    <div className="container text-center">
      <TopBar searchApi={searchApi} setPlace={setPlace} />
      <Body place={place} resdata={resdata} mockuse={mockuse} />
      <Footer />
    </div>

  );
}

export default Home;
