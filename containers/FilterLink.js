import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
​
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}
​
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter)) //setFilter()
    }
  }
}
​
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
​
export default FilterLink
//FilterLink is a selected Filter
//it is a container/action component since once a value gets selcted, it needs to update to the value
