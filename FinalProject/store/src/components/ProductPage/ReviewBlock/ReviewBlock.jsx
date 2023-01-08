const ReviewBlock = (props) =>
{
    

    return (
        <div class="bg-graylight paddingverticaldouble marginbottomfull" id="reviews">
            <h2 class="textcenter">Reviews</h2>
            <div class="gridrow">
                <div class="col-12 col-t-5 col-d-4 offset-t-1 offset-d-2 score">
                    <i class="icn-star primary"></i><i class="icn-star primary"></i><i class="icn-star primary"></i><i class="icn-star primary"></i><i class="icn-star"></i><span>4.2 of 5</span>
                </div>
                <div class="col-12 col-t-5 col-d-4 textright">
                    <a class="graymedium small" href="#" title="Share your thoughts with other customers">Share your thoughts with other customers</a>
                </div>
                <div class="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2">
                    <p>Top customer reviews</p>
                    <div class="review">
                        <div class="score">
                            <i class="icn-star primary"></i><i class="icn-star primary"></i><i class="icn-star primary"></i><i class="icn-star primary"></i><i class="icn-star primary"></i><span>5 of 5</span>
                        </div>
                        <div class="graymedium">By <span class="black">Zé Manel</span> on February 18th, 2020</div>
                        <p>Quisque dignissim neque in odio laoreet sodales. Phasellus gravida facilisis est. Ut nec metus lobortis, euismod felis eget, ornare erat. Nam tincidunt sem elit, a facilisis nibh maximus vitae. Proin suscipit augue mi, id sollicitudin orci lacinia vitae.</p>
                    </div>
                    <div>
                        <a class="secondary fancytext" href="#">Show more reviews</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewBlock;