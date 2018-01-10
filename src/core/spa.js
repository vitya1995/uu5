import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-app";
import "uu_plus4u5g01-bricks";
import ns from "ns";

import Lsi from "./lsi.js";
import Left from "./left.js";
import Bottom from "./bottom.js";
import About from "./about.js";
import Home from "./home.js";

import "./spa.less";

const Spa = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin, UU5.Common.ElementaryMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: ns.tag("Spa"),
    classNames: {
      main: ns.css("-spa clear-sans")
    },
    lsi: {
      name: Lsi.appName
    }
  },

  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  _getLanguageSelector() {
    return (
      <UU5.Bricks.LanguageSelector
        headerMode="code"
        bodyMode="label-code"
        displayedLanguages={["cs", "en"]}
        className="plus4u5-app-page-language-selector"
      />
    );
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {
    return (
      <Plus4U5.App.Page
        {...this.getMainPropsToPass()}
        top={<Plus4U5.App.Top style={{ backgroundColor: "#005DA7" }} content={this.getLsiComponent("name")} />}
        bottom={<Bottom />}
        type={2}
        systemLayerContent={[this._getLanguageSelector(), <Plus4U5.App.Button key="plus4u-button" />]}
        left={<Left home />}
        leftWidth="!xs-320px !s-320px !m-256px l-256px xl-256px"
      >
        <UU5.Common.Router
          urlBuilder={Plus4U5.Common.Url}
          route="/"
          routes={{
            "/": { component: <Home /> },
            "/home": { component: <Home /> },
            "/about": { component: <About /> }
          }}
        />
      </Plus4U5.App.Page>
    );
  }
  //@@viewOff:render
});

export default Spa;
