import React, { useEffect, useState } from 'react'
import './blog.css'
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../types/category';
import { PostInterface } from '../../types/post';
// import SelectMenu from '../../components/SelectMenu/SelectMenu';
// import { SelectMenuInterface } from '../../components/SelectMenu/SelectMenuInterface';
import { findAllPosts, findPostByCategory, searchPostByKeyword } from '../../api/postService';
import { findAllCategories } from '../../api/categoryService';
import { Button, Select, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

// the following page will be the main blog page
function Blog() {


    // to navigate and redirect through pages
    const navigate = useNavigate();


    // variable and states here

    // in the first time it's exact copy of categories
    const [posts, setPosts] = useState<PostInterface[] | []>([])
    const [filteredPosts, setFilteredPosts] = useState<PostInterface[] | []>([...posts])

    // change interface
    const [categories, setCategories] = useState<ICategory[]>([])

    // Search Posts
    const [query, setQuery] = useState<string>("");


    // useEffect and services call here

    useEffect(() => {


        const fetchData = async () => {

            const posts = await findAllPosts() || [];
            const categoriesDb = await findAllCategories() || [];

            setPosts([...posts])
            setFilteredPosts([...posts])
            setCategories([...categoriesDb])

        }

        fetchData();

    },[])





    // this will be done on the actual posts from api
    const filterCategories = async (value: string) => {


        console.log(value);
        console.log("filterCategories")

        const selectCategory: number = parseInt(value)



        if(selectCategory === -1) {
            setFilteredPosts([...posts]);
            return
        }

        
        try {

            const selectPostsCategory = await findPostByCategory(selectCategory) || [];
            setFilteredPosts([...selectPostsCategory])

        } catch(error) {
            console.log(error)
        }



    }


    // should fetch from api once again or take from cache
    const resetFilter = () => {
        console.log("reset filter")
        const query = "";

        setQuery(query);
        setFilteredPosts([...posts])

        console.log("posts ", posts)
        console.log("filteredPosts ", filteredPosts)
    }



    // will call api to search for blog
    // set time limit before calling backend to avoid api crash
    const searchBlog = async (e: React.ChangeEvent<HTMLInputElement>) => {

        const query = e.target.value;
        console.log("query", query)

        
        setQuery(query);

        const filteredPostsResult: PostInterface[] | null = await searchPostByKeyword(query);

        setFilteredPosts(filteredPostsResult || []);

        console.log(filteredPostsResult);
    }











    const handlePostClick = (e: React.MouseEvent<HTMLDivElement>, postId: number) => {

        console.log(e);
        

        console.log('post id', postId)
        navigate(`/posts/${postId}`);
    }


    //     id: 1,
    //     name: 'Categories',
    //     labelName: 'Post Categories',
    //     classNameValue: 'something',
    //     value: 'categories',
    //     color: 'primary',
    //     options: [
    //         {
    //             id: 1,
    //             name: 'Software Engineering',
    //             value: 'Software Engineering',
    //         },
    //         {
    //             id: 2,
    //             name: 'Data Science',
    //             value: 'Data Science',
    
    //         },
    //         {
    //             id: 3,
    //             name: 'Computer Science',
    //             value: 'Computer Science',
    
    //         },
    //         {
    //             id: 4,
    //             name: 'Music',
    //             value: 'Music',
    //         },
    //         {
    //             id: 5,
    //             name: 'Books/Manga',
    //             value: 'Books/Manga',
    //         },
    //         {
    //             id: 6,
    //             name: 'Shows/Movies',
    //             value: 'Shows/Movies',
    //         },

    //     ],

    //     // will throw the logic for update categories
    //     // it should update the categories in this page dropdown
    //     inputHandler() {
    //         const updatedCategories = filteredCategories.filter(el => el.isEntertainment === true)
    //         setFilteredCategories(updatedCategories)
    
    //         console.log("filteredCategories inside cat componenet", filteredCategories)
    //     },
    // }

// TODO: Replace with radix components
    return (
        <div className='content'>
            <h1>My Cool Blog</h1>

            <div className='blog'>

                <div className='search-area' >

                    <TextField.Root type="search" placeholder='search posts' value={query} onInput={searchBlog}>
                        <TextField.Slot>
                            <MagnifyingGlassIcon height="16" width="16" />
                        </TextField.Slot>
                    </TextField.Root>

                    <Button id='post-search-btn' type='button'>
                        Search
                    </Button>

                    <Select.Root defaultValue="-1" onValueChange={filterCategories} >
                        <Select.Trigger />
                        <Select.Content>
                            <Select.Item key={-1} value={String(-1)}>{'All'}</Select.Item>
                            {categories.map(category => (
                                <Select.Item key={category.id} value={String(category.id)}>{category.name}</Select.Item>
                                ))
                            }
                        </Select.Content>
                    </Select.Root>

                    <Button id='reset-btn' type='button' onClick={resetFilter}>
                        Reset
                    </Button>
                </div>

                <div className='posts'>

                    {/* loop over this */}
                    {filteredPosts.map(post =>



                        <div className='post-card' key={post.id} id={post.id.toString()} onClick={(e) => handlePostClick(e, post.id)}>

                            {/* <div className='post-image' style={{ background: 'url('+post.images[0]+')'}}></div> */}
                            <div className='post-image-container'>

                                <img className='post-image' src={post.images[0]} />
                            </div>



                            <div className='post-text'>
                                <div className='post-title'>
                                    <div className='post-title-text'>{post.title}</div>
                                    {/* handle date later */}
                                    <div className='post-date'>{post.createdDate ? post.createdDate.toString() : ""}</div>
                                </div>
                                <div className='post-description'>
                                    {post.description}
                                </div>
                            </div>
                        </div>



                    )}

                </div>

            </div>

        </div>
    )
}

export default Blog