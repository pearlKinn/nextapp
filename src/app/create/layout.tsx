import React from "react";

export default function Layout(props: {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}) {
  return (
    <form>
      <h2>Create</h2>
      {props.children}
    </form>
  );
}
