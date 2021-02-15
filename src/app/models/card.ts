import { from } from "rxjs"
import { Comment } from "./comment"

export class Card {
  id: number
  list_id: number
  title: string
  label: string
  description: string
  order_number: number
  comments: Comment[] = []
}
