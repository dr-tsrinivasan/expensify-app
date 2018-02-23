import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div> 
            {props.isAdmin && <p>This is private informantion.</p>}
            <WrappedComponent {...props}/>
        </div>
    )

};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div> 
            {!!props.isAuthenticated ? 
                    <WrappedComponent {...props} /> :<p>You are not authenticated</p> 
            }                          
        </div>
    )    
}
const AdminInfo = withAdminWarning(Info);

// const AdminInfoComponent = (props) => (
//     <div>
//         {props.isAdmin && <p>This is private informantion.</p>}
//         <props.WrappedComponent {...props}/>

//     </div>
// )

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details:" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details:" />, document.getElementById('app'));
// ReactDOM.render(<AdminInfoComponent WrappedComponent={Info} isAdmin={true} info="There are the details:" />, document.getElementById('app'));  