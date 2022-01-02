import { FirebaseApp } from "firebase/app";
import React, { Component, ComponentProps, ComponentState, FC } from "react";

const FirebaseContext = React.createContext<any>(null);

export const withFirebase = (Component: any) => (props: any) =>
  (
    <FirebaseContext.Consumer>
      {(firebase) => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );

export default FirebaseContext;
