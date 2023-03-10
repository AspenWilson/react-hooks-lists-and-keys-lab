import React from "react";

function LinkItem(props){
  return <a key={props.link} href={props.link}>{props.link}</a>
}

function NavBar() {
  const links = ["#home", "#about", "#projects"];

  const linkObjs = links.map((link) => {
    return <LinkItem key={link} link={link}/>
  })

  return (
    <nav>
      {linkObjs}
    </nav>
  )
}

export default NavBar;
