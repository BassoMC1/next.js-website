import { NextPage } from 'next'
import { useEffect } from 'react'
import axios from 'axios'

type BlogsPageProps = {
    posts: any[]
}


const BlogsPage: NextPage<BlogsPageProps> = ({ posts }) => {
 return <div>BlogsPage
    {posts.map((p) => <div key={p.id}>{p.title}</div>)}   
    </div>
};

export async function getStaticProps() {
    
    return {
        props: {
            posts: [
                {
                    id: 1, 
                    title: "Hello World!"
                
                }
            ]
        }
    }
}



export default BlogsPage