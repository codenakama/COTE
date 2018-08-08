import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors as defaultColors } from "../../styles/defaults";
import Icon from "../atoms/Icon/Icon";
import DetailsCard from "../DetailsCard/DetailsCard";

const ArrowIcon = styled(Icon)`
  position: absolute;
  z-index: 1;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: ${defaultColors.black};
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: relative;
  min-width: 66px;
  width: ${props => (props.full ? "100%" : "232px")};
  border: ${props => {
        return `1px solid ${defaultColors.black}`;
    }};
  padding: 9px 16px;
  cursor: pointer;
  height: ${props => (!props.isOpen ? '48px' : '100%')};
`;

const TopWrapper = styled.div`
    border-radius: ${props => (props.corners ? "0" : "4px")}; 
`

const DetailCardWrapper = styled.div`
    position: absolute;
    top: 48px;
    min-height: auto;
    max-height: 17em;
    width: 100%;
    left: 0;
    padding: 0;
    z-index: 999;
`

class DropdownCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    handleOptionChange = option => {
        this.setState(
            { selectedOption: option },
            this.props.handleValueChange(option.value)
        );
    };

    handleClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    handleClickOutsideDropdown = () => {
        this.setState({ isOpen: false });
    };

    render() {
        const { isOpen, selectedOption } = this.state;
        const { title, full, links, details, id } = this.props;
        return (
            <Wrapper
                onClick={this.handleClick}
                corners={true}
                full={full}
                id={id}
                {...this.props}
                isOpen={this.state.isOpen}
            >
                <TopWrapper>
                    <span>{title}</span>
                    {isOpen ? (
                        <ArrowIcon name="keyboard_arrow_up" onClick={this.handleClick} />
                    ) : (<ArrowIcon name="keyboard_arrow_down" onClick={this.handleClick} />)}
                </TopWrapper>
                {isOpen ? (
                    <DetailCardWrapper>
                        <DetailsCard links={links} allDetails={details} />
                    </DetailCardWrapper>
                ) : null}
            </Wrapper>

        )
    }
}

DropdownCard.propTypes = {
    /** Title of select box */
    title: PropTypes.string.isRequired,
    /** Callback to retrieve value of option selected */
    handleValueChange: PropTypes.func,
    /** If true dropdown takes full width of parent */
    full: PropTypes.bool,
    links: PropTypes.array,
    details: PropTypes.array,
};

DropdownCard.defaultProps = {
    title: "Contact 1",
    handleValueChange: value => console.log(value),
    full: true,
};

export default DropdownCard;
