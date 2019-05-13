import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import MenuToggle from './components/MenuToggle';
import Map from './containers/Map';
import SideMenu from './containers/SideMenu';
import MenuContainer from './components/MenuContainer';

const allServicesProvidedQuery = gql`
{
  getAllProvidedServices {
    title
    description
    username
    address
    addressCoords
    photoUrl
  }
}
`;

class App extends Component {
  render() {
    return (
      <Query query={allServicesProvidedQuery}>
        {({
          loading, error, data, refetch, subscribeToMore,
        }) => (
          <div className="app-layout">
              <SideMenu
                refetchNeeded={this.props.refetchNeeded}
                data={data}
                neededServices={this.props.servicesNeeded}
                refetch={refetch}
              />
              <MenuContainer
                data={data}
                refetchNeeded={this.props.refetchNeeded}
                refetch={refetch}
              />
              <MenuToggle />
              <Map
                subscribeToMoreNeeded={this.props.subscribeToMoreNeeded}
                neededServices={this.props.servicesNeeded}
                subscribeToMoreProvided={subscribeToMore}
                data={data}
              />
            </div>
        )
        }
      </Query>
    );
  }
}


export default App;
