import HeadObject from "../components/head";
import { BsArrowRight } from "react-icons/bs";
import Statistic from "../components/Statistic";
import Gallery from "../components/Gallery";
import Person from "../components/Person";

export default function Home() {
  return (
    <div className="bg-lightPink">
      <HeadObject />
      <section>
        <div className="bg-blue w-screen h-auto py-8">
          <h1 className="font-gosha">CodeHers Hack!</h1>
          <p className="font-nunito">
            This year, more than 100 high school students from around the world
            came together virtually and built awesome projects.
          </p>
          <div className="flex flex-col font-nunito">
            <div className="flex flex-row">
              {/** icon */}
              <p>April 8-10, 2021</p>
            </div>
            <div>
              {/** icon */}
              <p>Virtual</p>
            </div>
          </div>
        </div>
      </section>
      <svg
        viewBox="0 0 900 100"
        width="900"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        <path
          d="M0 26l7.8-1.2c7.9-1.1 23.5-3.5 39.4-2.5C63 23.3 79 27.7 94.8 35c15.9 7.3 31.5 17.7 47.2 15.3C157.7 48 173.3 33 189.2 24c15.8-9 31.8-12 47.6-4.8 15.9 7.1 31.5 24.5 47.4 26.3 15.8 1.8 31.8-11.8 47.6-9.2C347.7 39 363.3 58 379 66c15.7 8 31.3 5 47.2.2 15.8-4.9 31.8-11.5 47.6-15.5 15.9-4 31.5-5.4 47.2.8 15.7 6.2 31.3 19.8 47.2 17.8 15.8-2 31.8-19.6 47.6-18.8 15.9.8 31.5 20.2 47.4 19 15.8-1.2 31.8-22.8 47.6-35.8 15.9-13 31.5-17.4 47.2-16.4 15.7 1 31.3 7.4 47.2 14C821 38 837 45 852.8 50.5 868.7 56 884.3 60 892.2 62l7.8 2V0H0z"
          fill="#A8DEFF"
        />
      </svg>
      <main className="mx-8 md:mx-24">
        <section className="flex flex-col">
          <div className="flex flex-row">
            <img
              className="w-40 h-auto"
              src="https://cdn.discordapp.com/attachments/820189023384633344/844072838482362428/codehershackstickers_2.png"
              alt="Cute bunny graphic"
            />
            <Gallery
              image="https://cdn.discordapp.com/attachments/820189023384633344/844073699367583774/unknown.png"
              title="Workshops"
            >
              description ipsum
            </Gallery>
          </div>
        </section>
        <section>
          <div className="flex flex-row justify-evenly bg-blue rounded-lg py-6">
            <Statistic number="48" description="hours of hacking" />
            <Statistic number="48" description="hours of hacking" />
            <Statistic number="48" description="hours of hacking" />
          </div>
        </section>
        <section>
          <h2>Winners</h2>
          <div>{/** winner components */}</div>
        </section>
        <section>
          <h2>Team</h2>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5">
            <Person
              name="Christie K."
              role="Lead Organizer"
              image="https://cdn.discordapp.com/attachments/844076536294539284/844076798647599144/Christie_Kwon.JPG"
            />
            <Person
              name="Christie K."
              role="Lead Organizer"
              image="https://cdn.discordapp.com/attachments/844076536294539284/844076798647599144/Christie_Kwon.JPG"
            />
            <Person
              name="Christie K."
              role="Lead Organizer"
              image="https://cdn.discordapp.com/attachments/844076536294539284/844076798647599144/Christie_Kwon.JPG"
            />
            <Person
              name="Christie K."
              role="Lead Organizer"
              image="https://cdn.discordapp.com/attachments/844076536294539284/844076798647599144/Christie_Kwon.JPG"
            />
            <Person
              name="Christie K."
              role="Lead Organizer"
              image="https://cdn.discordapp.com/attachments/844076536294539284/844076798647599144/Christie_Kwon.JPG"
            />
            <Person
              name="Christie K."
              role="Lead Organizer"
              image="https://cdn.discordapp.com/attachments/844076536294539284/844076798647599144/Christie_Kwon.JPG"
            />
            <Person
              name="Christie K."
              role="Lead Organizer"
              image="https://cdn.discordapp.com/attachments/844076536294539284/844076798647599144/Christie_Kwon.JPG"
            />
            <Person
              name="Christie K."
              role="Lead Organizer"
              image="https://cdn.discordapp.com/attachments/844076536294539284/844076798647599144/Christie_Kwon.JPG"
            />
            <Person
              name="Christie K."
              role="Lead Organizer"
              image="https://cdn.discordapp.com/attachments/844076536294539284/844076798647599144/Christie_Kwon.JPG"
            />
          </div>
        </section>
        <section>
          <h2>Special thanks to</h2>
          <div>
            {/** judges, mentors, workshop hosts, paneistlis, speakers */}
          </div>
        </section>
        <section>
          <h2>Sponsors</h2>
          <div>{/** sponsors here */}</div>
        </section>
        <section>
          <p className="font-gosha text-4xl pb-6">
            Thanks to everyone for coming to CodeHers Hack! We hope to see you
            again next year!
          </p>
          <button className="flex flex-row rounded-lg bg-brightPink text-white font-nunito font-semibold justify-center items-center text-xl px-5 py-1">
            More from CodeHers. <BsArrowRight size={30} color="white" />
          </button>
        </section>
      </main>
    </div>
  );
}
