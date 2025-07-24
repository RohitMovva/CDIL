import Image from "next/image";
import Button from "../../components/button";

export default function AboutPage() {
  return (
    <>
      <div className="grid grid-cols-2 place-items-center gap-20">
        <div className="grid gap-10">
          <h1 className="text-7xl">Our story</h1>
          <h2 className="text-xl">
            Founded by students who believe technology should be accessible to
            everyone, regardless of age, background, or economic status.
          </h2>
        </div>
        <div className="grid relative place-items-end w-full h-120 max-w-full">
          <Image
            src="/placeholder-parrot-2.webp"
            fill
            alt="Students teaching technology"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>

      <div className="grid gap-10 place-content-center place-items-center text-center">
        <h1 className="text-5xl">What drives us</h1>
        <h2 className="text-xl max-w-4xl">
          We recognized that while technology advances rapidly, many in our
          communities struggle to keep up. The digital divide isn't just about
          access to devices—it's about having the skills and confidence to
          navigate our increasingly digital world.
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-10">
        <div className="grid gap-5 p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-semibold">Accessibility First</h3>
          <p className="text-lg">
            We believe digital literacy should be free and available to
            everyone, which is why all our services come at no cost to
            participants.
          </p>
        </div>
        <div className="grid gap-5 p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-semibold">Student-Led</h3>
          <p className="text-lg">
            Our programs are designed and taught by students who understand both
            technology and the importance of patient, personalized instruction.
          </p>
        </div>
        <div className="grid gap-5 p-8 bg-gray-50 rounded-2xl">
          <h3 className="text-2xl font-semibold">Community Focused</h3>
          <p className="text-lg">
            We work directly with local organizations to reach the people who
            can benefit most from digital literacy education.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 place-items-center gap-20">
        <div className="grid relative place-items-end w-full h-120 max-w-full">
          <Image
            src="/placeholder-parrot-2.webp"
            fill
            alt="Community workshop in action"
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="grid gap-10">
          <h1 className="text-5xl">Making a difference</h1>
          <h2 className="text-xl">
            Since our founding, we've helped hundreds of community members gain
            confidence with technology. From seniors learning to video call
            family to adults developing job-ready computer skills, every person
            we teach becomes more connected to the digital world.
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="text-lg">People taught</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600">25+</div>
              <div className="text-lg">Partner organizations</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-10 place-content-center place-items-center text-center">
        <h1 className="text-5xl">How we work</h1>
        <div className="grid grid-cols-3 gap-10 max-w-6xl">
          <div className="grid gap-5">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-semibold">Partner</h3>
            <p className="text-lg">
              We collaborate with libraries, community centers, and nonprofits
              to reach people where they are.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="text-xl font-semibold">Teach</h3>
            <p className="text-lg">
              Our student volunteers provide patient, one-on-one instruction
              tailored to each person's needs and goals.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="text-xl font-semibold">Empower</h3>
            <p className="text-lg">
              We help people gain the confidence and skills they need to thrive
              in our digital world.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 place-items-center gap-20">
        <div className="grid gap-10">
          <h1 className="text-5xl">Meet our team</h1>
          <h2 className="text-xl">
            Our diverse group of student volunteers brings passion, patience,
            and technical expertise to every workshop. We're united by a shared
            belief that everyone deserves to feel confident with technology.
          </h2>
          <p className="text-lg text-gray-600">
            Interested in joining our mission? We're always looking for
            dedicated students who want to make a difference in their
            communities.
          </p>
          <div>
            <Button text="Join our team" href="/volunteer" />
          </div>
        </div>
        <div className="grid relative place-items-end w-full h-120 max-w-full">
          <Image
            src="/placeholder-parrot-2.webp"
            fill
            alt="Team of student volunteers"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="grid gap-10 place-content-center place-items-center text-center bg-blue-50 p-16 rounded-3xl">
        <h1 className="text-5xl">Ready to get involved?</h1>
        <h2 className="text-xl max-w-3xl">
          Whether you want to learn, teach, or support our mission, there are
          many ways to be part of closing the digital divide.
        </h2>
        <div className="flex gap-10">
          <Button text="Attend a workshop" href="/events" />
          <Button text="Become a volunteer" href="/volunteer" />
          <Button text="Support our work" href="/donate" />
        </div>
      </div>
    </>
  );
}
