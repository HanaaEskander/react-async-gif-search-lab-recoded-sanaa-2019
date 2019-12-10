import React from 'react';

export default class GifList extends React.PureComponent{
   
    render(){
        const {imgs} = this.props;
       
        return(
                <ul>
                    {imgs.map(img=><li><img src={img.images.original.url} /></li>)}
                </ul>
        );
    }
}