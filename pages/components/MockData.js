// components/MockData.js
import img from '../img/img.png'
import Image from 'next/image'

const MockData = ({ id }) => {
  return (
    <div className="row" style={{ marginBottom: 30 }}>
      <div className="col" style={{ maxWidth: 220 }}>
        <Image src={img} width={200} height={200} alt='' />
      </div>
      <div className="col" style={{ textAlign: 'left' }}>
        <div style={{ marginBottom: 10 }}>Title {id}</div>
        <div style={{ marginBottom: 10 }}>Some default text to fill some space, and something more so there is more text</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt is culpa qui offcia decerunt mollit anlm id est</div>
      </div>
    </div>
  );
}

export default MockData;
