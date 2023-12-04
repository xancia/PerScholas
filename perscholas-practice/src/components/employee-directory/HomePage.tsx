import { EmployeeList } from "./EmployeeList"
import Header from "./Header"
import SearchBar from "./SearchBar"

const HomePage = () => {
  return (
    <div className="w-80 h-[500px] flex flex-col border border-black m-0">
        <Header />
        <SearchBar />
        <EmployeeList />
    </div>
  )
}

export default HomePage