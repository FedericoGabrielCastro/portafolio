import { FunctionComponent } from "react";
import { ICategory } from "../../types";

export const NavItem: FunctionComponent<{
    value: ICategory | "all";
    handlerFilterCategory: Function;
    active: string;
}> = ({ value, handlerFilterCategory, active }) => {
    let className = "capitalize cursor-pointer hover:text-green dark:hover:text-green";
    if (active === value) className += " text-green";

    return (
        <li className={className} onClick={() => handlerFilterCategory(value)}>
            {value}
        </li>
    );
};

const ProjectsNavbar: FunctionComponent<{handlerFilterCategory: Function; active: string }> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-scroll list-none dark:text-white">
            <NavItem value="all" {...props} />
            <NavItem value="react" {...props} />
            <NavItem value="node" {...props} />
            <NavItem value="javascript" {...props} />
            <NavItem value="typescript" {...props} />
            <NavItem value="next" {...props} />
        </div>
    );
};

export default ProjectsNavbar;