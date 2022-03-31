import {Continent} from "../Continent/Continent";

export interface ExtendedCountry{
  code: string
  name: string
  native: string
  phone: string
  continent: Continent
  capital: string
  currency: string
  languages: [
    {name: string}
  ]
  emoji: string
  emojiU: string
  states: [
    {name: string}
  ]
}
