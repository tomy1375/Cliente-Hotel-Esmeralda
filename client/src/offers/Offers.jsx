import React from 'react';
import dataOffers from '../../data/dataOffers';

const Offers = () => {
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
    <div className="container mx-auto mt-4 mb-4 space-y-8">

      <div className="flex justify-start items-start" style={{ width: '200%' }}>
        <div className="item" style={{ marginLeft: '-10%' }}>
          <div style={borderBoxStyle}>
            <img src={dataOffers[0].Url} alt={dataOffers[0].name} style={imageStyle} />
          </div>
        </div>
        <div className="item flex flex-col ml-20 mt-10 p-10 w-1/5"> 
          <div className="border-box-style"> 
            <h1 className='text-7xl text-center font-bold mt-0 mb-6'>{dataOffers[0].name}</h1> 
            <p className="text-4xl leading-relaxed mb-4">{dataOffers[0].description}</p> 
            <ul className="list-disc pl-6 mb-6"> 
              {dataOffers[0].services.map((service, index) => (
                <li key={index} className="text-3xl">{service}</li> 
              ))}
            </ul>
            <div className="border border-gray-400 rounded-md px-4 py-2 text-center w-40 mx-auto">
              {dataOffers[0].price} 
            </div>
          </div>
        </div>
      </div>  

      <div className="flex justify-end items-center" style={{ width: '120%' }}>
        <div className="item flex flex-col ml-10 mt-10"> 
          <div className="border-box-style"> 
            <h1 className='text-7xl text-center font-bold mt-0 mb-6'>{dataOffers[1].name}</h1> 
            <p className="text-4xl leading-relaxed mb-4">{dataOffers[1].description}</p> 
            <ul className="list-disc pl-6 mb-6"> 
              {dataOffers[1].services.map((service, index) => (
                <li key={index} className="text-3xl">{service}</li> 
              ))}
            </ul>
            <div className="border border-gray-400 rounded-md px-4 py-2 text-center w-40 mx-auto">
              {dataOffers[1].price} 
            </div>
          </div>
        </div>
        <div className="item" style={{ marginRight: '-20px' }}> 
          <div style={borderBoxStyle}>
            <img src={dataOffers[1].Url} alt={dataOffers[1].name} style={imageStyle} />
          </div>
        </div>
      </div>

      <div className="flex justify-start items-start" style={{ width: '200%' }}>
        <div className="item" style={{ marginLeft: '-10%' }}>
          <div style={borderBoxStyle}>
            <img src={dataOffers[2].Url} alt={dataOffers[2].name} style={imageStyle} />
          </div>
        </div>
        <div className="item flex flex-col ml-20 mt-20 p-10 w-1/5"> 
          <div className="border-box-style"> 
            <h1 className='text-7xl text-center font-bold mt-0 mb-6'>{dataOffers[2].name}</h1> 
            <p className="text-4xl leading-relaxed mb-4">{dataOffers[2].description}</p> 
            <ul className="list-disc pl-6 mb-6"> 
              {dataOffers[2].services.map((service, index) => (
                <li key={index} className="text-3xl">{service}</li> 
              ))}
            </ul>
            <div className="border border-gray-400 rounded-md px-4 py-2 text-center w-40 mx-auto">
              {dataOffers[2].price} 
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center" style={{ width: '120%' }}>
        <div className="item flex flex-col ml-10 mt-10"> 
          <div className="border-box-style"> 
            <h1 className='text-7xl text-center font-bold mt-0 mb-6'>{dataOffers[3].name}</h1> 
            <p className="text-4xl leading-relaxed mb-4">{dataOffers[3].description}</p> 
            <ul className="list-disc pl-6 mb-6"> 
              {dataOffers[3].services.map((service, index) => (
                <li key={index} className="text-3xl">{service}</li> 
              ))}
            </ul>
            <div className="border border-gray-400 rounded-md px-4 py-2 text-center w-40 mx-auto">
              {dataOffers[3].price} 
            </div>
          </div>
        </div>
        <div className="item" style={{ marginRight: '-10px' }}> 
          <div style={borderBoxStyle}>
            <img src={dataOffers[3].Url} alt={dataOffers[3].name} style={imageStyle} />
          </div>
        </div>
      </div>

        <div className="flex justify-start items-start" style={{ width: '200%' }}>
        <div className="item" style={{ marginLeft: '-10%' }}>
          <div style={borderBoxStyle}>
            <img src={dataOffers[4].Url} alt={dataOffers[4].name} style={imageStyle} />
          </div>
        </div>
        <div className="item flex flex-col ml-20 mt-20 p-10 w-1/5"> 
          <div className="border-box-style"> 
            <h1 className='text-7xl text-center font-bold mt-0 mb-6'>{dataOffers[4].name}</h1> 
            <p className="text-4xl leading-relaxed mb-4">{dataOffers[4].description}</p> 
            <ul className="list-disc pl-6 mb-6"> 
              {dataOffers[4].services.map((service, index) => (
                <li key={index} className="text-3xl">{service}</li> 
              ))}
            </ul>
            <div className="border border-gray-400 rounded-md px-4 py-2 text-center w-40 mx-auto">
              {dataOffers[4].price} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
