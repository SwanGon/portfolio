import React from "react"
import Image from "next/image"

const skills = [
  { skill: "JavaScript/TypeScript" },
  { skill: "NodeJS" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "React Native" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "PHP Symfony" },
  { skill: "Java/Kotlin" },
  { skill: "Python" }
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          À propos de moi
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Apprennez à me connaître
            </h1>
            <p>
              Bonjour, je suis Swan Gonzales, un étudiant en
              <span className="font-semibold text-teal-600">{" développement logiciel"}</span>, qui est
              <span className="font-bold">{" motivé"}</span>,
              <span className="font-bold">{" patient"}</span>, et surtout
              <span className="font-bold">{" avide de connaissances"}</span>,
              basé à Nantes.
            </p>
            <br />
            <p>
              Je suis actuellement en dernière année de mon cursus en BUT Informatique à l'IUT de Nantes.
              J'ai plusieurs expériences comme mon année d'alternance à la RATP en tant que développeur Fullstack.
              J'ai également eu l'opportunité de travailler en tant que stagiaire développeur PHP Symfony à Experis France.
            </p>
            <br />
            <p>
              Je suis également nageur/sauveteur en parallèle de mes études, ce qui me permet de développer des
              compétences en <span className="font-bold">{" gestion de stress"}</span> et en <span className="font-bold">{" travail d'équipe"}</span>.
              Aussi, je suis passioné de golf, où j'apprends l'<span className="font-bold">{"humilité"}</span> et la <span className="font-bold">{" patience"}</span>.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/golf.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
