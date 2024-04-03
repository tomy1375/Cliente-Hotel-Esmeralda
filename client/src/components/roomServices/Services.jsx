import React from 'react';
import dataServices from '../../../data/dataServices';
import { Link } from 'react-router-dom';

const Services = () => {
  const imageStyle = {
    width: '1200px',
    height: '700px',
    objectFit: 'cover', 
    padding: '100px',
    marginLeft: '-40px', 
    marginRight: '-10px'
  };

  const borderBoxStyle = {
    width: '1200px', 
    height: '600px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: '80px', 
  };

  return (
    <div className="container mx-auto mt-4 mb-4 space-y-8 overflow-y-hidden">

      <div className="flex justify-start items-start" style={{ width: '200%' }}>
        <div className="item" style={{ marginLeft: '-10%' }}>
          <div style={borderBoxStyle}>
            <img src={dataServices[0].Url} alt={dataServices[0].name} style={imageStyle} />
          </div>
        </div>
        <div className="item flex flex-col ml-20 mt-10 p-10 w-1/5"> 
          <div className="border-box-style"> 
            <h1 className='text-7xl text-center font-bold mt-0 mb-6'>{dataServices[0].name}</h1> 
            <p className="text-4xl leading-relaxed mb-4">{dataServices[0].description}</p> 
            <ul className="list-disc pl-6 mb-6"> 
              {dataServices[0].services.map((service, index) => (
                <li key={index} className="text-3xl">{service}</li> 
              ))}
            </ul>
            <div className="border border-gray-400 bg-d rounded-md px-4 py-2 text-center w-40 mx-auto">
              {dataServices[0].price} 
            </div>
          </div>
        </div>
      </div>  

      <div className="flex justify-end items-center" style={{ width: '120%' }}>
        <div className="item flex flex-col ml-10 mt-2"> 
          <div className="border-box-style"> 
            <h1 className='text-7xl text-center font-bold mt-0 mb-6'>{dataServices[1].name}</h1> 
            <p className="text-4xl leading-relaxed mb-4">{dataServices[1].description}</p> 
            <ul className="list-disc pl-6 mb-6"> 
              {dataServices[1].services.map((service, index) => (
                <li key={index} className="text-3xl">{service}</li> 
              ))}
            </ul>
            <div className="border border-gray-400 bg-d rounded-md px-4 py-2 text-center w-40 mx-auto">
              {dataServices[1].price} 
            </div>
          </div>
        </div>
        <div className="item" style={{ marginRight: '-20px' }}> 
          <div style={borderBoxStyle}>
            <img src={dataServices[1].Url} alt={dataServices[1].name} style={imageStyle} />
          </div>
        </div>
      </div>

      <div className="flex justify-start items-start" style={{ width: '200%' }}>
        <div className="item" style={{ marginLeft: '-10%' }}>
          <div style={borderBoxStyle}>
            <img src={dataServices[2].Url} alt={dataServices[2].name} style={imageStyle} />
          </div>
        </div>
        <div className="item flex flex-col ml-10 mt-8 p-10 w-1/4"> 
          <div className="border-box-style"> 
            <h1 className='text-7xl text-center font-bold mt-0 mb-6'>{dataServices[2].name}</h1> 
            <p className="text-4xl leading-relaxed mb-4">{dataServices[2].description}</p> 
            <ul className="list-disc pl-6 mb-6"> 
              {dataServices[2].services.map((service, index) => (
                <li key={index} className="text-3xl">{service}</li> 
              ))}
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
             <div>
                <Link to='/restaurant'>
                <button className="border border-gray-400 bg-d text-black font-bold py-2 px-4 rounded hover:text-white w-40">
                BOOK
                </button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="flex justify-end items-center" style={{ width: '120%' }}>
        <div className="item flex flex-col ml-2 mt-2"> 
          <div className="border-box-style"> 
            <h1 className='text-7xl text-center font-bold mt-0 mb-6'>{dataServices[3].name}</h1> 
            <p className="text-4xl leading-relaxed mb-4">{dataServices[3].description}</p> 
            <ul className="list-disc pl-6 mb-6"> 
              {dataServices[3].services.map((service, index) => (
                <li key={index} className="text-3xl">{service}</li> 
              ))}
            </ul>
            <div className="border border-gray-400 bg-d rounded-md px-4 py-2 text-center w-40 mx-auto">
              {dataServices[3].price} 
            </div>
          </div>
        </div>
        <div className="item" style={{ marginRight: '-10px' }}> 
          <div style={borderBoxStyle}>
            <img src={dataServices[3].Url} alt={dataServices[3].name} style={imageStyle} />
          </div>
        </div>
      </div>

        <div className="flex justify-start items-start" style={{ width: '200%' }}>
        <div className="item" style={{ marginLeft: '-10%' }}>
          <div style={borderBoxStyle}>
            <img src={dataServices[4].Url} alt={dataServices[4].name} style={imageStyle} />
          </div>
        </div>
        <div className="item flex flex-col ml-20 mt-10 p-10 w-1/5"> 
          <div className="border-box-style"> 
            <h1 className='text-7xl text-center font-bold mt-0 mb-1'>{dataServices[4].name}</h1> 
            <p className="text-4xl leading-relaxed mb-4">{dataServices[4].description}</p> 
            <ul className="list-disc pl-6 mb-6"> 
              {dataServices[4].services.map((service, index) => (
                <li key={index} className="text-3xl">{service}</li> 
              ))}
            </ul>
            <div className="border border-gray-400 bg-d rounded-md px-4 py-2 text-center w-40 mx-auto">
              {dataServices[4].price} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
