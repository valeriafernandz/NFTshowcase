import React from 'react'
import CardItem from './CardItem'
import {CardContainer, Card} from "./styles/CardGrid.styled";


const CardGrid = ({assets}) => {
  return (<CardContainer>{assets.map(asset=>(
        <Card>
            <CardItem key={asset.id} asset={asset}></CardItem>
        </Card>
  ))}
    </CardContainer>)
}

export default CardGrid;