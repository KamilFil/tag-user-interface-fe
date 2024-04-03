
import './App.css'

import {TablePagination} from "./views/TablePagination/TablePagination";
import {Header} from "./common/Header/Header";
import {Footer} from "./common/Footer/Footer";

function App() {
  return (
      <>
      <Header/>
        <TablePagination/>
          <Footer/>
      </>
  )
}

export default App
