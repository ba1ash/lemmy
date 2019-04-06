import { render, Component } from 'inferno';
import { HashRouter, Route, Switch } from 'inferno-router';

import { Navbar } from './components/navbar';
import { Home } from './components/home';
import { Login } from './components/login';
import { CreatePost } from './components/create-post';
import { CreateCommunity } from './components/create-community';
import { Post } from './components/post';
import { Community } from './components/community';
import { Communities } from './components/communities';

import './main.css';

import { WebSocketService, UserService } from './services';

const container = document.getElementById('app');

class Index extends Component<any, any> {

  constructor(props, context) {
    super(props, context);
    WebSocketService.Instance;
    UserService.Instance;
  }

  render() {
    return (
      <HashRouter>
        <Navbar />
        <div class="mt-3 p-0">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={`/login`} component={Login} />
            <Route path={`/create_post`} component={CreatePost} />
            <Route path={`/create_community`} component={CreateCommunity} />
            <Route path={`/communities`} component={Communities} />
            <Route path={`/post/:id`} component={Post} />
            <Route path={`/community/:id`} component={Community} />
          </Switch>
          {this.symbols()}
        </div>
      </HashRouter>
    );
  }

  symbols() {
    return(
      <symbol id="icon-mouse" version="1.1" x="0px" y="0px"
        viewBox="0 0 512 512">
        <g>
          <g>
            <path d="M499.059,323.505l-7.52-32.532l-70.047,16.19c1.513-11.983,2.297-24.042,2.297-36.037c0-18.334-1.801-35.785-5.316-52.19
              c29.365-12.101,55.143-28.885,69.372-45.529c17.524-20.498,25.985-46.568,23.822-73.406
              c-2.163-26.862-14.706-51.268-35.316-68.724C433.879-4.694,369.917,0.439,333.774,42.718
              c-9.546,11.168-18.318,27.381-25.379,46.649c-16.512-5.419-34.132-8.243-52.395-8.243s-35.885,2.824-52.395,8.243
              c-7.06-19.267-15.832-35.481-25.379-46.649C142.082,0.44,78.123-4.695,35.648,31.277C15.038,48.733,2.494,73.141,0.332,100.001
              c-2.161,26.838,6.297,52.907,23.822,73.406c14.229,16.644,40.006,33.427,69.372,45.529c-3.515,16.405-5.316,33.856-5.316,52.189
              c0,11.995,0.785,24.053,2.297,36.037l-70.047-16.19l-7.52,32.532l84.337,19.492c4.349,17.217,10.201,33.953,17.421,49.752
              L12.941,416.27l7.52,32.532l110.634-25.57c1.38,2.197,2.779,4.373,4.218,6.509c32.548,48.323,75.409,74.934,120.687,74.934
              c45.278,0,88.138-26.612,120.687-74.934c1.439-2.136,2.839-4.313,4.218-6.509l110.634,25.57l7.52-32.532l-101.758-23.519
              c7.221-15.799,13.072-32.535,17.421-49.752L499.059,323.505z M183.578,220.372c0-11.41,9.189-20.65,20.482-20.65
              c11.306,0,20.494,9.24,20.494,20.65c0,11.408-9.188,20.656-20.494,20.656C192.768,241.028,183.578,231.78,183.578,220.372z
              M256,413.29c-29.895,0-54.216-19.471-54.216-43.403c0-23.932,24.322-43.403,54.216-43.403s54.216,19.471,54.216,43.403
              C310.216,393.819,285.895,413.29,256,413.29z M307.785,241.183c-11.402,0-20.65-9.317-20.65-20.81
              c0-11.494,9.248-20.81,20.65-20.81c11.387,0,20.635,9.317,20.635,20.81C328.422,231.866,319.173,241.183,307.785,241.183z"/>
            </g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
        </symbol>
    );
  }

}

render(<Index />, container);
