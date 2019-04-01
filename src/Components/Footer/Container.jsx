import { connect } from 'react-redux'
import Footer from './Component.jsx'

const mapStateToProps = ({ data, isLoading, currentNav }) => ({
  data,
  isLoading,
  currentNav
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
