// HomePage.tsx
import { EmployeeList } from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { EmployeeType } from "./EmployeeListItem";

type HomePageProps = {
    employee: EmployeeType[] | undefined;
    input: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const HomePage = ({ employee, input, handleChange }: HomePageProps) => {
    return (
        <div className="w-80 h-[500px] flex flex-col border border-black m-0">
            <Header />
            <SearchBar input={input} handleChange={handleChange}/>
            <EmployeeList employee={employee} />
        </div>
    )
}

export default HomePage
