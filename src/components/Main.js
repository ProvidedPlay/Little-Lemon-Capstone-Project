import PageSection from "./PageSection";

const Main = ({children, pageType}) => {

    return(
        <div className="window">
            <div className="webpage" id={pageType}>
                {children.map((child, index) => <PageSection children={child} key={`page ${index}`}/>)}
            </div>
        </div>
    )
}

export default Main;