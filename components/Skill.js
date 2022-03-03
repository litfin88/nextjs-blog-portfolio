export default ({ name, percent }) => {
    return (
        <div style={{textAlign: "left", margin: "30px 0"}}>
            <p style={{fontWeight: "500", fontSize: "1em", textTransform: "uppercase", margin: "10px 5px"}}>{name}</p>
            <span className="emptybar" style={{height: "15px", borderRadius: "10px", background: "white", display: "flex",}}>
                <span className="fullbar" style={{width: percent + "%"}}/>
            </span>

            <style jsx>{`
            .fullbar{
                height: 15px;
                border-radius: 10px; 
                background: linear-gradient(90deg, rgba(248,0,255,1) 0%, rgba(169,48,212,1) 49%, rgba(132,0,255,1) 100%);
                display: "flex";
            }
            .emptybar{
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            }
            `}</style>
        </div>
    );
}