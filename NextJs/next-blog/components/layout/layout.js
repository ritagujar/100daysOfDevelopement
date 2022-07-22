import MainNavigation from "./main-navigation";

function Layout(props) {
  <>
    <MainNavigation />
    <main>{props.children}</main>
  </>;
}

export default Layout;
