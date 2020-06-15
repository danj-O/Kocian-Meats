import React from 'react'
import { Link } from 'gatsby-plugin-modal-routing'

import './MeatItem.styles.scss'


export default function MeatItem({ data, linkFolder }) {
  // console.log('data', data)
  return (
    <div className='meat-item'>
      <Link to={`${linkFolder}${data.slug}`} asModal state={{noScroll: true}}>
        <div>
          {data.name ? data.name: data.title}
        </div>
        <div>
          {
            data.price 
              ? `$${data.price} ${(data.fvpPrice || data.sfvpPrice || data.boxPrice) ? 'click for value pricing' : ''}`
              : data.fvpPrice 
                ? `FVP $${data.fvpPrice} ${(data.sfvpPrice || data.boxPrice) ? 'click for value pricing' : ''} ` 
                : data.sfvpPrice 
                  ? `SFVP $${data.sfvpPrice} ${data.boxPrice ? 'click for value pricing' : ''}` 
                  : `BOX $${data.boxPrice}`
          }
        </div>

      </Link>
    </div>
  )
}
