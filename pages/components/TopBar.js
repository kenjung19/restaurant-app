// components/TopBar.js
import img from '../img/img.png'
import Image from 'next/image'
import SearchBox from './SearchBox';

const TopBar = ({ searchApi, setPlace }) => {
  return (
    <div className="topbar row" style={{ border: '1px solid #000000', padding: 10 }}>
      <div className="col" style={{ textAlign: 'left', maxWidth: 120 }}>
        <Image src={img} width={100} height={100} alt='' />
      </div>
      <div className="col" style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'left', paddingLeft: 30 }}>Website Name</div>
      <div className="col">
        <SearchBox searchApi={searchApi} setPlace={setPlace} />
      </div>
    </div>
  );
}

export default TopBar;
