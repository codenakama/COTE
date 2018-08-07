import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors as defaultColors } from '../../styles/defaults';

const Wrapper = styled.div`
  border-radius: 4px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
`;

const TitleWrapper = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid #f3f3f3;
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

const DetailsCard = ({ children, className, id, links, allDetails, ...props }) => {
    return (
        <Wrapper className={className} {...props} id={id}>
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