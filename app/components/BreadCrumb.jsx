import React, {Component} from 'react'

class BreadCrumb extends Component {
    render() {
        return (
            <div className="mt10">
                <a className="bread-crumb font-medium thin-font" href="#" onClick={this.props.onClick}>
                    &lt; {this.props.dataTitle}
                </a>
            </div>
        );
    }
}

export default BreadCrumb