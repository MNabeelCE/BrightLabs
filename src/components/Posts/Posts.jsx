import Post from '../Post/Post'
import Individual from '../../../assets/icons/individual.png';
import agency from '../../../assets/icons/agency.png';

const Posts = () => {
    const n = [
        {
            person: 'Individual',
            imgSrc: Individual
        },
        {
            person: 'Agency',
            imgSrc: agency
        }
    ];

    const posts = n.map((p) => {
        return <Post person={p.person} source={p.imgSrc} key={p.imgSrc}/>
    })
    return (
        <div className="app-content">
            {posts}
        </div>
    );
}

export default Posts