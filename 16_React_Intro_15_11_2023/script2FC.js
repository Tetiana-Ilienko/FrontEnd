//функциональный компонент
const root = ReactDOM.createRoot(document.getElementById("root"));


function Cohort(){
  return(
    <div>
        <h1>Cohort 31.2</h1>
        
    </div>
  )


}

root.render(
  <> 
    <Cohort/>
    <Cohort/>
    <Cohort/>

  </>
);