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

function HomePage() {
    return (
        <MeetupList meetups={DUMMY_MEETUPS} />
    );
}

export default HomePage;