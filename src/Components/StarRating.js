import React, {useState} from 'react'
import { FaTag } from 'react-icons/fa'

const StarRating = () => {
    const [rating, setRating]  = useState(null)  
    const [hover, setHover] = useState(null)
    
    return (
            <div>
                {[...Array(5)].map((tag, i) => {
                    const ratingValue = i + 1


                    return <labbel>
                        <input type='radio' name='rating' value={ratingValue}  />
                        <FaTag className='tag' onClick={() =>setRating(ratingValue)}  onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} color={ratingValue <= (hover || rating) ? '#66cdaa' : '#d3d3d3' } />
                        </labbel>
                })}
                <p>Rated {rating}/5 Tags</p>
            </div>
        )
    
}

export default StarRating
