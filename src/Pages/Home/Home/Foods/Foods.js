import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import Breakfast from "../../Food/Breakfast";
import Dinner from "../../Food/Dinner";
import Lunch from "../../Food/Lunch";

const Foods = () => {
  const { url } = useRouteMatch();
  return (
    <div className="text-center h-foodCard">
      <div>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "red",
            borderBottom: "1px solid red",
          }}
          className="font-semibold"
          to="/home/breakfast"
        >
          Break Fast
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "red",
            borderBottom: "1px solid red",
          }}
          className="mx-12 font-semibold"
          to="/home/lunch"
        >
          Lunch
        </NavLink>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "red",
            borderBottom: "1px solid red",
          }}
          className="font-semibold"
          to="/home/dinner"
        >
          Dinner
        </NavLink>
      </div>
      <Switch>
        <Route path={`${url}/breakfast`}>
          <Breakfast />
        </Route>
        <Route path={`${url}/lunch`}>
          <Lunch />
        </Route>
        <Route path="/home">
          <Lunch />
        </Route>
        <Route path="/home/dinner">
          <Dinner />
        </Route>
      </Switch>
    </div>
  );
};

export default Foods;
