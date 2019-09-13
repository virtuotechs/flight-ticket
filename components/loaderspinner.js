import React,{Component} from 'react';

class Loaderspinner extends Component
{
    render()
    {
        return(
                <div style={{textAlign:'center',height:'100%',margin:'25% 0'}}>
                    <img src='./static/images/loader1.gif' height="100" width="100"/>
                    <br/>Please be patient!
                </div>
        )
    }
}

export default Loaderspinner;  