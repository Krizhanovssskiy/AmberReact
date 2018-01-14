import React from 'react';
import ListOursTeam from './ListOursTeam.jsx';

const listTeam = [
    {
        id: 1,
        img: '../img/210x280.jpg',
        name: 'Manny Delgado',
        subtitle: 'a little boy',
        text: 'Be who you are and say what\n' +
        'you feel, because those who mind don\'t matter.'

    },{
        id: 2,
        img: '../img/210x280.jpg',
        name: 'Luke Dunphy',
        subtitle: 'a little boy',
        text: 'Be who you are and say what\n' +
        'you feel, because those who mind don\'t matter.'

    },{
        id: 3,
        img: '../img/210x280.jpg',
        name: 'Mitchell Pritchett',
        subtitle: 'NATO representative',
        text: 'Be who you are and say what\n' +
        'you feel, because those who mind don\'t matter.'

    },{
        id: 4,
        img: '../img/210x280.jpg',
        name: 'Luke Dunphy',
        subtitle: 'NATO representative',
        text: 'Be who you are and say what\n' +
        'you feel, because those who mind don\'t matter.'

    }

]

export default class OurTaem extends React.Component {
    constructor () {
        super();
    }
    render() {
        return(
            <section className="our-team">
                <div className="container">
                    <div className="wrap-text-header">
                        <h3>Our team</h3>
                    </div>
                    <ul className="our-team-list row text-center justify-content-center">
                        {
                            listTeam.map(team => <ListOursTeam key={team.id} img={team.img} name={team.name} subtitle={team.subtitle} text={team.text} />)
                        }
                    </ul>
                </div>
            </section>
        );
    }
}