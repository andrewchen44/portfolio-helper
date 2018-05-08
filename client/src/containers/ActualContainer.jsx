import React from 'react';
import { connect } from 'react-redux';
import ActualPortfolio from '../components/ActualPortfolio.jsx';

const ActualContainer = (props) => (
  <ActualPortfolio {...props} />
)

const mapStateToProps = ({assetTypes}) => {
  return {
    assetTypes: assetTypes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActualContainer);
