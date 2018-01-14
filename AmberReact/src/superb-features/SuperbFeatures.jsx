import React from 'react'
import FeaturesList from './FeaturesList.jsx'

const featuresList = [
    {
        id: 1,
        name: 'Brilliant creative design',
        text: 'Ah, well! It means much the same thing, said the Duchess,' +
        'digging her sharp little chin into Alice\'s shoulder as she added, ' +
        'and the moral of that is m-dash.'
    },
    {
        id: 2,
        name: 'On mouse over title',
        text: 'Then they both bowed low, and their curls got entangled together. ' +
        'Alice laughed so much at this, that she had to run back into ' +
        'the wood for fear of their hearing her.'
    },
    {
        id: 3,
        name: 'Incredible documentation',
        text: 'Alice went timidly up to the door, and knocked. ' +
        'There\'s no sort of use in knocking, said the Footman,' +
        'and that for two reasons.'
    },
    {
        id: 4,
        name: 'Responsive & retina ready',
        text: 'Alice went timidly up to the door, and knocked. ' +
        '\'There\'s no sort of use in knocking,\' said the Footman, ' +
        '\'and that for two reasons. First, because I\'m on the same side.'
    },
]



export default class SuperbFeatures extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
            <section className="superb-features">
                <div className="container">
                    <div className="wrap-text-header">
                        <h3>Superb features</h3>
                    </div>
                    <ul className="features-list row">
                        {
                            featuresList.map(val => <FeaturesList key={val.id} name={val.name} text={val.text} />)
                        }
                    </ul>
                </div>
            </section>
        );
    }


}