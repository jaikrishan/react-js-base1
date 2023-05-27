import  React  from "react";

function FullName(props) {
    // return <h3>My name is {props.name}</h3>;
    return <h3>My name is {props.fName.name}</h3>;
  }

class ClassEg extends React.Component {
    fName = {
        name: 'jai kr'
    }
    // constructor(props) {
    //     super(props);
    // }
    // render() {
    //     return <h3>my name is {this.props.name}</h3>
    // }

    render() {
        return <FullName fName = {this.fName}/>
    }
    
}
export default ClassEg;