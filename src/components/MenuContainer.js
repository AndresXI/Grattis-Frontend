import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import ProvidedServiceModalMobile from '../containers/ProvidedServiceModalMobile';
import ServiceListModalMobile from '../containers/ServiceListModalMobile';
import NeededServiceModalMobile from '../containers/NeededServiceModalMobile';
import ServiceNeededListModalMobile from '../containers/ServiceNeededListModalMobile';


export default class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceProvidedModal: false,
      serviceListModal: false,
      serviceNeededModal: false,
      serviceNeededListModal: false,
    };
  }

  handleProvidedServiceClick = () => {
    this.setState({ serviceProvidedModal: !this.state.serviceProvidedModal });
  };

  handleServiceListClick = () => {
    this.setState({ serviceListModal: !this.state.serviceListModal });
  }

  handleServiceNeededClick = () => {
    this.setState({ serviceNeededModal: !this.state.serviceNeededModal });
  }

  handleServicesNeededListClick = () => {
    this.setState({ serviceNeededListModal: !this.state.serviceNeededListModal });
  }

  render() {
    return (
      <div className="menu-container">
        <div className="menu-contents">
          <h1 className="title-mobile">Grattis</h1>
          <p className="app-description-mobile">Welcome to Grattis! Grattis is an effort to help those in need by
            providing free services. Simply create a new service your are willing to offer free of charge. A
            maker should show up on the map with the information you provided. Map markers appear live in real-time!
          </p>
          <Button color="blue" onClick={() => this.handleProvidedServiceClick()}>Provide a service</Button>
          <Button color="red" onClick={() => this.handleServiceNeededClick()}>Ask for a service</Button>
          <Button color="teal" onClick={() => this.handleServiceListClick()}>Services Provided</Button>
          <Button color="teal" onClick={() => this.handleServicesNeededListClick()}>Services Needed</Button>
          <ServiceListModalMobile
            data={this.props.data}
            onClose={this.handleServiceListClick}
            open={this.state.serviceListModal}
          />
          <ProvidedServiceModalMobile
            refetch={this.props.refetch}
            onClose={this.handleProvidedServiceClick}
            open={this.state.serviceProvidedModal}
          />
          <NeededServiceModalMobile
            refetchNeeded={this.props.refetchNeeded}
            onClose={this.handleServiceNeededClick}
            open={this.state.serviceNeededModal}
          />
          <ServiceNeededListModalMobile
            data={this.props.neededServices}
            onClose={this.handleServicesNeededListClick}
            open={this.state.serviceNeededListModal}
          />
        </div>
      </div>
    );
  }
}
