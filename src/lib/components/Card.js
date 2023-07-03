import React from 'react';
  
const Card = (props) => {  
  return (
    <div style={{width: '600px', height: '710px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
		<img alt="" style={{alignSelf: 'stretch', flex: '1 1 0'}} src={props.imgUrl} />
		<div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
		<div style={{color: 'black', fontSize: 16, fontFamily: 'Helvetica', fontWeight: '500', wordWrap: 'break-word'}}>{props.productTitle}</div>
		<div style={{color: '#6D6D6D', fontSize: 16, fontFamily: 'Helvetica', fontWeight: '400', wordWrap: 'break-word'}}>{props.productDesc}</div>
		</div>
		<div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'flex'}}>
		<div style={{color: 'black', fontSize: 16, fontFamily: 'Helvetica', fontWeight: '500', wordWrap: 'break-word'}}>{props.fullPrice}</div>
		<div style={{color: '#6D6D6D', fontSize: 16, fontFamily: 'Helvetica', fontWeight: '400', textDecoration: 'line-through', wordWrap: 'break-word'}}>{props.discountPrice}</div>
		</div>
	</div>
  )

}

export default Card;


