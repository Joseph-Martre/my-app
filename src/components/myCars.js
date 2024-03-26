import { Component } from 'react'
import Car from './Cars'
import Welcome from './Welcome';

class Mycars extends Component {
    state={
        voitures: [
            {name:"Ford", color:"red", year:2000},
            {name:"Mercedes", color:"black", year:2010},
            {name:"Peugeot", color:"green", year:2018},
        ]
    };
    addTenYears = () => {
        const updatedState = this.state.voitures.map((param)=>{
            return (param.year -= 10);
        });
        this.setState({updatedState});
    };
    getAge = year => {
        const now = new Date().getFullYear();
        const age = now - year;
        //ans ou an
        return(age===1? `${age} an` : `${age} ans`);
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button onClick={this.addTenYears}>+10 ans</button>
                {
                    this.state.voitures.map(({name,color,year},index)=>{
                        return(
                            <div key={index}>
                                <Car
                                    nom={name}
                                    color={color}
                                    year={this.getAge(year)}
                                />
                            </div>
                        );
                    })
                }
                <Welcome greeting={"Bonsoir"}/>
            </div>
           
        )
    }
}

export default Mycars