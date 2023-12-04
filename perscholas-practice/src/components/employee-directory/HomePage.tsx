// HomePage.tsx
import { EmployeeList } from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { EmployeeType } from "./EmployeeListItem";

type HomePageProps = {
    employee: EmployeeType[] | undefined;
};

const HomePage = ({ employee }: HomePageProps) => {
    return (
        <div className="w-80 h-[500px] flex flex-col border border-black m-0">
            <Header />
            <SearchBar />
            <EmployeeList employee={employee} />
        </div>
    )
}

export default HomePage
