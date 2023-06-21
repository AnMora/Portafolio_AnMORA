import React, { Component } from 'react';
import './CSS/loading.css';
import $  from 'jquery';
window.jQuery = $;

export class Loading extends Component {
    componentDidMount(){
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    }

    render() {
        return (
            <>
                <div id="preloader">
                    <div class="wrapper">
                        <img src="./multimedia/ANllMllRA.png" className="cssload-loader" alt="Proyecto MllRA" />
                    </div>
                </div>
            </>
        )
    }
}

export default Loading;