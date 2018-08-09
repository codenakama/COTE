import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';

const Wrapper = styled.div`
  border-bottom: ${props => (props.underline ? `1px solid #eeeeee` : '0')};
  padding: 16px 0px;
  background-color: ${props => props.bgColor ? props.theme.colorPrimary : '#ffffff'};
`;

const Box = styled.div`
    display: flex;
    padding: 8px 24px;
    font-size: 14px;
`

const DetailWrapper = styled(Box)`
  font-weight: 700;
`;

const StyledLink = styled.a`
  color: ${props => props.theme.colorPrimary};
  font-weight: 500;
  padding-right: 16px;
  text-decoration: underline;
`;

const DetailsCard = ({ links, allDetails, bgColor, underline, ...props }) => {
    return (
        <Wrapper bgColor={bgColor} underline={underline}>
            {allDetails.map((field) => {
                return (
                    <div >
                        <Box>{field.title}</Box>
                        <DetailWrapper>{field.details}</DetailWrapper>
                    </div>
                )
            })}
            <Box >
                {links.map((link) => <StyledLink onClick={link.callBack}>{link.title}</StyledLink>)}
            </Box>
        </Wrapper>
    );
};

DetailsCard.propTypes = {
    allDetails: PropTypes.array,
    links: PropTypes.array,
};

export default DetailsCard;