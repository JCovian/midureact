import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'JCovian',
        name: 'Jose Covián',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Angel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: false
    },
    {
        userName: 'TMChein',
        name: 'Tomás',
        isFollowing: false
    } 
]

export function App() {
    //const formatUserName = (userName) => `@${userName}`
    //const formattedUserName = (<span>@{userName}</span>)

    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard 
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                        </TwitterFollowCard>
                    ))
            }
        </section>
        
    )
}