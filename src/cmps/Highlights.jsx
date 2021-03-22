import React from 'react';
import { dishService } from '../dishService';
import DishList from './DineList'

export class Highlights extends React.Component {

    state = {
        dishes: []
    }

    componentDidMount() {
        this.loadDishes()
    }

    loadDishes = () => {
        dishService.getDishes()
            .then((dishes) => this.setState({ dishes }))
    }

    render() {
        const { dishes } = this.state
        console.log(dishes);
        if (!dishes) return console.log('no dishes here yet');
        return (
            <section className="highlights">
                <div className="container flex">
                <div className="text-section">
                    <h2> A few highlights from our menu</h2>
                    <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
                        Our menu is revamped every season.</p>
                </div>
                { dishes && <DishList dishes={dishes} />}
                </div>
            </section>
        )
    }


}
