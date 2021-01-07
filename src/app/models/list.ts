import { Card } from "./card"

export class List {
  id: number
  title: string
  board_id: number
  cards: Card[] = []
}
