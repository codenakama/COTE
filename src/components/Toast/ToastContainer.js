import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { addToast, removeToast } from "./store/actions";
import { getToasts } from "./store/reducer";
// Components
import Toast from "./Toast";
import "./toast.css";

class ToastContainer extends Component {
  static propTypes = {
    toasts: PropTypes.array.isRequired,
    addToast: PropTypes.func.isRequired,
    removeToast: PropTypes.func.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.toasts.length > this.props.toasts.length) {
      // Get the new toast from next props
      const { toasts } = nextProps;
      const newToast = toasts[toasts.length - 1];
      const timeout = newToast.timeout || this.props.timeout || 3000; // default

      // Hide the new toast after timeout
      setTimeout(() => this.props.removeToast(newToast.id), timeout);
    }
  }

  render() {
    const { toasts } = this.props;

    return (
      <ToastsWrapper ignoreClicks={toasts.length === 0}>
        <CSSTransitionGroup
          component="div"
          transitionAppear
          transitionAppearTimeout={500}
          transitionLeaveTimeout={500}
          transitionEnterTimeout={500}
          transitionName={{
            enter: "toastAnimEnter",
            enterActive: "toastAnimEnterActive",
            leave: "toastAnimLeave",
            leaveActive: "toastAnimLeaveActive",
            appear: "toastAnimAppear",
            appearActive: "toastAnimAppearActive"
          }}
        >
          {toasts.map(toast => (
            <Toast
              toast={toast}
              remove={this.props.removeToast}
              key={toast.id}
            />
          ))}
        </CSSTransitionGroup>
      </ToastsWrapper>
    );
  }
}

/* SASS way of defining the transition names:
import styles from './styles.scss';
const transitionNames = {
  enter: styles.toastAnimEnter,
  enterActive: styles.toastAnimEnterActive,
  leave: styles.toastAnimLeave,
  leaveActive: styles.toastAnimLeaveActive,
  appear: styles.toastAnimAppear,
  appearActive: styles.toastAnimAppearActive,
};
... and then ...
transitionName={{ transitionName }}
*/

// Styled components
const ToastsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  right: 0px;
  width: 400px;
  z-index: 9999;
  padding: 0px 32px;
  ${props =>
    props.ignoreClicks &&
    "pointer-events: none;"} @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

// Connect to Redux
const mapStateToProps = state => ({
  toasts: getToasts(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addToast,
      removeToast
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ToastContainer);
