import { EmployeeList } from "./EmployeeList"
import Header from "./Header"
import SearchBar from "./SearchBar"

const HomePage = () => {
  return (
    <div className="w-80 h-auto mx-auto flex flex-col border border-black">
        <Header />
        <SearchBar />
        <EmployeeList />
    </div>
  )
}

export default HomePage