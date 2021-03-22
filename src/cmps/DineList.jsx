import React from 'react'
import DinePreview from './DinePreview'

function DineList(props) {
    return (
        <section className="dine-list flex column">
            { props.dishes.map(dish =>
                <DinePreview key={dish._id} dish={dish} />
            )
            }
        </section>
    )
}

export default DineList;