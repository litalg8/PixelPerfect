import React from 'react';

function DinePreview(props) {
    const { title, desc, imgUrl } = props.dish
    return (
        <article className="dish-preview">
            <ul className="flex">
                <img src={`${imgUrl}`} alt="dish" />
                <div className="section-border"></div>
                <div className="flex column">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            </ul>

        </article>
    )
}
export default DinePreview;