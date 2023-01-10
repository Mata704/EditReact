const CustomerReview = ({createStars,reviewsScore}) =>
{
     

    return (
        <div className="review">
            <div className="score">
                {createStars(reviewsScore.score)}
                <span>{reviewsScore.score} of 5</span>
            </div>
            <div className="graymedium">By <span className="black">{reviewsScore.name}</span> on {reviewsScore.reviewDate}</div>
            <p>{reviewsScore.review}</p>
        </div> 
    )
}

export default CustomerReview;