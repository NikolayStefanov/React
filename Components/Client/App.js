import {Component} from 'react';

import * as postService from './services/PostServices';
 
import style from './App.module.css';

import Header from './components/Header/Header';
import AsideMenu from './components/AsideMenu/AsideMenu';
import Main from './components/Main/Main';

// function App() {
//   return (
//     <div className={style.app}>
//       <h1>HELLO FROM FIRST REACT EXERCISE</h1>
      
//       <Header />
//       <div className={style.container}>
//         <AsideMenu/>
//         <Main/>
//       </div>
//     </div>
//   );
// }

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
      postService.getAll()
      .then(posts =>{
          this.setState({posts});
      })
      .catch(x=> console.log("ERROR FROM APP"))
  }

  render(){
    return (
     <div className={style.app}>
        <h1>HELLO FROM FIRST REACT EXERCISE</h1>

        <Header />
        <div className={style.container}>
          <AsideMenu/>
          <Main posts={this.state.posts} />
        </div>
      </div>
    )
  }
}
export default App;
