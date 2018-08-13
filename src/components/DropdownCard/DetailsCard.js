import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const DetailsCard = ({ links, cardDetails, bgColor, underline, ...props }) => {
    return (
        <Wrapper bgColor={bgColor} underline={underline}>
            {cardDetails.map((field, i) => {
                return (
                    <div key={i}>
                        <Box>{field.title}</Box>
                        <DetailWrapper>{field.details}</DetailWrapper>
                    </div>
                )
            })}
            <Box >
                {links.map((link, i) => <StyledLink key={i} onClick={link.callBack}>{link.title}</StyledLink>)}
            </Box>
        </Wrapper>
    );
};

DetailsCard.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
        title: PropTypes.string,
        callback: PropTypes.func,
    })),
    cardDetails: PropTypes.arrayOf(
        PropTypes.shape({
        title: PropTypes.string,
        details: PropTypes.string,
    })),
    bgColor: PropTypes.bool,
    underline: PropTypes.bool,
};

DetailsCard.defaultProps = {
    cardDetails: [{title: "", details:""}],
    links: [{title: "", callback: i => console.log(i),}],
    bgColor: false,
    underline: false,
};

export default DetailsCard;