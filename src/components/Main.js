import PageSection from "./PageSection";

const Main = ({children}) => {

    return(
        <div className="window">
            <div className="webpage">
                {children.map((child) => <PageSection children={child}/>)}
            </div>
        </div>
    )
}

export default Main;