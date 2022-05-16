import React from 'react'
import CardItem from './CardItem'
import {CardContainer, Card} from "./styles/CardGrid.styled";


const CardGrid = ({assets}) => {
  return (<div className='card-grid'>{assets.map(asset=>(
    <CardContainer>
        <Card>
            <CardItem key={asset.id} asset={asset}></CardItem>
        </Card>
    </CardContainer>
  ))}
    </div>)
}

export default CardGrid;