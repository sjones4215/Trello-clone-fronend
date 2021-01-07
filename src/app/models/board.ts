import { List } from "./list"

export class Board {
  id: number
  title: string
  description: string
  lists: List[] = []
}
