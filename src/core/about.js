import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import ns from "ns";

import PropTypes from "prop-types";

export const About = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.RouteMixin,
    UU5.Forms.FormMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: ns.tag("About"),
    classNames: {
      main: ns.css("about")
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

  _onSave(component, values) {
    console.log('Values:', values);
    let id = UU5.Common.Tools.generateUUID();

    this._row.insertChild(
        <UU5.Bricks.Div
            id={id}
        >
            <UU5.Bricks.Panel
                header={values.name} content={["category: ",values.category,", ","number of items: ",values.numberOfItems]} />
            <UU5.Bricks.Button
                colorSchema="danger"
                onClick={() => this._row.deleteChild(id)}
                content="Delete Column"
            />
        </UU5.Bricks.Div>
    )
  },

  _onCancel(component) {
    alert('Cancel pressed');
    return this;
  },

  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Container>
        <UU5.Bricks.Header level={3} content="Add new item" />
        <UU5.Forms.Form
          header={<UU5.Bricks.Box content='fill the form to create new item' colorSchema='green'
                                  className='font-size-m'/>}
          onSave={({component, values}) => this._onSave(component, values)}
          onCancel={({component}) => this._onCancel(component)}
        >
          <UU5.Forms.Text
            label='Name'
            name='name'
            required
          />
          <UU5.Forms.Number
            label="Number of items"
            name='numberOfItems'
            size="m"
            min={0}
            max={3000}
            step={1}
            required
          />

          <UU5.Forms.Select
            label="Category"
            name="category"
            size="m"
            required
          >
            <UU5.Forms.Select.Option value="Man"/>
            <UU5.Forms.Select.Option value="Woman"/>
            <UU5.Forms.Select.Option value="Kids"/>
          </UU5.Forms.Select>


          <UU5.Forms.Controls  />
        </UU5.Forms.Form>

          <UU5.Bricks.Div {...this.getMainPropsToPass()}>
          <UU5.Bricks.Row ref_={row => this._row = row} dynamic />
          </UU5.Bricks.Div>

      </UU5.Bricks.Container>
    );
  }
  //@@viewOff:render
});

export default About;
