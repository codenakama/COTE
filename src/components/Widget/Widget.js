import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "../atoms/Icon/Icon";
import { Heading3 } from "../atoms/Typography/";
import Paper from "../Paper/Paper";

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14);
`;

const WidgetTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  text-align: center;
`;

const StyledIcon = styled(Icon)`
  margin-bottom: 0.2em;
`;

const WidgetBottomWrapper = styled.div`
  border-top: 1px solid #eeeeee;
  padding: 1em;

  & > div {
    margin-bottom: 1em;
  }

  & > div:last-child {
    margin-bottom: 0;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ItemTitle = styled.span`
  font-weight: bold;
`;

const Widget = ({ items, title, icon, ...props }) => {
  return (
    <Wrapper {...props}>
      <WidgetTopWrapper>
        <StyledIcon name={icon} primary />
        <Heading3 center>{title}</Heading3>
      </WidgetTopWrapper>
      {items.length ? (
        <WidgetBottomWrapper>
          {items.map((item, i) => {
            return (
              <ItemWrapper key={`w-${i}`}>
                <Icon
                  style={{ marginRight: "0.57em" }}
                  primary
                  name={item.icon}
                />
                <ItemTitle>{item.title}</ItemTitle>
              </ItemWrapper>
            );
          })}
        </WidgetBottomWrapper>
      ) : null}
    </Wrapper>
  );
};

Widget.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

Widget.defaultProps = {
  title: "Title",
  icon: "card_giftcard",
  items: []
};

export default Widget;
