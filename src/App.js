import CreateRead from "./components/CreateRead";
import ShowReads from "./components/ShowReads";


function App() {
  return (
    <div className="App">
      <div className='container'>
          <div className='row justify-content-center'>
              <h1 className='text-center text-primary'>Welcome To My-Reads....</h1>
              <div className='col-8'>
                <CreateRead/>
                <hr/>
                <ShowReads/>
              </div>
              
          </div>
          
      </div>
    </div>
  );
}

export default App;
