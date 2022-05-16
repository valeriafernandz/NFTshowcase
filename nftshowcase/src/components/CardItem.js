import React from 'react';
import {CardLink, CardImgContainer, CardBody, NFTSales} from "./styles/CardGrid.styled";


const CardItem = ({asset}) => {
  return (
    <CardLink href={asset.external_url}>
      <div className="card-container">
        <CardImgContainer url={asset.banner_image_url}/>
          <CardBody>
            <h5 className="card-name">{asset.name}</h5>
            <span className="nft-id">Average Price: {asset.stats.seven_day_average_price}</span>
            <NFTSales>
              <span className='bid'>Total sales</span>
              <span className='bid'>{asset.stats.total_sales}</span>
            </NFTSales>
          </CardBody>
      </div>
    </CardLink>
  
  )
}

export default CardItem