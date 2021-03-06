import React from 'react';
import PropTypes from 'prop-types';
import libraryIcon from '@collab-ui/core/docs/assets/react.png';
import { ANG_URL, ANG2_URL, CORE_URL } from '../../constants';
import { NavLink } from 'react-router-dom';
import {
  Button,
  List,
  ListItem,
  ListSeparator,
  Popover,
  Topbar,
  TopbarMobile,
  TopbarNav,
  TopbarRight,
} from '@collab-ui/react';

export default class NavBar extends React.Component {
  render() {
    const { navItems } = this.props;
    const libraryName = 'Collab UI React';
    const createMainNav = () => {
      return Object.keys(navItems).reduce((agg, item, idx) => {
        if (idx === 0) return agg;

        const customAnchorNode = (
          <NavLink to={`/${item}`} activeClassName={'active'}>
            {item.charAt(0).toUpperCase() + item.substr(1).toLowerCase()}
          </NavLink>
        );

        return agg.concat(
          <ListItem
            key={`${item}-${idx}`}
            customRefProp="innerRef"
            label={item.charAt(0).toUpperCase() + item.substr(1).toLowerCase()}
            customAnchorNode={customAnchorNode}
          />
        );
      }, []);
    };

    const topBarRightContent = (
      <List>
        <ListItem
          label="Angular (2+)"
          link={ANG2_URL}
        />
        <ListItem
          label="HTML/CSS"
          link={CORE_URL}

        />
        <ListItem
          label="AngularJS (1.X)"
          link={ANG_URL}
        />
      </List>
    );

    return (
      <header>
        <Topbar
          title="Collab UI React"
          color="light"
          icon="icon-cisco-logo"
          brandAnchorElement={<NavLink to={`/`} activeClassName={'active'} />}
          fixed
        >
          <TopbarNav>{createMainNav()}</TopbarNav>
          <TopbarRight>
            <Popover
              direction="bottom-right"
              content={topBarRightContent}
              popoverTrigger="Click"
              closeOnClick>
              <Button
                children={
                  <img
                    src={libraryIcon}
                    alt={libraryName}
                    className="user-image"
                  />
                }
                ariaLabel='Other Sites'
                color={'link'}
                circle
                size={44}
              />
            </Popover>
          </TopbarRight>
          <TopbarMobile>
            {topBarRightContent}
            <ListSeparator />
            {createMainNav()}
          </TopbarMobile>
        </Topbar>
      </header>
    );
  }
}

NavBar.propTypes = {
  navItems: PropTypes.object,
};
NavBar.defaultProps = {
  navItems: {},
};
