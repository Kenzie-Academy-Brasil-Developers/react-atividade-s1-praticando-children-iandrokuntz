import "./style.css"

function CenteredCard ({children}){
    
    return(
        
        <div className = "Cards">
            <span>
                {children}
            </span>
        </div>
    )
}

export default CenteredCard;