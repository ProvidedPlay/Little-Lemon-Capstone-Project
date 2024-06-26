import PageSection from "./PageSection";

const Main = ({children, pageType}) => {

    return(
        <div className="window">
            <div className="webpage" id={pageType}>
                {children.map((child) => <PageSection children={child}/>)}
            </div>
        </div>
    )
}

export default Main;