import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  Switch
} from 'react-router-dom'
import Loadable from 'react-loadable'
import Header from './Header'
import Footer from './Footer'

const LoadableHomePage = Loadable({
    loader: () => import('./HomePage/index.js'),
    render: (loaded, props) => {
      let Component = loaded.default
      return <Component {...props} />
    },
    // loading: () => <Loader />
    loading: () => (
      <div className='padding-loader'>
        {/* <Loader height='100px' width='100px' borderWidth='10px' /> */}
      </div>
    )
})

const LoadableInitiativePage = Loadable({
  loader: () => import('./Inititative/index.js'),
  render: (loaded, props) => {
    let Component = loaded.default
    return <Component {...props} />
  },
  // loading: () => <Loader />
  loading: () => (
    <div className='padding-loader'>
      {/* <Loader height='100px' width='100px' borderWidth='10px' /> */}
    </div>
  )
})

const LoadableGalleryPage = Loadable({
  loader: () => import('./Gallery/index.js'),
  render: (loaded, props) => {
    let Component = loaded.default
    return <Component {...props} />
  },
  // loading: () => <Loader />
  loading: () => (
    <div className='padding-loader'>
      {/* <Loader height='100px' width='100px' borderWidth='10px' /> */}
    </div>
  )
})

const LoadableContactPage = Loadable({
  loader: () => import('./Contact/index.js'),
  render: (loaded, props) => {
    let Component = loaded.default
    return <Component {...props} />
  },
  // loading: () => <Loader />
  loading: () => (
    <div className='padding-loader'>
      {/* <Loader height='100px' width='100px' borderWidth='10px' /> */}
    </div>
  )
})

export default class Root extends React.Component{

    render = () => {
        return(
            <React.Fragment>
                <Router history={browserHistory}>
                    <React.Fragment>
                        <Header/>
                        <Switch>
                            <Route path="/initiative" component={LoadableInitiativePage} />
                            <Route path="/gallery" component={LoadableGalleryPage} />
                            <Route path="/contact" component={LoadableContactPage} />
                            <Route path="/" component={LoadableHomePage} />
                        </Switch>
                        <Footer/>
                    </React.Fragment>
                </Router>
                {/* Hello World */}
            </React.Fragment>
        )
    }

}