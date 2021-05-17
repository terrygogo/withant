  
import _ from "lodash";

//import   "./home.module.css"
//import "../node_modules/react-grid-layout/css/styles.css"
//import '../node_modules/react-resizable/css/styles.css'

import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import   User  from '../pages/user.js'
import   Setting  from '../pages/setting.js'
import   Dashboard  from '../pages/dashboard.js'

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
export default class Home    extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts))
    };
  }

  static get defaultProps() {
    return {
      className: "layout",
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 30
    };
  }

  resetLayout() {
    this.setState({ layouts: {} });
  }

  onLayoutChange(layout, layouts) {
    saveToLS("layouts", layouts);
    this.setState({ layouts });
  }

  render() {
    return (
      <div>
          
           
        <button onClick={() => this.resetLayout()}>Reset Layout</button>
        <ResponsiveReactGridLayout
        className= "Layo1ut"
     
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          layouts={this.state.layouts}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
        >
          
            <Setting  key="1" data-grid={{ w: 4, h: 2, x: 0, y: 0, minW: 2, minH: 4 }}> </Setting>
          
         
            <User key="2" data-grid={{ w:2, h: 4, x: 0, y: 2, minW: 2, minH: 4 }}></User>
          
        
            <Dashboard key="3" data-grid={{ w: 2, h: 4, x: 4, y: 2, minW: 2, minH: 4 }}></Dashboard>
          
           
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}
 