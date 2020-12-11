import React from 'react'
import './layout.scss'
import Header from '../header/header'
import Footer from '../footer/footer'
import eventEmitter from '../../utils/eventEmitter'
import BookingModal from '../modal/custom-modals/booking'
import Modal from '../modal/modal'
// import Fade from 'react-reveal/Fade'

class Layout extends React.Component {
  _isMounted = false

  constructor(props) {
    super(props)
    this.state = {
      currentTheme: ''
    }
  }

  componentDidMount() {
    this._isMounted = true

    eventEmitter.on('SET_LAYOUT_THEME', theme => {
      if (this._isMounted) {
        this.setState({
          currentTheme: theme
        })
      }
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  modalProps = {
    triggerText: "Забронировать"
  }
  modalContent = (
    <BookingModal />
  )

  render() {
    return (
      <div className={`layout ${this.state.currentTheme}`}> 
       
        <div className="min-height">

          <Header />
          {this.props.children}
          <Footer />
          
          <div className="bttn--side is-hidden-mobile">
            <Modal modalProps={this.modalProps} modalContent={this.modalContent} />
          </div>  
        
        </div>
        
      </div>
      
    )
  }
}

export default Layout

