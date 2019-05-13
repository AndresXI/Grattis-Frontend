import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

import ProvidedServiceModal from './ProvidedServiceModal';
import ServiceListModal from './ServiceListModal';
import NeededServiceModal from './NeededServiceModal';
import ServiceNeededListModal from './ServiceNeededListModal';


export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceProvidedModal: false,
      serviceListModal: false,
      serviceNeededModal: false,
      serviceNeededList: false,
    };
  }

  handleProvideServiceClick = () => {
    this.setState({ serviceProvidedModal: !this.state.serviceProvidedModal });
  }

  handleServiceListClick = () => {
    this.setState({ serviceListModal: !this.state.serviceListModal });
  }

  handleServiceNeededClick = () => {
    this.setState({ serviceNeededModal: !this.state.serviceNeededModal });
  }

  handleServiceNeededListClick = () => {
    this.setState({ serviceNeededList: !this.state.serviceNeededList });
  }


  render() {
    return (
      <div className="side-menu">
        <h1 className="title">Grattis</h1>
        <p className="app-description">Welcome to Grattis! Grattis is an effort to help those in need by
          providing free services. Simply create a new service your are willing to offer free of charge. A
          maker should show up on the map with the information you provided. Map markers appear live in real-time!
        </p>
        <Button color="blue" onClick={() => this.handleProvideServiceClick()}>Provide a service</Button>
        <Button color="red" onClick={() => this.handleServiceNeededClick()}>Ask for a service</Button>
        <Button color="teal" onClick={() => this.handleServiceListClick()}>Services Provided</Button>
        <Button color="teal" onClick={() => this.handleServiceNeededListClick()}>Services Needed</Button>
        <NeededServiceModal
          refetchNeeded={this.props.refetchNeeded}
          onClose={this.handleServiceNeededClick}
          open={this.state.serviceNeededModal}
        />
        <ServiceListModal
          data={this.props.data}
          onClose={this.handleServiceListClick}
          open={this.state.serviceListModal}
        />
        <ProvidedServiceModal
          refetch={this.props.refetch}
          onClose={this.handleProvideServiceClick}
          open={this.state.serviceProvidedModal}
        />
        <ServiceNeededListModal
          data={this.props.neededServices}
          onClose={this.handleServiceNeededListClick}
          open={this.state.serviceNeededList}
        />
        <div className="legend-container">
          <h2>Legend</h2>
          <div className="provided-container">
            <img
              className="provided-marker"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0%0D%0Ab3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZl%0D%0AcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEi%0D%0AIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93%0D%0Ad3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEy%0D%0AIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFj%0D%0AZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzMwM0M0MjsiIGQ9Ik0yNTYsMEMxNjEu%0D%0AODk2LDAsODUuMzMzLDc2LjU2Myw4NS4zMzMsMTcwLjY2N2MwLDI4LjI1LDcuMDYzLDU2LjI2LDIw%0D%0ALjQ5LDgxLjEwNEwyNDYuNjY3LDUwNi41DQoJYzEuODc1LDMuMzk2LDUuNDQ4LDUuNSw5LjMzMyw1%0D%0ALjVjMy44ODUsMCw3LjQ1OC0yLjEwNCw5LjMzMy01LjVsMTQwLjg5Ni0yNTQuODEzYzEzLjM3NS0y%0D%0ANC43NiwyMC40MzgtNTIuNzcxLDIwLjQzOC04MS4wMjENCglDNDI2LjY2Nyw3Ni41NjMsMzUwLjEw%0D%0ANCwwLDI1NiwweiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzFFODhFNTsiIGQ9Ik0zODcuNTEsMjQx%0D%0ALjQ0OEwyNTYsNDc5LjI5MmwtMTMxLjQ1OC0yMzcuNzVjLTExLjY5OC0yMS42NDYtMTcuODc1LTQ2%0D%0ALjE1Ni0xNy44NzUtNzAuODc1DQoJYzAtODIuMzQ0LDY2Ljk5LTE0OS4zMzMsMTQ5LjMzMy0xNDku%0D%0AMzMzczE0OS4zMzMsNjYuOTksMTQ5LjMzMywxNDkuMzMzQzQwNS4zMzMsMTk1LjM4NSwzOTkuMTU2%0D%0ALDIxOS44OTYsMzg3LjUxLDI0MS40NDh6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMzAzQzQyOyIg%0D%0AZD0iTTM2NS4yNSwxMzguOTc5bC0yMC40MzgtNS4wODNsMTAuODMzLTE4LjA4M2MyLjUyMS00LjE4%0D%0AOCwxLjg1NC05LjU2My0xLjYwNC0xMy4wMjFsLTMwLjE2Ny0zMC4xNjcNCgljLTMuNDc5LTMuNS04%0D%0ALjgzMy00LjEwNC0xMy4wMjEtMS42MDRsLTE4LjA4MywxMC44MzNsLTUuMDgzLTIwLjQzOGMtMS4x%0D%0AODgtNC43NS01LjQ1OC04LjA4My0xMC4zNTQtOC4wODNoLTQyLjY2Nw0KCWMtNC44OTYsMC05LjE2%0D%0ANywzLjMzMy0xMC4zNTQsOC4wODNsLTUuMTA0LDIwLjQzOGwtMTguMDgzLTEwLjgzM2MtNC4xODgt%0D%0AMi41LTkuNTQyLTEuODk2LTEzLjAyMSwxLjYwNGwtMzAuMTY3LDMwLjE2Nw0KCWMtMy40NTgsMy40%0D%0ANTgtNC4xMjUsOC44MzMtMS42MDQsMTMuMDIxbDEwLjgzMywxOC4wODNsLTIwLjQxNyw1LjA4M2Mt%0D%0ANC43NSwxLjE4OC04LjA4Myw1LjQ1OC04LjA4MywxMC4zNTRWMTkyDQoJYzAsNC44OTYsMy4zMzMs%0D%0AOS4xNjcsOC4wODMsMTAuMzU0bDIwLjQzOCw1LjEwNGwtMTAuODU0LDE4LjA4M2MtMi41MjEsNC4x%0D%0AODgtMS44NTQsOS41NjMsMS42MDQsMTMuMDIxbDMwLjE2NywzMC4xNjcNCgljMy40NzksMy40Nzks%0D%0AOC44NzUsNC4xMDQsMTMuMDIxLDEuNjA0bDE4LjA4My0xMC44NTRsNS4xMDQsMjAuNDM4YzEuMTg4%0D%0ALDQuNzUsNS40NTgsOC4wODMsMTAuMzU0LDguMDgzaDQyLjY2Nw0KCWM0Ljg5NiwwLDkuMTY3LTMu%0D%0AMzMzLDEwLjM1NC04LjA4M2w1LjA4My0yMC40MTdsMTguMDgzLDEwLjgzM2M0LjEyNSwyLjUsOS41%0D%0ANDIsMS44NzUsMTMuMDIxLTEuNjA0bDMwLjE2Ny0zMC4xNjcNCgljMy40NTgtMy40NTgsNC4xMjUt%0D%0AOC44MzMsMS42MDQtMTMuMDIxbC0xMC44MzMtMTguMDgzbDIwLjQzOC01LjEwNGM0Ljc1LTEuMTg4%0D%0ALDguMDgzLTUuNDU4LDguMDgzLTEwLjM1NHYtNDIuNjY3DQoJQzM3My4zMzMsMTQ0LjQzOCwzNzAs%0D%0AMTQwLjE2NywzNjUuMjUsMTM4Ljk3OXogTTI1NiwyMDIuNjY3Yy0xNy42NDYsMC0zMi0xNC4zNTQt%0D%0AMzItMzJzMTQuMzU0LTMyLDMyLTMyczMyLDE0LjM1NCwzMiwzMg0KCVMyNzMuNjQ2LDIwMi42Njcs%0D%0AMjU2LDIwMi42Njd6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTZFNkU2OyIgZD0iTTMzMy42Njcs%0D%0AMTUzLjEwNGMtMy41LTAuODc1LTYuMzMzLTMuNDU4LTcuNS02Ljg3NWMtMC45MzgtMi43NS0yLTUu%0D%0ANDE3LTMuMjI5LTcuOTc5DQoJYy0xLjU2My0zLjIyOS0xLjM5Ni03LjAyMSwwLjQ1OC0xMC4xMDRM%0D%0AMzMzLjA2MywxMTJsLTE4LjM5Ni0xOC4zOTZsLTE2LjE0Niw5LjY2N2MtMy4xMDQsMS44NzUtNi45%0D%0AMTcsMi0xMC4xMDQsMC40NTgNCgljLTIuNTYzLTEuMjI5LTUuMjI5LTIuMjkyLTcuOTc5LTMuMjI5%0D%0AYy0zLjQxNy0xLjE2Ny02LTQtNi44NzUtNy41TDI2OSw3NC42NjdoLTI2TDIzOC40MTcsOTNjLTAu%0D%0AODc1LDMuNS0zLjQ1OCw2LjMzMy02Ljg3NSw3LjUNCgljLTIuNzcxLDAuOTU4LTUuNDE3LDItOCwz%0D%0ALjI1Yy0zLjI1LDEuNS03LDEuMzc1LTEwLjA4My0wLjQ3OWwtMTYuMTQ2LTkuNjY3bC0xOC4zOTYs%0D%0AMTguMzc1bDkuNjg4LDE2LjE2Nw0KCWMxLjg1NCwzLjA4MywyLjAyMSw2LjkxNywwLjQzOCwxMC4x%0D%0ANjdjLTEuMjUsMi41NDItMi4yOTIsNS4xODgtMy4yMjksNy45MTdjLTEuMTY3LDMuNDE3LTQsNi03%0D%0ALjUsNi44NzVMMTYwLDE1Ny42Njd2MjYNCglsMTguMzEzLDQuNTgzYzMuNSwwLjg3NSw2LjMzMywz%0D%0ALjQ3OSw3LjUsNi44NzVjMC45MzgsMi43NSwyLDUuMzc1LDMuMjUsNy45MzhjMS41NjMsMy4yNSwx%0D%0ALjM5Niw3LjA2My0wLjQ1OCwxMC4xNDZsLTkuNjg4LDE2LjE2Nw0KCWwxOC4zNzUsMTguMzc1bDE2%0D%0ALjE2Ny05LjY4OGMzLjA2My0xLjg5Niw2Ljg3NS0yLjAyMSwxMC4xNDYtMC40NThjMi41NjMsMS4y%0D%0ANSw1LjE4OCwyLjMxMyw3LjkzOCwzLjI1YzMuMzk2LDEuMTY3LDYsNCw2Ljg3NSw3LjUNCglMMjQz%0D%0ALDI2Ni42NjdoMjZsNC41NjMtMTguMzEzYzAuODc1LTMuNSwzLjQ1OC02LjMzMyw2Ljg3NS03LjVj%0D%0AMi43MjktMC45MzgsNS4zNzUtMS45NzksNy45MTctMy4yMjkNCgljMy4yMDgtMS42MDQsNy4wODMt%0D%0AMS40NTgsMTAuMTY3LDAuNDM4bDE2LjE2Nyw5LjY4OGwxOC4zNzUtMTguMzk2bC05LjY2Ny0xNi4x%0D%0ANDZjLTEuODU0LTMuMDYzLTIuMDIxLTYuODU0LTAuNDc5LTEwLjA4Mw0KCWMxLjI1LTIuNTgzLDIu%0D%0AMjkyLTUuMjI5LDMuMjUtOGMxLjE2Ny0zLjQxNyw0LTYsNy41LTYuODc1TDM1MiwxODMuNjY3di0y%0D%0ANkwzMzMuNjY3LDE1My4xMDR6IE0yNTYsMjI0DQoJYy0yOS40MTcsMC01My4zMzMtMjMuOTE3LTUz%0D%0ALjMzMy01My4zMzNzMjMuOTE3LTUzLjMzMyw1My4zMzMtNTMuMzMzYzI5LjQxNywwLDUzLjMzMywy%0D%0AMy45MTcsNTMuMzMzLDUzLjMzM1MyODUuNDE3LDIyNCwyNTYsMjI0eiIvPg0KPGxpbmVhckdyYWRp%0D%0AZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItNDMu%0D%0AMzM2OSIgeTE9IjYzOC44OTc1IiB4Mj0iLTI4LjgzNTQiIHkyPSI2MzIuMTM1NyIgZ3JhZGllbnRU%0D%0AcmFuc2Zvcm09Im1hdHJpeCgyMS4zMzMzIDAgMCAtMjEuMzMzMyA5OTYuMzMzNCAxMzc5MS42Njcp%0D%0AIj4NCgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3Bh%0D%0AY2l0eTowLjIiLz4NCgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZG%0D%0AO3N0b3Atb3BhY2l0eTowIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPHBhdGggc3R5bGU9ImZpbGw6%0D%0AdXJsKCNTVkdJRF8xXyk7IiBkPSJNMjU2LDBDMTYxLjg5NiwwLDg1LjMzMyw3Ni41NjMsODUuMzMz%0D%0ALDE3MC42NjdjMCwyOC4yNSw3LjA2Myw1Ni4yNiwyMC40OSw4MS4xMDQNCglMMjQ2LjY2Nyw1MDYu%0D%0ANWMxLjg3NSwzLjM5Niw1LjQ0OCw1LjUsOS4zMzMsNS41YzMuODg1LDAsNy40NTgtMi4xMDQsOS4z%0D%0AMzMtNS41bDE0MC44OTYtMjU0LjgxMw0KCWMxMy4zNzUtMjQuNzYsMjAuNDM4LTUyLjc3MSwyMC40%0D%0AMzgtODEuMDIxQzQyNi42NjcsNzYuNTYzLDM1MC4xMDQsMCwyNTYsMHoiLz4NCjxnPg0KPC9nPg0K%0D%0APGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxn%0D%0APg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4N%0D%0ACjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
              alt="services provided key"
            />
            <p>Services Provided</p>
          </div>
          <div className="needed-container">
            <img
              className="needed-marker"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0%0D%0Ab3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZl%0D%0AcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEi%0D%0AIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93%0D%0Ad3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEy%0D%0AIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFj%0D%0AZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzMwM0M0MjsiIGQ9Ik0yNTYsMEMxNTAu%0D%0AMTM1LDAsNjQsODYuMTM1LDY0LDE5MmMwLDE0MS42NDYsMTc3LjE0NiwzMTAsMTg0LjY4OCwzMTcu%0D%0AMTA0DQoJQzI1MC43NCw1MTEuMDMxLDI1My4zNzUsNTEyLDI1Niw1MTJzNS4yNi0wLjk2OSw3LjMx%0D%0AMy0yLjg5NkMyNzAuODU0LDUwMiw0NDgsMzMzLjY0Niw0NDgsMTkyQzQ0OCw4Ni4xMzUsMzYxLjg2%0D%0ANSwwLDI1NiwweiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0VGNDQzODsiIGQ9Ik0yNTYsNDg2LjQw%0D%0ANkMyMjIuNDc5LDQ1Mi45MzgsODUuMzMzLDMwOC44MzMsODUuMzMzLDE5MmMwLTk0LjEwNCw3Ni41%0D%0ANjMtMTcwLjY2NywxNzAuNjY3LTE3MC42NjcNCglTNDI2LjY2Nyw5Ny44OTYsNDI2LjY2NywxOTJD%0D%0ANDI2LjY2NywzMDguODMzLDI4OS41MjEsNDUyLjkzOCwyNTYsNDg2LjQwNnoiLz4NCjxjaXJjbGUg%0D%0Ac3R5bGU9ImZpbGw6IzMwM0M0MjsiIGN4PSIyNTYiIGN5PSIxOTIiIHI9IjE0OS4zMzMiLz4NCjxj%0D%0AaXJjbGUgc3R5bGU9ImZpbGw6I0UwRTBFMDsiIGN4PSIyNTYiIGN5PSIxOTIiIHI9IjEyOCIvPg0K%0D%0APHBhdGggc3R5bGU9Im9wYWNpdHk6MC4xO2ZpbGw6IzAxMDEwMTtlbmFibGUtYmFja2dyb3VuZDpu%0D%0AZXcgICAgOyIgZD0iTTE1MiwyMTMuMzMzYzAtNzAuNTgzLDU3LjQxNy0xMjgsMTI4LTEyOA0KCWMy%0D%0ANi42NDMsMCw1MS4zOTcsOC4xOTksNzEuOTA4LDIyLjE4MUMzMjguNDM1LDgwLjkwMSwyOTQuMTk0%0D%0ALDY0LDI1Niw2NGMtNzAuNTgzLDAtMTI4LDU3LjQxNy0xMjgsMTI4DQoJYzAsNDMuOTQsMjIuMjY0%0D%0ALDgyLjc1OSw1Ni4wOTIsMTA1LjgxOUMxNjQuMTg4LDI3NS4yNTEsMTUyLDI0NS43MjMsMTUyLDIx%0D%0AMy4zMzN6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMzAzQzQyOyIgZD0iTTM1MiwyMTMuMzMzaC0x%0D%0ALjA3OGMtNC42MDItNDAuOS0zNC41ODMtNzQuMTA3LTc0LjA3OS04Mi45MDhjMC4wOTktMC44MzMs%0D%0AMC40OTEtMS41NjYsMC40OTEtMi40MjYNCgljMC0xMS43Ni05LjU3My0yMS4zMzMtMjEuMzMzLTIx%0D%0ALjMzM2MtMTEuNzYsMC0yMS4zMzMsOS41NzMtMjEuMzMzLDIxLjMzM2MwLDAuODU5LDAuMzkyLDEu%0D%0ANTkyLDAuNDkxLDIuNDI2DQoJYy0zOS40OTYsOC44MDEtNjkuNDc4LDQyLjAwOC03NC4wNzksODIu%0D%0AOTA4SDE2MGMtNS44OTYsMC0xMC42NjcsNC43NzEtMTAuNjY3LDEwLjY2N2MwLDUuODk2LDQuNzcx%0D%0ALDEwLjY2NywxMC42NjcsMTAuNjY3aDE5Mg0KCWM1Ljg5NiwwLDEwLjY2Ny00Ljc3MSwxMC42Njct%0D%0AMTAuNjY3QzM2Mi42NjcsMjE4LjEwNCwzNTcuODk2LDIxMy4zMzMsMzUyLDIxMy4zMzN6Ii8+DQo8%0D%0AcGF0aCBzdHlsZT0iZmlsbDojRjNGM0YzOyIgZD0iTTI1NiwxNDkuMzMzYzM3LjUxNCwwLDY4LjM1%0D%0ANywyNy45MTEsNzMuNTg5LDY0SDE4Mi40MTFDMTg3LjY0MywxNzcuMjQ1LDIxOC40ODYsMTQ5LjMz%0D%0AMywyNTYsMTQ5LjMzMw0KCXoiLz4NCjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuMjtmaWxsOiNGRkZG%0D%0ARkY7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDsiIGQ9Ik0xODIuNDExLDIxMy4zMzNoMzAuOTIy%0D%0AYzMuMDM0LTM2LjA4OSwyMC45MTUtNjQsNDIuNjY3LTY0DQoJQzIxOC40ODYsMTQ5LjMzMywxODcu%0D%0ANjQzLDE3Ny4yNDUsMTgyLjQxMSwyMTMuMzMzeiIvPg0KPHBhdGggc3R5bGU9Im9wYWNpdHk6MC4x%0D%0AO2ZpbGw6IzAxMDEwMTtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgOyIgZD0iTTI1NiwxNDkuMzMz%0D%0AYzIxLjc1MSwwLDM5LjYzMywyNy45MTEsNDIuNjY3LDY0aDMwLjkyMg0KCUMzMjQuMzU3LDE3Ny4y%0D%0ANDUsMjkzLjUxNCwxNDkuMzMzLDI1NiwxNDkuMzMzeiIvPg0KPGxpbmVhckdyYWRpZW50IGlkPSJT%0D%0AVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItNDMuODQwMyIgeTE9%0D%0AIjYzOS4xODQiIHgyPSItMjcuNDE3MiIgeTI9IjYzMS41MjU5IiBncmFkaWVudFRyYW5zZm9ybT0i%0D%0AbWF0cml4KDIxLjMzMzMgMCAwIC0yMS4zMzMzIDk5Ni4zMzM0IDEzNzkxLjY2NykiPg0KCTxzdG9w%0D%0AICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFjaXR5OjAuMiIv%0D%0APg0KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkZGRkY7c3RvcC1vcGFj%0D%0AaXR5OjAiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lE%0D%0AXzFfKTsiIGQ9Ik0yNTYsMEMxNTAuMTM1LDAsNjQsODYuMTM1LDY0LDE5MmMwLDE0MS42NDYsMTc3%0D%0ALjE0NiwzMTAsMTg0LjY4OCwzMTcuMTA0DQoJQzI1MC43NCw1MTEuMDMxLDI1My4zNzUsNTEyLDI1%0D%0ANiw1MTJzNS4yNi0wLjk2OSw3LjMxMy0yLjg5NkMyNzAuODU0LDUwMiw0NDgsMzMzLjY0Niw0NDgs%0D%0AMTkyQzQ0OCw4Ni4xMzUsMzYxLjg2NSwwLDI1NiwweiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4N%0D%0ACjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8%0D%0AZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+%0D%0ADQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
              alt="services needed key"
            />
            <p>Services Needed</p>
          </div>
        </div>
      </div>
    );
  }
}
