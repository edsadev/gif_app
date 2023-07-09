import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import socialMedia from "@/constants/socialMedia"

function Footer() {
  return (
    <div className="container flex p-12 bg-gray-200">
      <div className="flex-grow">
        <div className="flex gap-4">
          <a href={socialMedia.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 block w-5"><FontAwesomeIcon icon="fab fa-linkedin" size="lg" /></a>
          <a href={socialMedia.github} target="_blank" rel="noreferrer" className="text-gray-500 block w-5"><FontAwesomeIcon icon="fab fa-github" size="lg" /></a>
          <a href={socialMedia.twitter} target="_blank" rel="noreferrer" className="text-gray-500 block w-5"><FontAwesomeIcon icon="fab fa-twitter" size="lg" /></a>
          <a href={socialMedia.instagram} target="_blank" rel="noreferrer" className="text-gray-500 block w-5"><FontAwesomeIcon icon="fab fa-instagram" size="lg" /></a>
        </div>
      </div>
      <div className="text-gray-500">
        Developed by <a href="https://edsadev.com" className="underline font-bold">EdSaDev</a>
      </div>
    </div>
  )
}

export default Footer