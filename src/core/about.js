import React from "react";
import createReactClass from "create-react-class";
import UU5 from "uu5g04";
import "uu5g04-bricks";
import ns from "ns";


import Calls from "/home/vitya/WebstormProjects/ucl-uu5-hw/uu_demoappg01_main-client/src/calls.js";

export const About = createReactClass({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.RouteMixin,
    UU5.Forms.FormMixin,
    UU5.Common.CallsMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: ns.tag("About"),
    classNames: {
      main: ns.css("about")
    },
    calls: {
      loadData: "loadMethod",
      save: "createItem"}
  },
  //@@viewOff:statics

  //@@viewOn:propTypes

  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  componentWillMount() {
    this.setCalls(Calls);
  },
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers

  _addItem(element){
    let id = UU5.Common.Tools.generateUUID();

    this._row.insertChild(

      <UU5.Bricks.Div
        id={id}
      >
        <UU5.Bricks.Panel
          header={element.name} content={["category: ",element.category,
          ", ","number of items: ",element.numberOfItems,", ","description: ",
          element.description]} />
        <UU5.Forms.Checkbox
          value={false}
          label="Sold Out"
          size="m"
        />
        <UU5.Bricks.Button
          colorSchema="danger"
          onClick={() => {this._removeItem(id, element)}}
          content="Delete Column"
        />
        <UU5.Bricks.Button
          colorSchema="orange"
          onClick={() => this._editItem(id, element)}
          content="Edit"
        />
      </UU5.Bricks.Div>
    );
  },

  _save(opt) {
    opt.values.id = UU5.Common.Tools.generateUUID();

    this._saveToStorage(opt);
    this._addItem(opt.values);
    this.reset()
  },

  _editItem(id,element){

  },

  _removeItem(id, element){

    var opt = JSON.parse(localStorage.getItem("items"));

    console.log(opt);
    var index;

    opt.map((value) => {
      if (value.id == element.id){
        index = opt.indexOf(value);
      }
    });
    opt.splice(index, 1);

    localStorage.setItem("items", JSON.stringify(opt));

    console.log(opt);

    this._row.deleteChild(id);
  },


  _saveToStorage(opt){
    var users = JSON.parse(localStorage.getItem("items") || "[]");

    users.push(opt.values);

    localStorage.setItem("items", JSON.stringify(users));
  },


  _loadItems(){

    var opt = JSON.parse(localStorage.getItem("items") || "[]");

    console.log(opt);

    return opt.map((element) => {

         let id = UU5.Common.Tools.generateUUID();
         let key = UU5.Common.Tools.generateUUID();
      return(
        <UU5.Bricks.Div
          id={id} key={key}
        >
          <UU5.Bricks.Panel
            header={element.name} content={["category: ",element.category,
            ", ","number of items: ",element.numberOfItems,", ","description: ",
            element.description]} />
          <UU5.Forms.Checkbox
            value={false}
            label="Sold Out"
            size="m"
          />
          <UU5.Bricks.Button
            colorSchema="danger"
            onClick={() => {this._removeItem(id, element)}}
            content="Delete Column"
          />
          <UU5.Bricks.Button
            colorSchema="orange"
            onClick={() => this._editItem(id, element)}
            content="Edit"
          />
        </UU5.Bricks.Div>
    )
    });

  },


  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Container>
        <UU5.Forms.Form
          onSave={(opt) => this._save(opt)}
          header={<UU5.Bricks.Box content='Fill the form to add new item' colorSchema='green'
                                  className='font-size-m'/>}
        >
          <UU5.Bricks.Column>
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

            <UU5.Forms.TextArea
              label='Description'
              placeholder='Insert text here.'
              feedback="success"
              name="description"
              message="success message"
              required
              size="m"
            />

          </UU5.Bricks.Column>
          <UU5.Forms.Controls />
        </UU5.Forms.Form>

        <UU5.Bricks.ButtonGroup size="m" colorSchema="default">
          <UU5.Bricks.Button content="Man" />
          <UU5.Bricks.Button content="Woman"/>
          <UU5.Bricks.Button content="Kids"/>
        </UU5.Bricks.ButtonGroup>


        <UU5.Bricks.Div >
          <UU5.Bricks.Row ref_={row => this._row = row} dynamic >
            {this._loadItems()}
          </UU5.Bricks.Row>
        </UU5.Bricks.Div>

      </UU5.Bricks.Container>
    );
  }
  //@@viewOff:render
});

export default About;
