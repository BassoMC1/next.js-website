import { GetStaticPropsContext, NextPage } from 'next'

type UserType = {
    id: number
    username: string
}

type Props = {
    user: UserType
}

const UserPage: NextPage<Props> = ({ user }) => {
    return  (
    <div>
        UserPage
        <p>{user.id}</p>
        <p> {user.username}</p>
    </div>
    )
}

export async function getServerSideProps(context: GetStaticPropsContext) {
    console.log(context)
    return {
        props: {
           user: {
            id: 1,
            username: "BassoMC"
           }
        },
    }

}

export default UserPage