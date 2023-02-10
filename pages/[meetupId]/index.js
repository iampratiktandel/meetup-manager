import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetails(props) {
    return (
        <MeetupDetail
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
    );
}

export async function getStaticPaths() {
    const uri = "mongodb+srv://iampratiktandel:testuser@cluster0.ydkhodg.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    const meetupsCollection = client.db("Meetup_Manager").collection("meetups");

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        }))

        /** Static */
        // [
        //     {
        //         params: {
        //             meetupId: 'm1'
        //         }
        //     },
        //     {
        //         params: {
        //             meetupId: 'm2'
        //         }
        //     }
        // ]
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const uri = "mongodb+srv://iampratiktandel:testuser@cluster0.ydkhodg.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    const meetupsCollection = client.db("Meetup_Manager").collection("meetups");

    const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });
    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}

export default MeetupDetails;