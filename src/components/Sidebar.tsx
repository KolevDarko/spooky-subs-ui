import { List, ListItem, ListIcon } from "@chakra-ui/react"
import { CalendarIcon, EditIcon, AtSignIcon } from '@chakra-ui/icons'
import { NavLink } from "react-router-dom"


export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} color="white" />
          Subscribe
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="client">
          <ListIcon as={EditIcon} color="white" />
          Client
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="vendor">
          <ListIcon as={AtSignIcon} color="white" />
          Vendor
        </NavLink>
      </ListItem>
    </List>
  )
}