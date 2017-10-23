import React, { Component } from 'react';

class QRCode extends Component {

    constructor(props) {
      super(props);
      this.state = {
        content: 'test',
      }
    }

    loadQRCode(data) {
      var source = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + encodeURI(data);
      return (<img src={source} alt="QRCode" className="qr-image"/>);
    }

    render() {
      return (
        <div className="qr-encoder col-sm-4">
          <div className="title">
              QR Encoder
          </div>
          <div className ="form-inline qr-input-group">
            <div className ="form-group">
              <input
                className="form-control qr-input"
                placeholder="Data to encode"
                onChange = { event => this.setState({content: event.target.value})}
              />
            </div>
          </div>
          {this.loadQRCode(this.state.content)}
      </div>
      )
    }
}

export default QRCode;
