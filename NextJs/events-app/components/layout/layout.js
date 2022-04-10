import MainHeader from "./main-header";

function Layout(props) {
  return (
    <>
      <MainHeader>
        <main>{props.children}</main>
      </MainHeader>
    </>
  );
}

export default Layout;
