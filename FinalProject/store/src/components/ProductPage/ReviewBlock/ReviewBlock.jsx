import CustomerReview from './CustomerReview/CustomerReview'

const ReviewBlock = ({score}) =>
{
    const reviewsScore=[
        {id:1,score:5 ,name:'Zé Manel', reviewDate:'February 18th, 2020', review:'Quisque dignissim neque in odio laoreet sodales. Phasellus gravida facilisis est. Ut nec metus lobortis, euismod felis eget, ornare erat. Nam tincidunt sem elit, a facilisis nibh maximus vitae. Proin suscipit augue mi, id sollicitudin orci lacinia vitae.'},
        {id:2,score:4 ,name:'Zé Maria', reviewDate:'February 19th, 2020', review:'Quisque dignissim neque in odio laoreet sodales. Phasellus gravida facilisis est. Ut nec metus lobortis, euismod felis eget, ornare erat. Nam tincidunt sem elit, a facilisis nibh maximus vitae. Proin suscipit augue mi, id sollicitudin orci lacinia vitae.'}
]

   const createStars =(value) =>( Array.from({ length: 5 }, () => Math.round(value)).map((element,i) => {
        return <i key={i} className={`icn-star ${element>i? "primary":""}`}></i>
        }))

    const createCustomerReviews = reviewsScore.map(review => {
       return <CustomerReview key={review.id} createStars={createStars} reviewsScore={review} />  
    })

    
    return (
        <div className="bg-graylight paddingverticaldouble marginbottomfull" id="reviews">
            <h2 className="textcenter">Reviews</h2>
            <div className="gridrow">
                <div className="col-12 col-t-5 col-d-4 offset-t-1 offset-d-2 score">
                    {createStars(score)}
                    <span>{Math.round(score)} of 5</span>
                </div>
                <div className="col-12 col-t-5 col-d-4 textright">
                    <a className="graymedium small" href="#" title="Share your thoughts with other customers">Share your thoughts with other customers</a>
                </div>

                <div className="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2">
                    <p>Top customer reviews</p>
                    {createCustomerReviews}
                    <div>
                        <a className="secondary fancytext" href="#">Show more reviews</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewBlock;