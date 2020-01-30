import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  Switch
} from 'react-router-dom'
import Loadable from 'react-loadable'

// const LoadableLogin = Loadable({
//     loader: () => import('./Login/index.js'),
//     render: (loaded, props) => {
//       let Component = loaded.default
//       return <Component {...props} />
//     },
//     // loading: () => <Loader />
//     loading: () => (
//       <div className='padding-loader'>
//         {/* <Loader height='100px' width='100px' borderWidth='10px' /> */}
//       </div>
//     )
// })

// const LoadableHomePage = Loadable({
//     loader: () => import('./HomePage/index.js'),
//     render: (loaded, props) => {
//       let Component = loaded.default
//       return <Component {...props} />
//     },
//     // loading: () => <Loader />
//     loading: () => (
//       <div className='padding-loader'>
//         {/* <Loader height='100px' width='100px' borderWidth='10px' /> */}
//       </div>
//     )
// })

export default class Root extends React.Component{

    render = () => {
        return(
            <React.Fragment>
                {/* <Router history={browserHistory}>
                    <Switch>
                    <Route path="/login/" component={LoadableLogin}/>
                    <Route path="/" component={LoadableHomePage} />
                    </Switch>
                </Router> */}
                Hello World
            </React.Fragment>
        )
    }

}