import { GetStaticPropsContext, NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import style from "./index.module.scss"

type UserType = {
    id: number
    username: string
}

type Props = {
    user: UserType
}

type UserPageWithLayout = NextPage<Props> & {
    getLayout: (page: ReactElement) => ReactNode;
}

const UserPage: UserPageWithLayout = ({ user }) => {
    return  (
    <div>
        UserPage
        <p className={style['user-id']}>{user.id}</p>
        <p className={style.username}>{user.username}</p>
        <div className={style['user-details']}>
            <ul>
                <li>profile</li>
                <li>Account</li>
                <li>Settings</li>
            </ul>
        </div>
    </div>
    )
}

UserPage.getLayout = function (page: ReactElement) {
    return(
        <>
        <h1>Users layout</h1>
        <>{page}</>
        <footer> user page</footer>
    </>
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