import React, { Component } from 'react';
import { Modal, Button } from 'semantic-ui-react';

export default class ServiceListModalMobile extends Component {
  render() {
    let serviceList;
    if (this.props.data.getAllProvidedServices) {
      serviceList = this.props.data.getAllProvidedServices.map(
        service => (
          <>
            <li key={service.id}>{service.title}, by: {service.username} - Address: {service.address}</li>
          </>
        ),
      );
    }
    return (
      <Modal open={this.props.open}>
        <Modal.Header>Current List of Services Provided</Modal.Header>
        <Modal.Content>
          {serviceList}
          <Button onClick={this.props.onClose}>Close</Button>
        </Modal.Content>
      </Modal>
    );
  }
}
