import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';


export default class ServiceListModal extends Component {
  render() {
    let serviceList;
    console.log('list i s', this.props.data.getAllNeededServices);
    if (this.props.data.getAllNeededServices) {
      serviceList = this.props.data.getAllNeededServices.map(
        service => <p>{service.title} By: {service.username} - Address: {service.address}</p>,
      );
    }
    return (
      <Modal open={this.props.open}>
        <Modal.Header>Current List of Services Needed</Modal.Header>
        <Modal.Content>
          {serviceList}
          <Button onClick={this.props.onClose}>Cancel</Button>
        </Modal.Content>
      </Modal>
    );
  }
}
