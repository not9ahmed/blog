import axios from "axios"
import { PostEditInterface, PostInterface } from "../types/post";

const API_BASE_URL : string = import.meta.env.VITE_API_BASE_URL


    // first fetch the exisiting data
    const post: PostInterface = {
        id: 1,
        title: 'Why should you use Next JS in 2024?',
        description: 'The following blog post will discuss briefly why you should skip React and start using Next JS for your project',
        content: 'Lorem ipsum ~image~ dolor sit amet, consectetur adipiscing elit. ~image~ Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.',
        images: ['https://res.cloudinary.com/practicaldev/image/fetch/s--usRTLj88--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jaln87lqpoyec77lnkbn.png'],
        createdDate: new Date(),
        createdBy: 'ahmed'
    };


    const posts: Array<PostInterface> = [
        {
            id: 1,
            title: "Tensorflow and Their Newest Update",
            description: "Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. Facilisi tortor natoque euismod scelerisque. Mauris et adipiscing in non. Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. ",
            content: "Very long title",
            images: ["https://www.tensorflow.org/static/cloud/images/tf_cloud_code_sample.png"],
            category: 2,
            createdDate: new Date(),
            createdBy: 'notahmed'
        },
        {
            id: 2,
            title: "Tensorflow and Their Newest Update",
            description: "Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. Facilisi tortor natoque euismod scelerisque. Mauris et adipiscing in non. Lorem ipsum dolor sit amet consectetur. Lobortis leo eu sem eleifend netus etiam posuere magna. ",
            content: "Very long title",
            images: ["https://www.tensorflow.org/static/cloud/images/tf_cloud_code_sample.png"],
            category: 2,
            createdDate: new Date(),
            createdBy: 'notahmed'
        },
        {
            id: 3,
            title: "React is so cool, but the SSR is needed",
            description: "React rant",
            content: "Very long title",
            images: ["https://www.tensorflow.org/static/cloud/images/tf_cloud_code_sample.png"],
            category: 1,
            createdDate: new Date(),
            createdBy: 'notahmed'
        },
        {
            id: 4,
            title: "Cloud Computing",
            description: "AWS or Azure which one to use",
            content: "Very long title",
            images: ["https://www.tensorflow.org/static/cloud/images/tf_cloud_code_sample.png"],
            category: 1,
            createdDate: new Date(),
            createdBy: 'notahmed'
        },
        {
            id: 5,
            title: "Jazz is nice",
            description: "have been listening to a lot of jazz lately",
            content: "Very long title",
            images: ["https://www.tensorflow.org/static/cloud/images/tf_cloud_code_sample.png"],
            category: 4,
            createdDate: new Date(),
            createdBy: 'notahmed'
        }
    ]


export const findAllPosts = (): PostInterface[] => {



    // axios call should be here for getting all posts
    // try {
        
    // } catch (error) {
        
    // }

    return posts


}



export const findPostById = async (id: number): Promise<PostInterface> => {


    try {

        // will be get request
        const { data } = await axios.post(API_BASE_URL + `/anything/${id}`,
            {
                ...post,

            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });


        console.log("original", data);

        return post
    } catch (error) {
        console.log(error);
        return post
    }


}


export const updatePostById = async (id: number, toBeUpdatedpost: PostEditInterface):  Promise<PostInterface | undefined> => {

    try {
        const  { data }  = await axios.put(API_BASE_URL + `/anything/${id}`,
            {
                ...toBeUpdatedpost,

            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

        console.log("updated post", data);


        // let updatedPost = data



        return post


    } catch (error) {
        console.log(error);
    }

}


export const deletePostById = async (id: number) => {

    try {
        const  { data }  = await axios.delete(API_BASE_URL + `/anything/${id}`,
        {
            data: {

                ...post
            }
        });

        console.log("delete post before parse", data);

        let parsed = {...data, data: JSON.parse(data.data)}
        
        console.log("delete post", parsed);

        // make it json message
        return "success"

    } catch (error) {
        console.log(error);
        return error;
    }

}


// to search post by keywords
export const searchPostByKeyword = async (q: string): Promise<PostInterface[] | undefined> => {



    try {


        // api logic
        // const data = await axios.get(API_BASE_URL + `/anything`,
        // {
        //         params: {

        //         },
        //         data: {

        //             ...post
        //         }
        //     }
        // )
        
        const filteredPostsResult = posts.filter(post =>
            post.title.toLowerCase().match(q) || post.description.toLowerCase().match(q)
        )


        console.log(filteredPostsResult)

        return filteredPostsResult;

    } catch (error) {
        console.log(error)
    }

}



// export default {
//     findPostById,
//     updatePostById
// }