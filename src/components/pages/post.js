import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Hidden from '@material-ui/core/Hidden';

export default class Post extends Component {
    render(){
        return (
            <div>
            <Helmet
                title="Thank you! | Lawton Under 40" 
            />
            <Hidden smDown>
                <div className="page-transition-top"></div>
                <div className="page-transition-bottom"></div>
            </Hidden>
            <div className="pageContent">
                <div className="title-container">
                    <h1>Thank You!</h1>
                </div>
                <div className="innerContent">
                    <div className="wrap">
                        <p>Cupidatat reprehenderit culpa amet voluptate commodo commodo sit esse consectetur culpa nulla. Nisi id aute laborum Lorem reprehenderit tempor. Cillum qui laboris reprehenderit ad labore quis dolor minim. Eiusmod consequat excepteur culpa pariatur. Pariatur elit laboris labore eiusmod.</p>
                    </div>
                </div>
            </div>
           </div>
        )
    }
}