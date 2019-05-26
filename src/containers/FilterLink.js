import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Filter from '../components/Filter'

// mapStateToProps is used for selecting the part of the data from the store that the connected component needs
//    It is called every time the store state changes.
//    It receives the entire store state, and should return an object of data this component needs.
//
// It returns a plain object containing the data that the connected component needs.
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

// Providing a mapDispatchToProps allows you to specify which actions your component might need to dispatch.
// It lets you provide action dispatching functions as props.
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)
//FilterLink is a selected Filter
//it is a container/action component since once a value gets selcted, it needs to update to the value
