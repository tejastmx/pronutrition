import React, { Component } from "react";
import food from "../foods.json";
import SeachBar from "../components/Searchbar";

export default class FoodItems extends Component {
  constructor() {
    super();
    this.state = {
      items: [...food],
      quantity: 1,
    };
  }
  handleinput = (e) => {
    this.setState({ quantity: e.target.value });
  };

  addFood = (e) => {
    console.log(e);
    //   let updateToday=[]
  };

  searchInput = (e) => {
    let search = e.target.value;
    let filterfood = items.filter((food) => {
      if (food.name.toLowerCase().includes(search.toLowerCase())) {
        return food;
      } else {
        return null;
      }
    });
    this.setstate({ items: filterfood });
  };

  renderItems = () => {
    const data = this.state.items;
    const mapData = data.map((item) => (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <img src={`${item.image}`} />
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{`${item.name}`}</strong> <br />
                <small>{`${item.calories}`}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  defaultValue={1}
                  value={this.state.count}
                  onChange={this.handleinput}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={(e) => this.addFood(this.state, this.state.food)}
                  name={item.name}
                  value={item.calories}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    ));
    return mapData;
  };

  render() {
    return (
      <>
        <div>
          <p>{this.renderItems()}</p>
        </div>
      </>
    );
  }
}
