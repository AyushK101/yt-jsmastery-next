import { formatDate } from "@/lib/utils"
import { postType } from "@/types/post"
import { EyeIcon} from "lucide-react"
import Image from "next/image"
import  Link  from "next/link"
import { Button } from "./ui/button"

const StartUpCard = ({post}:{post: postType}) => {
  const {_createdAt, author: { _id: authorId , name}, _id, category, description, image, title, views } = post
  return (
    <div>
      <li className="startup-card group">
        {/** date + views */}
        <div className="flex-between">
          <p className="startup_card_date">
            {formatDate(_createdAt)}
          </p>
          <div className="flex gap-1.5">
            <EyeIcon className="size-6"/>
            <span className="text-16-medium">{views}</span>
          </div>
        </div>
        <div className="flex-between mt-5 gap-5">
        {/**name+title*/}
          <div className="flex-1">
            <Link href={`/user/${authorId}`}>
              <p className="text-16-medium line-clamp-1">
                {name}
              </p>
            </Link>
            <Link href={`/startup/${_id}`}>
              <h3 className="text-26-semibold line-clamp-1">{title}</h3>
            </Link>
          </div>
          {/** authorImg */}
          <Link href={`user/${authorId}`}>
            <Image src={`https://placehold.co/48x48`} alt={'placeholder'} height={48} width={48} className="rounded-full"/>
          </Link>
        </div>

        <Link href={`/startup/${_id}`}>
          <p className="startup-card_desc">
            {description}
          </p>
            {/**startupImg */}
          <img src={image} alt="placeholder" className="startup-card_img"/>
        </Link>
        {/**footer: category + button */}
        <div className="flex-between gap-5 mt-5">
          <Link href={`?query/${category.toLowerCase()}`}>
            <p className="text-16-medium">
              {category}
            </p>
          </Link>
          <Button className={`startup-card_btn`} asChild >
            <Link href={`/startup/${_id}`}>
              Details
            </Link>
          </Button>
        </div>
      </li>
    </div>
  )
}

export default StartUpCard