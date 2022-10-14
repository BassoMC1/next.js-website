import { GetStaticPropsContext, NextPage } from 'next'
import axios from 'axios'


type BlogPost = {
    id: number;
    title: string;
}


type BlogsPostProps = {
    post: BlogPost
}

const BlogPost: NextPage<BlogsPostProps> = ({ post }) => 
<div>BlogPost
    <p>
        {post.title} - {post.id}
    </p>
</div>

export async function getStaticProps(context: GetStaticPropsContext){
    const id = context.params!.id;
    const { data: post } = await axios.get<BlogPost>(
        `https://my-json-server.typicode.com/typicode/demo/posts/${id}`
    );

    return {
        props: { post }
    }
}


export async function getStaticPaths() {
    const { data: posts } = await axios.get<BlogPost[]>(
        "https://my-json-server.typicode.com/typicode/demo/posts"
        );

    const paths = posts.map(({ id }) => ({ params: {id: id.toString() }}));
    console.log(paths);
    return  {
        paths,
        fallback: false 
    }
    
}
export default BlogPost