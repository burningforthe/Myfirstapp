import * as Actions from '../actions/action'
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';

function firstscreen(props) {
  useEffect(() => {
    props.getData()
  }, [])
  

    return (
        <TouchableOpacity onPress = {() => props.postData(props.getData)}>
          <Text>Get data from API</Text>
        </TouchableOpacity>
    )
}

const mapStateToProps = (state) => ({ 
  getData: state.reducer.get_data,
})

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(Actions.getData()),
  postData: (data) => dispatch(Actions.postData(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(firstscreen);
