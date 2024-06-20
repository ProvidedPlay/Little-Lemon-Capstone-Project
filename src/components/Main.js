import PageSection from "./PageSection";

const Main = ({children}) => {

    return(
        <div className="Main">
        {children.map((child) => <PageSection children={child}/>)}
        </div>
    )
}

export default Main;