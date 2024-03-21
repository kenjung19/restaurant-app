// components/Body.js
import img from '../img/img.png'
import Image from 'next/image'
import MockData from './MockData';
//import PlaceData from './PlaceData';

const Body = ({ place, resdata, mockuse }) => {

  return (
    <div className="body row" style={{ borderLeft: '1px solid #000000', borderRight: '1px solid #000000', padding: 10 }}>
      <div className="col"></div>
      <div className="col-8" style={{ textAlign: 'left' }}>
        {mockuse ?
          (
            <>
              <MockData id='1' />
              <MockData id='2' />
              <MockData id='3' />
            </>
          ) : (
            resdata.map(obj => (
              <div className="row" style={{ marginBottom: 30 }}>
                <div className="col" style={{ maxWidth: 220 }}>
                  <Image src={img} width={200} height={200} alt='' />
                </div>
                <div className="col" style={{ textAlign: 'left' }}>
                  <div style={{ marginBottom: 10 }}>Name : {obj.name}</div>
                  <div style={{ marginBottom: 10 }}>Address : {obj.address}</div>
                  <div className="row">
                    <div className="col" style={{ maxWidth: 100 }}>Location : </div>
                    <div className="col">
                      lat : {obj.location.lat} <br />
                      lng : {obj.location.lng}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
      </div>
      <div className="col"></div>
    </div >
  );
}

export default Body;
