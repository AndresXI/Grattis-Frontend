import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';


export default class ServiceListModal extends Component {
  render() {
    let serviceList;
    if (this.props.data.getAllNeededServices) {
      serviceList = this.props.data.getAllNeededServices.map(
        service => (
          <>
            <p>{service.title}, by: {service.username} - Address: {service.address}</p>
            <hr />
          </>
        ),
      );
    }
    return (
      <Modal open={this.props.open}>
        <Modal.Header>Current List of Services Needed</Modal.Header>
        <Modal.Content>
          {serviceList}
          <Button onClick={this.props.onClose}>Close</Button>
        </Modal.Content>
      </Modal>
    );
  }
}
