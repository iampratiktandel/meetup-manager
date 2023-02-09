import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'Pilot',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
        address: 'Munich, Germany'
    },
    {
        id: 'm2',
        title: 'Reunion',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
        address: 'Munich, Germany'
    }
];

function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups} />
    );
}

export async function getServerSideProps(context) {
    const req = context.req;
    const res = context.res;

    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}

// export async function getStaticProps() {
//     // fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 1
//     };
// }

export default HomePage;