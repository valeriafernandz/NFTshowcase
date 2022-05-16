import React from 'react';


const CardItem = ({asset}) => {
  return (
    <a href={asset.external_url}>
      <div className="card-container">
        <div className="card-header">
          <img alt='' className='card-img' src={asset.banner_image_url}></img>
        </div>
        <div className='card-body'>
           <div className="card-info">
              <h5 className="card-name">{asset.name}</h5>
              <span className="nft-id">Average Price: {asset.stats.seven_day_average_price}</span>
           </div>
            <div className="nft-bid">
              <h5>Total sales</h5>
              <span className='bid'>{asset.stats.total_sales}</span>
            </div>
        </div>
      </div>
    </a>
  
  )
}

export default CardItem