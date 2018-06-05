import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/defaults";
import Icon from "../atoms/Icon/Icon";
import { Caption, Title } from "../atoms/Typography";

const List = styled.ul`
  li:last-child {
    margin-bottom: 0;
  }
  padding: 1rem;
`;

const Item = styled.li`
  display: flex;
  margin-bottom: 1rem;
  width: 100%;
  i {
    margin-right: 1rem;
  }
`;

const StyledCaption = styled(Caption)`
  color: ${colors.darkGrey};
`;

const ItemContent = styled.div``;

const UspList = ({ items, ...props }) => {
  return (
    <List>
      {items.map((item, i) => {
        return (
          <Item>
            <Icon name={item.icon} primary />
            <ItemContent>
              <Title>{item.title}</Title>
              <StyledCaption text={item.description} />
            </ItemContent>
          </Item>
        );
      })}
    </List>
  );
};

UspList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      /** Icon name */
      icon: PropTypes.string
    })
  )
};

UspList.defaultProps = { items: [] };

export default UspList;
