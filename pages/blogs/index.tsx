import { NextPage } from 'next'
import axios from 'axios'


type BlogsPost = {
    id: number;
    title: string;
}

type BlogsPageProps = {
    posts: BlogsPost[]
}


const BlogsPage: NextPage<BlogsPageProps> = ({ posts }) => {
 return <div>BlogsPage
    {posts.map((p) => <div key={p.id}>{p.title}</div>)}   
    </div>
};

export async function getStaticProps() {
    const { data: posts } = await axios.get<BlogsPost>("https://my-json-server.typicode.com/typicode/demo/posts")
    return {
        props: { posts }
    }
}



export default BlogsPage