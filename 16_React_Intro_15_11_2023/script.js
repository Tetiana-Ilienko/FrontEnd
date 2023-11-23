const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
// В качестве параметра для метода render() может попасть только один корневой тэг (или фрагмент)
// Reactfragment -  если надо написать еще один фрагмен оборачиваем в пистые <></>
  <> 
    <div>
      <h1>Hello world!</h1>
    </div>
    <p>Hello from paragraph!</p>
  </>
);