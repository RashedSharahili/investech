import MainCardProjext from "../components/Project/MainCardProjext";
import Collapse from "../components/Project/Collapse";
import XLCard from "../components/Project/XLCard";
import Breadcrumbs from "../components/Project/Breadcrumbs";
import Logo1 from '../../public/assets/projects/ProjectCard/images/logo1.png'
import Logo2 from '../../public/assets/projects/ProjectCard/images/logo2.png'
import Logo3 from '../../public/assets/projects/ProjectCard/images/logo3.png'
import Logo4 from '../../public/assets/projects/ProjectCard/images/logo4.png'
import Logo5 from '../../public/assets/projects/ProjectCard/images/logo5.png'
import Logo6 from '../../public/assets/projects/ProjectCard/images/logo6.png'

export const projects = [

  {
    projectImage: Logo2,
  },
  {
    projectImage: Logo3,
  },
  {
    projectImage: Logo4,
  },
  {
    projectImage: Logo5,
  },
  {
    projectImage: Logo6,
  },
  {
    projectImage: Logo3,
  },
]

export default function Projects() {
  return (
    <>
      <main className="flex min-h-screen flex-col justify-between bg-white">
        <div className="px-4">
          <Breadcrumbs />
          <div className="flex">
            <div>
              <Collapse />
            </div>
            <div className="mr-4 ml-4 flex flex-col gap-2">
              <XLCard cardImage={Logo1} />
              <div className="flex flex-wrap justify-center gap-2 gap-y-2">
                {projects.map((item) => {
                  return (
                    <MainCardProjext cardImage={item.projectImage} />
                  )
                })
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}