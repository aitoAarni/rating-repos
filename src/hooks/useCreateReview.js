import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'

const useCreateReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW)

    const createReview = async reviewItem => {
        const review = {
            text: reviewItem.review,
            rating: Number(reviewItem.rating),
            ownerName: reviewItem.ownerName,
            repositoryName: reviewItem.repositoryName,
        }
        console.log(typeof review.rating)
        const { data } = await mutate({
            variables: {
                review,
            },
        })
        return data
    }
    return [createReview, result]
}

export default useCreateReview
